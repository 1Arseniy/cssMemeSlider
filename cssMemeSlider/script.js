const button = document.querySelectorAll('.button')
const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const buttonFour = document.querySelector('.button-four');
const carousel = document.querySelector('.carousel')

const pictures = [
    './pictures/funny-picture.png',
    './pictures/funny-picture-2.jpg',
    './pictures/funny-picture-3.png',
    './pictures/funny-picture-4.jpg',
]

const carouselImg = document.querySelector('.carousel-img');

buttonOne.addEventListener('click', () => {
    carouselImg.src = pictures[0]
    // carousel.style.transition = `1s`
})

buttonTwo.addEventListener('click', () => {
    carouselImg.src = pictures[1]
    // carousel.style.transition = `1s`
})

buttonThree.addEventListener('click', () =>{
    carouselImg.src = pictures[2]
    // carousel.style.transition = `1s`
})

buttonFour.addEventListener('click', () =>{
    carouselImg.src = pictures[3]
    carousel.style.transition = `1s`
})

// const buttonIndex = null;

/* button.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
    })

}) */

