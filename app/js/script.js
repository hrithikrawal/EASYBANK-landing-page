const header = document.querySelector(".header")
const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btnHamburger')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function(){
    console.log('hello world')

    if(header.classList.contains('open')){ // close hambruger
        body.classList.remove('no-scroll')
        header.classList.remove('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
        // overlay.classList.remove('fade-in')
        // overlay.classList.add('fade-out')
    }
    else{ // open hamburger
        body.classList.add('no-scroll')
        header.classList.add('open')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
        // overlay.classList.remove('fade-out')
        // overlay.classList.add('fade-in')
    }
})