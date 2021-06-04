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
var modal = document.querySelector("#modal");

linkBtn.addEventListener("click", function (event) {
	console.log("remove hidden")
  modal.classList.remove("hidden");
});

var closeBtn = document.querySelector(".close-button");


closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});



var linkBtn2 = document.querySelector(".project-video2");
var modal2 = document.querySelector("#modal2");

linkBtn2.addEventListener("click", function (event) {
  modal2.classList.remove("hidden");
});

var closeBtn2 = document.querySelector(".close-button2");


closeBtn2.addEventListener("click", () => {
  modal2.classList.add("hidden");
});

var linkBtn3 = document.querySelector(".project-video3");
var modal3 = document.querySelector("#modal3");

linkBtn3.addEventListener("click", function (event) {
  modal3.classList.remove("hidden");
});

var closeBtn3 = document.querySelector(".close-button3");


closeBtn3.addEventListener("click", () => {
  modal3.classList.add("hidden");
});

