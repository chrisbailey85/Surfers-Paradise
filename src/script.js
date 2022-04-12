const hamburger = document.querySelector('.hamburger')
const faqParagraph = document.querySelectorAll('.faq__paragraph')
const faqBtn = document.querySelectorAll('.faq__btn')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open')
  body.classList.toggle('body--overflow')
  hamburger.classList.toggle('is-active')
  nav.classList.contains('is-active')
    ? (hamburger.ariaExpanded = true)
    : (hamburger.ariaExpanded = false)
})

faqBtn.forEach((btn, idx) => {
  btn.addEventListener('click', (e) => {
    faqBtn.forEach((btn) => {
      btn.classList.remove('active')
    })
    faqParagraph.forEach((faqPara) => {
      faqPara.classList.remove('active')
    })
    e.target.classList.contains('active')
      ? (e.target.ariaExpanded = false)
      : (e.target.ariaExpanded = true)
    e.target.classList.toggle('active')
    faqParagraph[idx].classList.toggle('active')
  })
})
