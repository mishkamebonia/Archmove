const btn = document.querySelector('#theme-checkbox')

const body = document.body
const module = document.querySelector('#module')
const moduleMenu = document.querySelector('#menu-module')
const navLinks = document.querySelectorAll('.nav-link-btn')
const closeModule = document.querySelector('#close-module')

const paragraphs = document.querySelectorAll('p')
const headline1 = document.querySelector('h1')
const headline2 = document.querySelector('h2')
const headlines3 = document.querySelectorAll('h3')
const headlines5 = document.querySelectorAll('h5')
const sliderBtns = document.querySelectorAll('.slider-btn')

const dreamProject = document.querySelector('.dream-project')

const svgs = document.querySelectorAll('.svg')

const footerLinks = document.querySelectorAll('.footer-link')

export function theme() {
  btn.addEventListener('click', () => {
    if (btn.checked) {
      body.style.background = '#171717'

      module.style.background = '#171717'
      moduleMenu.style.background = '#171717'
      closeModule.style.color = '#fff'

      headline1.style.color = '#fff'
      headline2.style.color = '#fff'

      dreamProject.style.background = 'linear-gradient(180deg, #1C1C1C 0%, #151515 100%)'
      
      for (const paragraph of paragraphs) {
        paragraph.style.color = '#fff'
      }
      for (const navLink of navLinks) {
        navLink.style.color = '#fff'
      }
      for (const headline of headlines3) {
        headline.style.color = '#fff'
      }
      for (const headline of headlines5) {
        headline.style.color = '#fff'
      }
      for (const button of sliderBtns) {
        button.style.background = 'rgba(255, 255, 255, 0.03)'
      }
      for (const link of footerLinks) {
        link.style.color = '#fff'
      }
      for (const svg of svgs) {
        svg.classList.add('svg-dark')
      }

    } else {
      body.style.background = '#fff'

      module.style.background = '#fff'
      moduleMenu.style.background = '#fff'
      closeModule.style.color = '#585858'

      for (const paragraph of paragraphs) {
        paragraph.style.color = '#000'
      }
      for (const navLink of navLinks) {
        navLink.style.color = '#000'
      }
    }
  })
}