// ===== BANCO DE DADOS DE PRODUTOS =====
const produtos = [
  {
    id: 1,
    nome: "Colcha Fofinha de Casal",
    categoria: "cama",
    preco: 40.0,
    imagem: "imagem/colchafofinhacasal.jpeg",
    destaque: true,
  },
  {
    id: 2,
    nome: "Edredom King Microfibra",
    categoria: "cama",
    preco: 300.0,
    imagem: "imagem/colcha casal infantil.jpeg",
    destaque: true,
  },
  {
    id: 3,
    nome: "Toalha de Banho Felpuda",
    categoria: "banho",
    preco: 49.9,
    imagem: "imagem/toalha.jpeg",
    destaque: true,
  },
  {
    id: 4,
    nome: "Tapete",
    categoria: "casa",
    preco: 250.0,
    imagem: "imagem/tapete.jpeg",
    destaque: false,
  },
  {
    id: 5,
    nome: "Colcha Solteiro",
    categoria: "cama",
    preco: 300.0,
    imagem: "imagem/colcha solteiro.jpeg",
    destaque: true,
  },
  {
    id: 6,
    nome: "Colcha Solteiro Feminina",
    categoria: "cama",
    preco: 300.0,
    imagem: "imagem/colchasolteirofem.jpeg",
    destaque: false,
  },
  {
    id: 7,
    nome: "Colcha Solteiro Masculino",
    categoria: "cama",
    preco: 299.9,
    imagem: "imagem/colchasolteiromasc.jpeg",
    destaque: true,
  },
  {
    id: 8,
    nome: "Tapete Marrom",
    categoria: "casa",
    preco: 249.9,
    imagem: "imagem/tapetemarrom.jpeg",
    destaque: false,
  },
];

// Formatação de moeda em Real (R$ 1.234,56)
const formatarMoeda = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const produtosDestaque = produtos.filter((p) => p.destaque === true);

// ===== CARRINHO (localStorage) =====
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

function atualizarContadorCarrinho() {
  const countSpan = document.getElementById("cartCount");
  if (countSpan) {
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    countSpan.innerText = totalItens;
  }
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  if (!produto) return;

  const itemExistente = carrinho.find((item) => item.id === id);
  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }
  salvarCarrinho();
  abrirCartSidebar();
}

function renderizarCarrinho() {
  const cartContainer = document.getElementById("cartItems");
  const totalSpan = document.getElementById("cartTotalPrice");
  if (!cartContainer) return;

  if (carrinho.length === 0) {
    cartContainer.innerHTML =
      '<p class="empty-cart-msg">Seu carrinho está vazio</p>';
    if (totalSpan) totalSpan.innerText = formatarMoeda(0);
    const paymentSection = document.getElementById("paymentSection");
    if (paymentSection) paymentSection.style.display = "none";
    return;
  }

  let html = "";
  let total = 0;
  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;
    html += `
            <div class="cart-item">
                <img src="${item.imagem}" alt="${item.nome}">
                <div class="cart-item-details">
                    <h4>${item.nome}</h4>
                    <p>${formatarMoeda(item.preco)}</p>
                    <div class="cart-item-actions">
                        <button class="cart-qty-btn" data-id="${item.id}" data-op="minus">-</button>
                        <span>${item.quantidade}</span>
                        <button class="cart-qty-btn" data-id="${item.id}" data-op="plus">+</button>
                        <button class="cart-remove" data-id="${item.id}" title="Remover">🗑️</button>
                    </div>
                </div>
            </div>
        `;
  });
  cartContainer.innerHTML = html;
  if (totalSpan) totalSpan.innerText = formatarMoeda(total);

  const paymentSection = document.getElementById("paymentSection");
  if (paymentSection && carrinho.length > 0) {
    paymentSection.style.display = "block";
    const paymentTotal = document.getElementById("paymentTotal");
    if (paymentTotal) paymentTotal.innerText = formatarMoeda(total);
  }

  document.querySelectorAll(".cart-qty-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      const op = btn.dataset.op;
      const item = carrinho.find((i) => i.id === id);
      if (item) {
        if (op === "plus") item.quantidade++;
        else {
          item.quantidade--;
          if (item.quantidade <= 0)
            carrinho = carrinho.filter((i) => i.id !== id);
        }
        salvarCarrinho();
      }
    });
  });

  document.querySelectorAll(".cart-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      carrinho = carrinho.filter((i) => i.id !== id);
      salvarCarrinho();
    });
  });
}

// ===== UI CARRINHO SIDEBAR =====
function abrirCartSidebar() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.add("open");
  if (overlay) overlay.classList.add("active");
}

function fecharCartSidebar() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
}

// ===== PAGAMENTO =====
function getTotalCarrinho() {
  return carrinho.reduce(
    (total, item) => total + item.preco * item.quantidade,
    0,
  );
}

function mostrarFormasPagamento() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  const paymentSection = document.getElementById("paymentSection");
  if (paymentSection) {
    paymentSection.style.display = "block";
    const btnCheckout = document.querySelector(".btn-checkout");
    if (btnCheckout) btnCheckout.style.display = "none";
    paymentSection.scrollIntoView({ behavior: "smooth" });
  }
}

function togglePaymentMethod(method) {
  const creditCardForm = document.getElementById("creditCardForm");
  const pixSection = document.getElementById("pixSection");
  const methodBtns = document.querySelectorAll(".payment-method-btn");

  methodBtns.forEach((btn) => btn.classList.remove("active"));

  if (method === "credit") {
    document.getElementById("btnCredit").classList.add("active");
    if (creditCardForm) creditCardForm.style.display = "block";
    if (pixSection) pixSection.style.display = "none";
  } else if (method === "pix") {
    document.getElementById("btnPix").classList.add("active");
    if (creditCardForm) creditCardForm.style.display = "none";
    if (pixSection) pixSection.style.display = "block";
    gerarCodigoPix();
  }
}

function gerarCodigoPix() {
  const pixCode = document.getElementById("pixCode");
  if (pixCode) {
    const total = getTotalCarrinho();
    const codigo = `pix.${Date.now()}.${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    pixCode.innerHTML = `
            <div class="pix-code-box">
                <p><strong>Código Pix:</strong></p>
                <code>${codigo}</code>
                <p><strong>Valor:</strong> ${formatarMoeda(total)}</p>
                <button onclick="copiarPix()" class="btn-copiar-pix">📋 Copiar código</button>
            </div>
        `;
  }
}

function copiarPix() {
  const codeElement = document.querySelector("#pixCode code");
  if (codeElement) {
    navigator.clipboard.writeText(codeElement.innerText).then(() => {
      alert("Código Pix copiado!");
    });
  }
}

function validarCartao(numero, validade, cvv, nome) {
  const numeroLimpo = numero.replace(/\s/g, "");
  if (numeroLimpo.length !== 16 || !/^\d+$/.test(numeroLimpo)) {
    return { valid: false, message: "Número de cartão inválido (16 dígitos)" };
  }
  if (!/^\d{2}\/\d{2}$/.test(validade)) {
    return { valid: false, message: "Validade inválida (MM/AA)" };
  }
  if (!/^\d{3}$/.test(cvv)) {
    return { valid: false, message: "CVV inválido (3 dígitos)" };
  }
  if (nome.trim().length < 3) {
    return { valid: false, message: "Nome do titular inválido" };
  }
  return { valid: true, message: "" };
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const selectedMethod = document.querySelector(".payment-method-btn.active")
    ?.dataset.method;

  if (!selectedMethod) {
    alert("Selecione uma forma de pagamento");
    return;
  }

  let pagamentoValido = false;
  let mensagemSucesso = "";

  if (selectedMethod === "credit") {
    const numero = document.getElementById("cardNumber")?.value || "";
    const validade = document.getElementById("cardValidity")?.value || "";
    const cvv = document.getElementById("cardCvv")?.value || "";
    const nome = document.getElementById("cardName")?.value || "";

    const validacao = validarCartao(numero, validade, cvv, nome);
    if (!validacao.valid) {
      alert(validacao.message);
      return;
    }
    pagamentoValido = true;
    mensagemSucesso = "Pagamento com cartão de crédito processado com sucesso!";
  } else if (selectedMethod === "pix") {
    pagamentoValido = true;
    mensagemSucesso = "Pagamento via Pix confirmado!";
  }

  if (pagamentoValido) {
    const total = getTotalCarrinho();
    carrinho = [];
    salvarCarrinho();
    fecharCartSidebar();
    alert(
      `${mensagemSucesso}\nTotal: ${formatarMoeda(total)}\n\nPedido finalizado com sucesso! Obrigado pela compra!`,
    );

    const creditCardForm = document.getElementById("creditCardForm");
    if (creditCardForm) creditCardForm.reset();
  }
}

// ===== PRODUTOS GRID =====
function exibirProdutosGrid(produtosArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = produtosArray
    .map(
      (prod) => `
        <div class="product-card" data-categoria="${prod.categoria}">
            <img src="${prod.imagem}" class="product-img" alt="${prod.nome}">
            <div class="product-info">
                <h3 class="product-title">${prod.nome}</h3>
                <p class="product-price">${formatarMoeda(prod.preco)}</p>
                <button class="btn-add-cart" data-id="${prod.id}">Adicionar ao carrinho</button>
            </div>
        </div>
    `,
    )
    .join("");

  document.querySelectorAll(`#${containerId} .btn-add-cart`).forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      adicionarAoCarrinho(id);
    });
  });
}

function carregarTodosProdutos() {
  exibirProdutosGrid(produtos, "allProductsGrid");
}

function initFiltros() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      let filtered = [];
      if (filter === "all") filtered = produtos;
      else filtered = produtos.filter((p) => p.categoria === filter);

      exibirProdutosGrid(filtered, "allProductsGrid");
    });
  });
}

// ===== FORMULÁRIO CONTATO =====
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name.value.trim() === "") {
      document.getElementById("nameError").innerText = "Nome é obrigatório";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      document.getElementById("emailError").innerText = "E-mail inválido";
      isValid = false;
    }
    if (message.value.trim() === "") {
      document.getElementById("messageError").innerText =
        "Mensagem não pode estar vazia";
      isValid = false;
    }

    if (isValid) {
      document.getElementById("formSuccessMsg").innerText =
        "Mensagem enviada com sucesso! Em breve retornamos :)";
      form.reset();
      setTimeout(
        () => (document.getElementById("formSuccessMsg").innerText = ""),
        4000,
      );
    }
  });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => navMenu.classList.toggle("open"));
  }

  const cartToggle = document.getElementById("cartToggle");
  if (cartToggle) cartToggle.addEventListener("click", abrirCartSidebar);
  const closeCart = document.getElementById("closeCartBtn");
  if (closeCart) closeCart.addEventListener("click", fecharCartSidebar);
  const overlay = document.getElementById("cartOverlay");
  if (overlay) overlay.addEventListener("click", fecharCartSidebar);

  const btnCredit = document.getElementById("btnCredit");
  const btnPix = document.getElementById("btnPix");
  if (btnCredit)
    btnCredit.addEventListener("click", () => togglePaymentMethod("credit"));
  if (btnPix)
    btnPix.addEventListener("click", () => togglePaymentMethod("pix"));

  const btnFinalizar = document.getElementById("btnFinalizar");
  if (btnFinalizar) btnFinalizar.addEventListener("click", finalizarCompra);

  const btnCheckout = document.querySelector(".btn-checkout");
  if (btnCheckout)
    btnCheckout.addEventListener("click", mostrarFormasPagamento);

  atualizarContadorCarrinho();
  renderizarCarrinho();

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.dataset.cat;
      window.location.href = `produtos.html?filter=${cat}`;
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get("filter");
  if (filterParam && window.location.pathname.includes("produtos.html")) {
    setTimeout(() => {
      const btnFilter = document.querySelector(
        `.filter-btn[data-filter="${filterParam}"]`,
      );
      if (btnFilter) btnFilter.click();
    }, 100);
  }
});

// Export para uso em contextos globais
window.produtosDestaque = produtosDestaque;
window.exibirProdutosGrid = exibirProdutosGrid;
window.carregarTodosProdutos = carregarTodosProdutos;
window.initFiltros = initFiltros;
window.initContactForm = initContactForm;
window.togglePaymentMethod = togglePaymentMethod;
window.finalizarCompra = finalizarCompra;
window.copiarPix = copiarPix;
