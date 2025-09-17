document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  // Simple filter
  const input = document.getElementById('nav-search');
  if (input){
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      document.querySelectorAll('.nav-list li').forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
});
