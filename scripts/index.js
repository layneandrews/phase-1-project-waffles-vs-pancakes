const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

fetch("http://localhost:3000/breakfast").then(r => r.json()).then((breakfast) => {
  console.log(breakfast)
})

imgLeft.addEventListener("mouseover", () => {

} )

imgRight.addEventListener("mouseover", () => {});