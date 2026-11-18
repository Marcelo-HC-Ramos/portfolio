/* ===== Contatos =====
   Preencha abaixo para exibir os botões na seção Contato.
   Deixe vazio ("") para ocultar o botão. */
const CONTATO = {
  email: "marcellohc.ramos@outlook.com",
  linkedin: "https://www.linkedin.com/in/marcelo-ramos-629865259"
};

const emailBtn = document.getElementById('link-email');
const linkedinBtn = document.getElementById('link-linkedin');
if (CONTATO.email) { emailBtn.href = 'mailto:' + CONTATO.email; emailBtn.hidden = false; }
if (CONTATO.linkedin) { linkedinBtn.href = CONTATO.linkedin; linkedinBtn.hidden = false; }

/* Menu mobile */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
function setMenu(open) {
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

document.getElementById('year').textContent = new Date().getFullYear();
