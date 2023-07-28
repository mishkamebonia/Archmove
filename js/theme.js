import assetDark from "../images/image6-dark.png"
import asset from "../images/image6.png"


const btn = document.querySelector('#theme-checkbox');
const img = document.getElementById('home-img');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    img.src = assetDark;
    btn.checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    img.src = asset;
    btn.checked = false;
  }
}

export function toggleTheme() {
  if (btn.checked) {
    localStorage.setItem('theme', 'dark');
    applyTheme('dark');
  } else {
    localStorage.setItem('theme', 'light');
    applyTheme('light');
  }
}

btn.addEventListener('change', toggleTheme);

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  applyTheme('dark');
} else {
  applyTheme('light');
}