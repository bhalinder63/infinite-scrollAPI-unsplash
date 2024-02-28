const count = 5;
const apiKey = "200zvmWOqPMzUQXeJGeEKkTqNQSRVJEzLx3rGcmBzaQ";
const unsplashUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let reachEnd = false;

const photoContainer = document.querySelector(".image-container");
const loader = document.querySelector(".loader");
let photosArray = [];

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);
    //put image in anchor
    item.appendChild(img);
    photoContainer.appendChild(item);
  });

  reachEnd = false;
}

async function getPhotos() {
  try {
    const response = await fetch(unsplashUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

getPhotos();

window.addEventListener("scroll", function () {
  if (
    this.window.innerHeight + this.window.scrollY >=
      this.document.body.offsetHeight - 500 &&
    reachEnd == false
  ) {
    getPhotos();
    reachEnd = true;
  }
});

console.log(" " == false);

console.log(Boolean(" "));
console.log(Number(" "));
