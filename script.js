document.addEventListener('DOMContentLoaded', () => {
    console.log('John Marsel portfolio ready!');
  
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,           // Durasi animasi dalam ms
        easing: 'ease-in-out',    // Jenis transisi animasi
        once: true                // Hanya animasi sekali saat pertama muncul
      });
    } else {
      console.warn('AOS library is not loaded.');
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Cek local storage
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
      toggleBtn.textContent = '☀️ Light Mode';
    }
  
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
  
      toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  
    // AOS init
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true
      });
    }
  });
  const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
