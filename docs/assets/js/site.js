document.addEventListener('DOMContentLoaded', () => {
  // Active link highlighting
  const here = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === here || a.getAttribute('href') === location.pathname) {
      a.classList.add('active');
    }
  });
  // Simple client-side filter
  const input = document.getElementById('nav-search');
  if (input){
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      document.querySelectorAll('.nav-list li').forEach(li => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }
});
