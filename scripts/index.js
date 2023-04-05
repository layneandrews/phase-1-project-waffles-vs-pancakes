const imgLeft = document.querySelector("#image-card1 > img");
const imgRight = document.querySelector("#image-card2 > img");

const pickMeBtn1 = document.querySelector("#selector1");
const pickMeBtn2 = document.querySelector("#selector2");

const foodTitle1 = document.querySelector("#title-1");
const foodTitle2 = document.querySelector("#title-2");

let currentBreakfast;

fetch("http://localhost:3000/breakfast")
  .then((r) => r.json())
  .then((breakfast) => {
    imgLeft.src = breakfast[0].image;
    imgRight.src = breakfast[1].image;

    breakfastArray = breakfast;
  });
imgLeft.addEventListener("mouseover", () => {
	const popup = document.createElement("div");
	popup.textContent = breakfastArray[0].note;
	popup.style.position = "absolute";
	popup.style.top = imgLeft.offsetTop + "px";
	popup.style.left = imgLeft.offsetLeft + "px";
	popup.style.backgroundColor = "white";
	popup.style.width = "200px";
	popup.style.height = "auto";
	document.body.appendChild(popup);
  console.log(currentBreakfast)

	imgLeft.addEventListener("mouseout", () => {
		if (popup && popup.parentNode) {
			popup.parentNode.removeChild(popup);
			// document.body.removeChild(popup);
		}
	});

	// imgLeft.addEventListener("mouseout", () => {
	//   const popup = document.querySelector("#popup");
	//
	//   }
	// });

	imgRight.addEventListener("mouseover", () => {
		const popup = document.createElement("div");
		popup.textContent = breakfastArray[1].note;
		popup.style.position = "absolute";
		popup.style.top = imgRight.offsetTop + "px";
		popup.style.left = imgRight.offsetLeft + "px";
		popup.style.backgroundColor = "white";
    popup.style.width = "200px";
    popup.style.height = "auto";
		document.body.appendChild(popup);

		imgRight.addEventListener("mouseout", () => {
			if (popup && popup.parentNode) {
				popup.parentNode.removeChild(popup);
				// document.body.removeChild(popup);
			}
		});

		pickMeBtn1.addEventListener("click", () => {
			let randomIndex = Math.floor(Math.random() * breakfastArray.length);
			let newBreakfast = breakfastArray[randomIndex];
			if (newBreakfast.id !== currentBreakfast?.id) {
				imgRight.src = newBreakfast.image;
				foodTitle2.textContent = newBreakfast.name;
				currentBreakfast = newBreakfast;
			}
		});

		pickMeBtn2.addEventListener("click", () => {
			let randomIndex = Math.floor(Math.random() * breakfastArray.length);
			let newBreakfast = breakfastArray[randomIndex];
			if (newBreakfast.id !== currentBreakfast?.id) {
				imgLeft.src = newBreakfast.image;
				foodTitle1.textContent = newBreakfast.name;
				currentBreakfast = newBreakfast;
			}
		});

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
	});
})
