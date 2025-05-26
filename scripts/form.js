document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contato-form');
  if (!form) return; // Só executa se o formulário existir na página

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const destinatario = 'miollo.lab@gmail.com';
    const assunto = encodeURIComponent('Contato pelo site Marmita-Livro');
    const corpo = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`
    );

    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    const sucesso = document.getElementById('mensagem-sucesso');
    if (sucesso) sucesso.style.display = 'block';

    form.reset();
  });
});