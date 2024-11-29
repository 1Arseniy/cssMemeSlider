const button = document.querySelectorAll(".button");
const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");
const buttonThree = document.querySelector(".button-three");
const buttonFour = document.querySelector(".button-four");
const carousel = document.querySelector(".carousel");
const text = document.querySelector(".text");
index = 0;
const pictures = [
    "./pictures/funny-picture.png",
    "./pictures/funny-picture-2.jpg",
    "./pictures/funny-picture-3.png",
    "./pictures/funny-picture-4.jpg",
];

const carouselImg = document.querySelector(".carousel-img");

buttonOne.addEventListener("click", () => {
    carouselImg.src = pictures[0];
    text.textContent = "What!?";
});

buttonTwo.addEventListener("click", () => {
    carouselImg.src = pictures[1];
    text.textContent = "How I cool";
});

buttonThree.addEventListener("click", () => {
    carouselImg.src = pictures[2];
    text.textContent = "I`m always";
});

buttonFour.addEventListener("click", () => {
    carouselImg.src = pictures[3];
    text.textContent = "smart smart";
});
