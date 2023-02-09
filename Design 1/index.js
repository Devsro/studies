// Changes the images into gifs once hovered
var imageCards = document.getElementsByClassName("project");

for(let i=0; i<imageCards.length;i++){
    imageCards[i].addEventListener('mouseover', () => {
        let id = imageCards[i].getAttribute("id");
        imageCards[i].src = 'assets/' + id +'.gif';
        imageCards[i].classList.add("fade-in-image");
    });
    imageCards[i].addEventListener('mouseleave', () => {
        let id = imageCards[i].getAttribute("id");
        imageCards[i].src = 'assets/' + id + '.png';
        imageCards[i].classList.remove("fade-in-image");
    });
}
