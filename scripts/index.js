const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

fetch("http://localhost:3000/breakfast")
  .then((r) => r.json())
  .then((breakfast) => {
    console.log(breakfast);
  });

imgLeft.addEventListener("mouseover", () => {});

imgRight.addEventListener("mouseover", () => {});
//the 10 lines below this comment just select the 'pick me' buttons and set event listeners to them
const pickMeBtn1 = document.querySelector(".selector1");
const pickMeBtn2 = document.querySelector(".selector2");

pickMeBtn1.addEventListener("click", () => {});

thirdChoiceBtn.addEventListener("click", function () {
  if (thirdChoiceBtn.innerHTML === "Waffles") {
    finalOutcome.innerHTML = "You chose Waffles over Granola!";
  } else if (finalChoiceBtn.innerHTML === "Pancakes") {
    finalOutcome.innerHTML = "You chose Pancakes over Granola!";
  } else {
    finalOutcome.innerHTML = "Please choose Waffles or Pancakes first!";
  }
});

granolaBtn.addEventListener("click", function () {
  finalOutcome.innerHTML =
    "You chose Granola over " + finalChoiceBtn.innerHTML + "!";
});

//form hidden until button click
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
pickMeBtn2.addEventListener("click", () => {});
