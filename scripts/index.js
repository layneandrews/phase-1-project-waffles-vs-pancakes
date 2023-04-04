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

pickMeBtn2.addEventListener("click", () => {});



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

