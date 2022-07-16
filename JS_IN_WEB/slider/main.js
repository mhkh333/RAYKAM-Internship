const sliderImages = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");

let currentImage = 0;

function renderImages() {
  sliderImages.forEach((image) => {
    sliderDom.innerHTML += "<img src='" + image + "' />";
  });
}

function clearImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
}

function showImage(image) {
  clearImages();
  document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
  renderImages();
  showImage(currentImage);
}

init();

var ss = document.querySelector('button[id="prevButton"]');
ss.addEventListener('click', function () {
  if(currentImage === 0){
    currentImage = 4;
  }
  currentImage--;
  showImage(currentImage);
});

var forward = document.querySelector('button#nextButton');
forward.addEventListener('click', function (){
  if(currentImage === 3){
    currentImage = -1;
  }
  currentImage++;
  showImage(currentImage);
});
