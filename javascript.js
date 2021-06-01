//PASTE EMAIL TO CLIPBOARD

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

var copyBobBtn = document.querySelector(".mail");

copyBobBtn.addEventListener("click", function (event) {
  copyTextToClipboard("clsayart@gmail.com");
});

//SHOW MODAL WITH LINKS TO MY PROJECTS

var linkBtn = document.querySelector(".project-video");

linkBtn.addEventListener("click", function (event) {
	console.log("remove hidden")
	console.log("remove hidden")
  modal.classList.remove("hidden");
});

var closeBtn = document.querySelector(".close-button");
var modal = document.querySelector("#modal");

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});




var linkBtn2 = document.querySelector(".project-video2");

linkBtn2.addEventListener("click", function (event) {
  copyDiv.classList.remove("hidden");
});

var closeBtn = document.querySelector(".close-button2");
var copyDiv = document.querySelector("#modal2");

closeBtn.addEventListener("click", () => {
  copyDiv.classList.add("hidden");
});
