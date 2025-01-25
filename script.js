// script.js
const toggleButton = document.getElementById('theme-toggle');

// Check for saved theme in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the current theme to local storage
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});
