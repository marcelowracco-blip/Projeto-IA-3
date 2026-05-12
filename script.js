/* =========================================================
   LÍRIO DOS VALES — script.js
   ========================================================= */

// ── Ícones SVG inline (substitui Font Awesome) ─────────────
const SVG = {
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  bag:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  arrow:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  check:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  emptyCart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
};

// ── BANCO DE PRODUTOS ───────────────────────────────────────
const produtos = [
  { id: 1,  nome: "Sofá Retrô 3 Lugares",        preco: 899.90,  categoria: "moveis",     imagem: "https://placehold.co/400x300/d6ede3/1a6b4a?text=Sofá", destaque: true  },
  { id: 2,  nome: "Estante Flutuante",            preco: 239.90,  categoria: "moveis",     imagem: "https://placehold.co/400x300/ede6d8/3a2e24?text=Estante", destaque: true  },
  { id: 3,  nome: "Luminária Suspensa",           preco: 189.90,  categoria: "iluminacao", imagem: "https://placehold.co/400x300/fef3e2/b06010?text=Luminária", destaque: true  },
  { id: 4,  nome: "Jogo de Louças Bege",          preco: 149.90,  categoria: "cozinha",    imagem: "https://placehold.co/400x300/fce8e2/c0603a?text=Louças", destaque: false },
  { id: 5,  nome: "Almofada Estampada",           preco: 59.90,   categoria: "decoracao",  imagem: "https://placehold.co/400x300/e8e0f7/5535aa?text=Almofada", destaque: false },
  { id: 6,  nome: "Painel Ripado",                preco: 429.90,  categoria: "moveis",     imagem: "https://placehold.co/400x300/d6ede3/1a6b4a?text=Painel", destaque: true  },
  { id: 7,  nome: "Kit Panelas Antiaderente",     preco: 329.90,  categoria: "cozinha",    imagem: "https://placehold.co/400x300/fce8e2/c0603a?text=Panelas", destaque: true  },
  { id: 8,  nome: "Abajur de Piso",               preco: 279.90,  categoria: "iluminacao", imagem: "https://placehold.co/400x300/fef3e2/b06010?text=Abajur", destaque: false },
  { id: 9,  nome: "Cadeira Escandinava",          preco: 379.90,  categoria: "moveis",     imagem: "https://placehold.co/400x300/ede6d8/3a2e24?text=Cadeira", destaque: false },
  { id: 10, nome: "Tapete Felpudo 2x1,5m",       preco: 149.90,  categoria: "decoracao",  imagem: "https://placehold.co/400x300/e8e0f7/5535aa?text=Tapete", destaque: false },
  { id: 11, nome: "Lustre de Cristal",            preco: 299.90,  categoria: "iluminacao", imagem: "https://placehold.co/400x300/fef3e2/b06010?text=Lustre", destaque: false },
  { id: 12, nome: "Jogo de Velas Aromáticas",     preco: 49.90,   categoria: "decoracao",  imagem: "https://placehold.co/400x300/fce8e2/c0603a?text=Velas", destaque: false },
];

const catLabels = {
  moveis: "Móveis", iluminacao: "Iluminação", cozinha: "Cozinha", decoracao: "Decoração"
};

// ── CARRINHO ────────────────────────────────────────────────
let carrinho = JSON.parse(localStorage.getItem('carrinho_ldv')) || [];

function salvarCarrinho() {
  localStorage.setItem('carrinho_ldv', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;
  const item = carrinho.find(i => i.id === id);
  if (item) item.quantidade++;
  else carrinho.push({ id: produto.id, nome: produto.nome, preco: produto.preco, quantidade: 1 });
  salvarCarrinho();
  atualizarCarrinhoUI();
  mostrarToast(`${produto.nome} adicionado ao carrinho`);
  animarContador();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinho();
  atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
  const countEl  = document.getElementById('cartCount');
  const listEl   = document.getElementById('cartItemsList');
  const totalEl  = document.getElementById('cartTotal');

  const total    = carrinho.reduce((s, i) => s + i.preco * i.quantidade, 0);
  const qtdTotal = carrinho.reduce((s, i) => s + i.quantidade, 0);

  if (countEl) countEl.textContent = qtdTotal;
  if (totalEl) totalEl.textContent = formatBRL(total);

  if (!listEl) return;

  if (carrinho.length === 0) {
    listEl.innerHTML = `
      <li class="cart-empty">
        ${SVG.emptyCart}
        <p>Seu carrinho está vazio.</p>
      </li>`;
    return;
  }

  listEl.innerHTML = carrinho.map(item => `
    <li>
      <span class="cart-item-name">
        ${item.nome}
        <span class="cart-item-qty"> × ${item.quantidade}</span>
      </span>
      <span class="cart-item-price">${formatBRL(item.preco * item.quantidade)}</span>
    </li>
  `).join('');
}

function animarContador() {
  const el = document.getElementById('cartCount');
  if (!el) return;
  el.classList.remove('bounce');
  void el.offsetWidth;
  el.classList.add('bounce');
}

// ── FORMATAÇÃO ──────────────────────────────────────────────
function formatBRL(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ── TOAST ───────────────────────────────────────────────────
function mostrarToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${SVG.check} ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── RENDERIZAR PRODUTOS ─────────────────────────────────────
function renderizarProdutos(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (lista.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--texto-3);padding:3rem 0">Nenhum produto encontrado.</p>';
    return;
  }

  container.innerHTML = lista.map(p => `
    <article class="product-card">
      <div class="product-img-wrap">
        <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
        ${p.destaque ? `<span class="product-badge destaque">Destaque</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabels[p.categoria] || p.categoria}</div>
        <h3 class="product-title">${p.nome}</h3>
        <div class="product-footer">
          <span class="product-price">${formatBRL(p.preco)}</span>
          <button class="buy-btn" data-id="${p.id}" aria-label="Adicionar ${p.nome} ao carrinho">
            ${SVG.plus} Adicionar
          </button>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => adicionarAoCarrinho(parseInt(btn.dataset.id)));
  });
}

// ── HOME: destaques ─────────────────────────────────────────
function carregarDestaquesHome() {
  renderizarProdutos(produtos.filter(p => p.destaque), 'destaquesGrid');
}

// ── PRODUTOS: todos + filtros ───────────────────────────────
let filtroAtual = 'todos';

function carregarTodosProdutos() {
  renderizarProdutos(produtos, 'produtosGrid');
}

function filtrarErenderizarProdutos() {
  const lista = filtroAtual === 'todos' ? produtos : produtos.filter(p => p.categoria === filtroAtual);
  renderizarProdutos(lista, 'produtosGrid');
}

function inicializarFiltros() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroAtual = btn.dataset.cat;
      filtrarErenderizarProdutos();
    });
  });
}

// ── CONTATO ─────────────────────────────────────────────────
function inicializarContato() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('name');
    const email   = document.getElementById('email');
    const message = document.getElementById('message');
    const feedback = document.getElementById('formFeedback');
    let valid = true;

    ['nameError','emailError','msgError'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });

    if (name.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Nome é obrigatório.';
      valid = false;
    }
    const re = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!email.value.trim()) {
      document.getElementById('emailError').textContent = 'E-mail obrigatório.';
      valid = false;
    } else if (!re.test(email.value)) {
      document.getElementById('emailError').textContent = 'E-mail inválido.';
      valid = false;
    }
    if (message.value.trim() === '') {
      document.getElementById('msgError').textContent = 'Mensagem não pode estar vazia.';
      valid = false;
    }

    if (valid) {
      feedback.className = 'form-feedback success';
      feedback.textContent = '✓ Mensagem enviada com sucesso! Em breve retornamos.';
      form.reset();
      setTimeout(() => { feedback.textContent = ''; feedback.className = 'form-feedback'; }, 4000);
    } else {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Preencha corretamente os campos destacados.';
    }
  });

  document.getElementById('whatsappLink')?.addEventListener('click', e => {
    e.preventDefault();
    window.open('https://wa.me/5511912345678', '_blank');
  });
  document.getElementById('instagramLink')?.addEventListener('click', e => {
    e.preventDefault();
    window.open('https://instagram.com/liriodosvales', '_blank');
  });
}

// ── MODAL DO CARRINHO ───────────────────────────────────────
function initModal() {
  const modal    = document.getElementById('cartModal');
  const cartBtn  = document.getElementById('cartIconBtn');
  const closeBtn = document.querySelector('.close-cart');
  const closeCart= document.getElementById('closeCartBtn');
  const clearBtn = document.getElementById('clearCartBtn');

  const abrirModal = e => {
    e?.preventDefault();
    atualizarCarrinhoUI();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const fecharModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  cartBtn?.addEventListener('click', abrirModal);
  closeBtn?.addEventListener('click', fecharModal);
  closeCart?.addEventListener('click', fecharModal);
  clearBtn?.addEventListener('click', () => { limparCarrinho(); });
  modal?.addEventListener('click', e => { if (e.target === modal) fecharModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });
}

// ── HEADER SCROLL ───────────────────────────────────────────
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── MENU HAMBÚRGUER ─────────────────────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navMenu');
  btn?.addEventListener('click', () => nav?.classList.toggle('active'));
  // Fecha ao clicar em link
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('active')));
}

// ── Injetar ícones SVG no HTML ──────────────────────────────
function injetarIcones() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const key = el.dataset.icon;
    if (SVG[key]) el.innerHTML = SVG[key];
  });
}

// ── INICIALIZAÇÃO GLOBAL ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injetarIcones();
  initHeaderScroll();
  initHamburger();
  initModal();
  atualizarCarrinhoUI();
});
