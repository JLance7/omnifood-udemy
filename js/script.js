//year
const yearEl = document.querySelector('.year')
const date = new Date().getFullYear()
yearEl.textContent = date

//mobile nav
const btnNav = document.querySelector('.btn-mobile-nav')
const header = document.querySelector('.header')

btnNav.addEventListener('click', () => {
  header.classList.toggle('nav-open')
})

//smooth scrolling
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach( link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')

    //scroll to top
    if (href === '#') window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    //scroll to bottom
    if (href !== '#' && href.startsWith('#')){
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({behavior: 'smooth'})
    }

    //close main nav
    if (link.classList.contains('main-nav-link')){
      header.classList.toggle('nav-open')
    }
  })
})

//sticky nav
const sectionHeroEl = document.querySelector('.section-hero')
const obs = new IntersectionObserver( (entries) => {
  const ent = entries[0]
  if (ent.isIntersecting === false){
    document.querySelector('body').classList.add('sticky')
  }
  if (ent.isIntersecting === true){
    document.querySelector('body').classList.remove('sticky')
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px"
})
obs.observe(sectionHeroEl)

