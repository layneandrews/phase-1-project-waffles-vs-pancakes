const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");
const pickMeBtn1 = document.querySelector("#selector1");
const pickMeBtn2 = document.querySelector("#selector2");


fetch("http://localhost:3000/breakfast")
  .then((r) => r.json())
  .then((breakfast) => {
    console.log(breakfast);
    
    pickMeBtn1.addEventListener("click", () => {
      imgRight.src = breakfast[2].image;
    });
    
    pickMeBtn2.addEventListener("click", () => {
      imgLeft.src = breakfast[2].image;
    });
      
  });

imgLeft.addEventListener("mouseover", () => {});

imgRight.addEventListener("mouseover", () => {});


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

