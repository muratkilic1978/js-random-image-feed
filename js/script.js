"use strict";
// henter kun en enkelt den klasse med container me navnet container
const containerElem = document.querySelector(".container");



const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for(let i=0; i < rows * 3; i++){
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`;
    containerElem.appendChild(img);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}

function getRandomSize(){
    return `${getRandomNumber()}*${getRandomNumber()}`;
}


console.log(getRandomNumber());