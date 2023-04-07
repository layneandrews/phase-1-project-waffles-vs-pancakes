const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

const imgLeftCard = document.querySelector("#image-card1");
const imgRightCard = document.querySelector("#image-card2");

const pickMeBtn1 = document.querySelector("#selector1");
const pickMeBtn2 = document.querySelector("#selector2");

const foodTitle1 = document.querySelector("#title-1");
const foodTitle2 = document.querySelector("#title-2");

const popup = document.createElement("div");
const noteBox = document.querySelector("#foodNoteContainer");

const wvp = document.querySelector('#wvp');

const pickmeMsg = document.createElement('h3');

const pickmeMsgDiv = document.querySelector('#pick-me-msg-div');

const audio = new Audio("assets/sounds/bell.wav");



let currentBreakfastLeft = null;
let currentBreakfastRight = null;
let currentPopupNoteLeft = null;
let currentPopupNoteRight = null;
let breakfastArray = null;

fetch("http://localhost:3000/foods")
  .then((r) => r.json())
  .then((breakfast) => {
    imgLeft.src = breakfast[0].image;
    imgRight.src = breakfast[1].image;

    breakfastArray = breakfast;
    currentBreakfastLeft = breakfast[0];
    currentBreakfastRight = breakfast[1];
    currentPopupNoteLeft = breakfast[0].note;
    currentPopupNoteRight = breakfast[1].note;
  });

imgLeft.addEventListener("mouseover", (e) => {
  console.log("HELLO")

  // const targetFood = breakfastArray.find(food => food.name === e.target.parentElement.children[0].textContent)
  popup.textContent = currentPopupNoteLeft;
  popup.id = "popup";
  // popup.style.position = "absolute";
  // popup.style.top = imgLeft.offsetTop + "px";
  // popup.style.left = imgLeft.offsetLeft + "px";
  // popup.style.backgroundColor = "white";
  // popup.style.width = "200px";
  // popup.style.height = "auto";
  noteBox.appendChild(popup);

  imgLeft.addEventListener("mouseout", () => {
    if (popup && popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  });
});

imgRight.addEventListener("mouseover", (e) => {
  // const targetFood = breakfastArray.find(food => food.name === e.target.parentElement.children[0].textContent)
  popup.textContent = currentPopupNoteRight;
  popup.id = "popup";
  // popup.style.position = "absolute";
  // popup.style.top = imgRight.offsetTop + "px";
  // popup.style.left = imgRight.offsetLeft + "px";
  // popup.style.backgroundColor = "white";
  // popup.style.width = "200px";
  // popup.style.height = "auto";
  noteBox.appendChild(popup);

  imgRight.addEventListener("mouseout", () => {
    if (popup && popup.parentNode) {
      popup.parentNode.removeChild(popup);
    }
  });
});

pickMeBtn1.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * (breakfastArray.length - 1)); //selects random index [0-17]
  let newBreakfast = breakfastArray.filter(food => currentBreakfastLeft.name !== food.name)[randomIndex]
  console.log(newBreakfast);
  pickmeMsg.textContent = `You chose to keep ${foodTitle1.textContent} instead of ${foodTitle2.textContent}! Are u serious?!?!`
  pickmeMsgDiv.append(pickmeMsg);
  if (newBreakfast.id !== currentBreakfastLeft?.id) {
    imgRight.src = newBreakfast.image;
    foodTitle2.textContent = newBreakfast.name;
    currentBreakfastRight = newBreakfast;
    currentPopupNoteRight = newBreakfast.note;
  }
  wvp.textContent = `${currentBreakfastLeft.name} vs. ${currentBreakfastRight.name}`;
  audio.play();
});

pickMeBtn2.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * (breakfastArray.length - 1));
  let newBreakfast = breakfastArray.filter((food) => currentBreakfastRight.name !== food.name)[randomIndex];
  
  pickmeMsg.textContent = `You chose to keep ${foodTitle2.textContent} instead of ${foodTitle1.textContent}! Homie whaaaaaaa??`

  pickmeMsgDiv.append(pickmeMsg);
  console.log(newBreakfast, currentBreakfastRight);
  if (newBreakfast.id !== currentBreakfastRight?.id) {
    imgLeft.src = newBreakfast.image;
    foodTitle1.textContent = newBreakfast.name;
    currentBreakfastLeft = newBreakfast;
    currentPopupNoteLeft = newBreakfast.note;
  };
  wvp.textContent = `${currentBreakfastLeft.name} vs. ${currentBreakfastRight.name}`;
  audio.play();
});

// Get the necessary elements from the HTML
const commentsButton = document.querySelector('.button-52');
const commentsSection = document.getElementById('commentsSection');
const commentForm = document.getElementById('commentForm');
const commentBox = document.getElementById('commentBox');
const commentList = document.getElementById('commentList');

// Function to toggle the display of the comments section
function showComments() {
  commentsSection.style.display = 'block';
}

// Function to add a new comment to the comment list
function addComment(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the comment box
  const comment = commentBox.value;

  // Create a new list item to hold the comment
  const newComment = document.createElement('p');
  newComment.innerText = comment;

  // Add the new comment to the comment list
  commentList.appendChild(newComment);

  // Clear the comment box
  commentBox.value = '';
}

// Add a submit event listener to the comment form
commentForm.addEventListener('submit', addComment);