const buttonOne = document.querySelector('.button-one');
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const buttonFour = document.querySelector('.button-four');
const carouselImg = document.querySelector('.carousel-img');
// const pictureTwo = document.querySelector('.picture-two')
// let index = 0;

const pictures = [
   './pictures/funny-picture.png',
   './pictures/funny-picture-2.jpg',
   './pictures/funny-picture-3.png',
   './pictures/funny-picture-4.jpg',
]

buttonOne.addEventListener('click', () => {
    carouselImg.src = pictures[0];
})

buttonTwo.addEventListener('click', () => {
    carouselImg.src = pictures[1];
})
