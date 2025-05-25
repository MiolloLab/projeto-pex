const btn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-primario');

if (btn && menu) {
  // Abre/fecha o menu ao clicar no botão
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique propague para o document
    menu.classList.toggle('open');
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener('click', (e) => {
    if (
      menu.classList.contains('open') &&
      !menu.contains(e.target) &&
      e.target !== btn
    ) {
      menu.classList.remove('open');
    }
  });

  // Fecha o menu ao clicar em um link do menu (opcional)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}