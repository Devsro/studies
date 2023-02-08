var imageCards = [];
// Changes the images into gifs once hovered
let imageCard1 = document.getElementById("Project1");
let imageCard2 = document.getElementById("project2");
let imageCard3 = document.getElementById("project3");
let imageCard4 = document.getElementById("project4");
imageCards.push(document.getElementById("Project1"));
imageCards.push(document.getElementById("project2"));
imageCards.push(document.getElementById("project3"));
imageCards.push(document.getElementById("project4"));

for(let i=0; i<imageCards.length;i++){
    imageCards[i].addEventListener('mouseover', () => {
        let id = imageCards[i].getAttribute("id");
        imageCards[i].src = 'assets/' + id + '.gif';
        imageCards[i].classList = "fade-in-image";
    });
    imageCards[i].addEventListener('mouseleave', () => {
        let id = imageCards[i].getAttribute("id");
        imageCards[i].src = 'assets/' + id + '.png';
        imageCards[i].classList = "fade-in-image";
    });
}
