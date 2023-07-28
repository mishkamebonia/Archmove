const hamburgerMenu = document.querySelector('#menu')
const module = document.querySelector('#module')
const closeModule = document.querySelector('#close-module')

export function menu() {
  hamburgerMenu.addEventListener('click', () => {
    module.style.display = 'block'
    document.documentElement.style.overflow = "hidden";
  })

  closeModule.addEventListener('click', () => {
    module.style.display = 'none'
    document.documentElement.style.overflow = "auto";
  })
}