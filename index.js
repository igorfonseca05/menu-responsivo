const menu = document.querySelector('[data-js="menu"]')
const icon = document.querySelector('[data-js="icon"]')
const tagUl = document.querySelector('[data-js="ul"]')
const taglink = document.querySelector('[data-js="link"]')


console.log(menu.style)

// icon.addEventListener('click', () => {
//     if (menu.style.display == 'block') {
//         menu.style.display = 'none'
//     } else {
//         menu.style.display = 'block'
//     }
// })



icon.addEventListener('click', () => {
    if(menu.classList.contains("menu")) {

        menu.classList.remove('menu')
        menu.classList.add('menu2')
        

    } else {

        menu.classList.add('menu')
        menu.classList.remove('menu2')
        
    }

})

 window.addEventListener('resize', (e) => {
   if(window.innerWidth >= 768) {
    menu.classList.remove('menu2')
   } else {
    menu.classList.add('menu')
   }
})
// icon.addEventListener('click', () => {
//   menu.classList.toggle('menu2')

// })













