// const mainDiv = document.querySelector(".main");

//https://api.imgflip.com/get_memes
//http://i.imgflip.com/1bij.jpg
// console.log(topTextInput);

const topTextInput = document.querySelector(".topText");

const topTextOfMeme = document.querySelector(".top");

topTextInput.addEventListener("keyup", (e) => {
  topTextOfMeme.innerText = e.target.value;
});

const bottomTextInput = document.querySelector(".bottomText");

const bottomTextOfMeme = document.querySelector(".bottom");

bottomTextInput.addEventListener("keyup", (e) => {
  bottomTextOfMeme.innerText = e.target.value;
});

//////////////// GET NEW MEMES

// async function fetchData() {
//   const response = await fetch("https://api.imgflip.com/get_memes");
//   return await response.json();
// }
// let memeData = fetchData().then((data) => );

// console.log(memeData);
// // memeData.then((data) => console.log(data));

// let memeData = fetch("https://api.imgflip.com/get_memes")
//   .then((res) => res.json())
//   .then((data) => {
//     const memesData = data.data.memes;
//     // console.log(memesData);
//     return memesData;
//   });

const formBtn = document.querySelector(".form--button");
const memeImg = document.querySelector(".meme--image");

//when button clicked get two memes has 2 box otherwise image is not proper to 2 h1s
formBtn.addEventListener("click", () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      const memesData = data.data.memes.filter((d) => d.box_count === 2);
      let randomNumber = Math.floor(Math.random() * memesData.length);
      let memeUrl = memesData[randomNumber].url;
      memeImg.src = memeUrl;
      // console.log(memesData[randomNumber].box_count);
      // console.log(memesData);
    });
});
