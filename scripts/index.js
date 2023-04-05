const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

const pickMeBtn1 = document.querySelector("#selector1");
const pickMeBtn2 = document.querySelector("#selector2");

const foodTitle1 = document.querySelector('#title-1');
const foodTitle2 = document.querySelector('#title-2');

let currentBreakfast = null;

fetch("http://localhost:3000/breakfast")
  .then((r) => r.json())
  .then((breakfast) => {
    imgLeft.src = breakfast[0].image;
    imgRight.src = breakfast[1].image;

    breakfastArray = breakfast;
    });
    
    pickMeBtn1.addEventListener("click", () => {
      let randomIndex = Math.floor(Math.random() * breakfastArray.length);
      let newBreakfast = breakfastArray[randomIndex];

      if (newBreakfast.id !== currentBreakfast?.id) {
        imgRight.src = newBreakfast.image;
        foodTitle2.textContent = newBreakfast.name;
        currentBreakfast = newBreakfast;
      }});

    pickMeBtn2.addEventListener("click", () => {
      let randomIndex = Math.floor(Math.random() * breakfastArray.length);
      let newBreakfast = breakfastArray[randomIndex];
  
      if (newBreakfast.id !== currentBreakfast?.id) {
        imgLeft.src = newBreakfast.image;
        foodTitle1.textContent = newBreakfast.name;
        currentBreakfast = newBreakfast;
        }

    imgLeft.addEventListener("mouseover", () => {
      console.log('hello');
    });

  });
    
    // imgLeft.addEventListener("mouseover", () => {
    //   console.log(breakfast.note);
    // });
  

// imgLeft.addEventListener("mouseover", () => {
//   console.log(breakfast.note);
// });

// imgRight.addEventListener("mouseover", () => {});


// form hidden until button click
function showComments() {
  const x = document.getElementById("commentsSection");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function addComment() {
  const comment = document.getElementById("commentBox").value;
  const node = document.createElement("p");
  const textnode = document.createTextNode(comment);
  node.appendChild(textnode);
  document.getElementById("commentList").appendChild(node);
  document.getElementById("commentBox").value = "";
}

