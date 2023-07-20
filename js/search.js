const searchBar = document.querySelector('.search-bar');
const searchInput = document.getElementById('search-input');

export function search() {
  searchBar.addEventListener('mouseenter', () => {
    searchInput.style.width = '130px';
    searchInput.style.display = 'block';
    searchBar.style.padding = '0 0 0 15px'
  });
  
  searchBar.addEventListener('mouseleave', () => {
    if (searchInput.value === '') {
      searchInput.style.width = '0';
      searchInput.style.display = 'none';
      searchBar.style.padding = '0'
    }
  });
  
  searchInput.addEventListener('input', () => {
    if (searchInput.value !== '') {
      searchInput.style.width = '130px';
      searchInput.style.display = 'block';
      searchBar.style.padding = '0 0 0 15px'
    }
  });
}