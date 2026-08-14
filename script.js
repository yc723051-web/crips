document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.add('navigating');
  });
});
