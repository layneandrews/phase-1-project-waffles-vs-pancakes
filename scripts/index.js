console.log('hello');
const wafflesBtn = document.getElementById("waffles");
const pancakesBtn = document.getElementById("pancakes");
const firstChoiceBtn = document.getElementById("choice");
const omelettesBtn = document.getElementById("omelettes");
const thirdChoiceBtn = document.getElementById("final-choice");
const granolaBtn = document.getElementById("granola");
const result = document.getElementById("result");
const finalResult = document.getElementById("final-result");
const finalOutcome = document.getElementById("final-outcome");

wafflesBtn.addEventListener("click", function () {
  result.innerHTML = "You chose Waffles!";
  firstChoiceBtn.innerHTML = "Waffles";
  finalChoiceBtn.innerHTML = "Waffles";
});

pancakesBtn.addEventListener("click", function () {
  result.innerHTML = "You chose Pancakes!";
  firstChoiceBtn.innerHTML = "Pancakes";
  finalChoiceBtn.innerHTML = "Pancakes";
});

firstChoiceBtn.addEventListener("click", function () {
  if (firstChoiceBtn.innerHTML === "Waffles") {
    finalResult.innerHTML = "You chose Waffles over Omelettes!";
  } else if (firstChoiceBtn.innerHTML === "Pancakes") {
    finalResult.innerHTML = "You chose Pancakes over Omelettes!";
  } else {
    finalResult.innerHTML = "Please choose Waffles or Pancakes first!";
  }
});

omelettesBtn.addEventListener("click", function () {
  finalResult.innerHTML =
    "You chose Omelettes over " + firstChoiceBtn.innerHTML + "!";
});

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
