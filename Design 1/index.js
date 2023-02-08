

// Changes the images into gifs once hovered
let imageCard1 = document.getElementById("Project1");
let imageCard2 = document.getElementById("project2");
let imageCard3 = document.getElementById("project3");
let imageCard4 = document.getElementById("project4");


imageCard1.addEventListener('mouseover', () => {
    imageCard1.src = "assets/Project1.gif";
    imageCard1.classList = "fade-in-image";
})

imageCard1.addEventListener('mouseleave', () => {
    imageCard1.src = "assets/Project1.png";
    imageCard1.classList = "";
})

imageCard2.addEventListener('mouseover', () => {
    imageCard2.src = "assets/";
})

imageCard2.addEventListener('mouseleave', () => {
    imageCard2.src = "assets/";
})

imageCard3.addEventListener('mouseover', () => {
    imageCard3.src = "assets/";
})

imageCard3.addEventListener('mouseleave', () => {
    imageCard3.src = "assets/";
})

imageCard4.addEventListener('mouseover', () => {
    imageCard4.src = "assets/";
})

imageCard4.addEventListener('mouseleave', () => {
    imageCard4.src = "assets/";
})

const imageCards = [imageCard1, imageCard2, imageCard3, imageCard4];

imageCards.forEach(addEventListener('mouseover'), () => {
    classList = "fade-in-image";
});
imageCards.forEach(addEventListener('mouseleave'), () => {
    classList = "";
});

function changeToGif(imageCard){
    imageCard.src = imageCard.id += ".png";
}