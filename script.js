const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(x => x.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(card => card.classList.toggle('hidden', f !== 'all' && !card.dataset.tags.split(' ').includes(f)));
}));
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
});
document.getElementById('year').textContent = new Date().getFullYear();
