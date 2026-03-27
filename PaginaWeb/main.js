let cartCount = 0;
const badge = document.querySelector('.cart-badge');

function addToCart(btn) {
  cartCount++;
  badge.textContent = cartCount;

  const original = btn.innerHTML;
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ¡Añadido!`;
  btn.style.background = 'var(--green)';

  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
  }, 1800);
}

// Subrayado suave del enlace de navegación al desplazarse
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    }
  });
});