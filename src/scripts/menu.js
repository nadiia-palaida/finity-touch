const openBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.menu-btn__close')
const menuList = document.querySelector('.menu-list__wrap')
const body = document.querySelector('body')

openBtn.addEventListener('click', () => {
    body.style.overflow = 'hidden'
    menuList.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    body.style.overflow = 'auto'
    menuList.classList.remove('open')
})