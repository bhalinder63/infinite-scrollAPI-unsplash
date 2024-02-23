const count = 10;
const apiKey = "200zvmWOqPMzUQXeJGeEKkTqNQSRVJEzLx3rGcmBzaQ";
const unsplashUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

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
}

async function getPhotos() {
  try {
    const response = await fetch(unsplashUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {}
}
getPhotos();
