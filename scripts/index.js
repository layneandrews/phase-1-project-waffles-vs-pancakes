const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

const pickMeBtn1 = document.querySelector("#selector1");
const pickMeBtn2 = document.querySelector("#selector2");

const foodTitle1 = document.querySelector("#title-1");
const foodTitle2 = document.querySelector("#title-2");

let currentBreakfast = null;
let currentPopupNote = null;

fetch("http://localhost:3000/foods")
  .then((r) => r.json())
  .then((breakfast) => {
    imgLeft.src = breakfast[0].image;
    imgRight.src = breakfast[1].image;

    breakfastArray = breakfast;
    currentBreakfast = breakfast[0];
    currentPopupNote = breakfast[0].note;
  });

imgLeft.addEventListener("mouseover", () => {
  const popup = document.createElement("div");
  popup.textContent = currentPopupNote;
  popup.id = "popup";
  popup.style.position = "absolute";
  popup.style.top = imgLeft.offsetTop + "px";
  popup.style.left = imgLeft.offsetLeft + "px";
  popup.style.backgroundColor = "white";
  popup.style.width = "200px";
  popup.style.height = "auto";
  document.body.appendChild(popup);

  imgLeft.addEventListener("mouseout", () => {
    const popup = document.querySelector("#popup");
    if (popup && popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  });
});

imgRight.addEventListener("mouseover", () => {
  const popup = document.createElement("div");
  popup.textContent = currentPopupNote;
  popup.id = "popup";
  popup.style.position = "absolute";
  popup.style.top = imgRight.offsetTop + "px";
  popup.style.left = imgRight.offsetLeft + "px";
  popup.style.backgroundColor = "white";
  popup.style.width = "200px";
  popup.style.height = "auto";
  document.body.appendChild(popup);

  imgRight.addEventListener("mouseout", () => {
    const popup = document.querySelector("#popup");
    if (popup && popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  });
});

pickMeBtn1.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * breakfastArray.length);
  let newBreakfast = breakfastArray[randomIndex];
  if (newBreakfast.id !== currentBreakfast?.id) {
    imgRight.src = newBreakfast.image;
    foodTitle2.textContent = newBreakfast.name;
    currentBreakfast = newBreakfast;
    currentPopupNote = newBreakfast.note;
  }
});

pickMeBtn2.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * breakfastArray.length);
  let newBreakfast = breakfastArray[randomIndex];
  if (newBreakfast.id !== currentBreakfast?.id) {
    imgLeft.src = newBreakfast.image;
    foodTitle1.textContent = newBreakfast.name;
    currentBreakfast = newBreakfast;
    currentPopupNote = newBreakfast.note;
  }
});
