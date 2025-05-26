document.querySelectorAll('.card-historia-expand .img-expandir').forEach(img => {
  img.addEventListener('click', function() {
    this.closest('.card-historia-expand').classList.toggle('aberto');
  });
});