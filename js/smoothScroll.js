//console.log("smoothScroll");
const linksHead  = document.querySelectorAll('.meny-list__link')
const mainScroll  = document.querySelectorAll('.main__scroll')
const newArray = [...linksHead, mainScroll]

newArray.forEach(link => {
   link.addEventListener('click', (event) => {
      event.preventDefault()

      const ID = event.target.getAttribute('href').substr(1)

      document.getElementById(ID).scrollIntoView({
         behavior: 'smooth'
         block: 'start'
      })
   })
})