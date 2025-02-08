const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e.target);
    switch (e.target.id) {
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "green":
        body.style.backgroundColor = "green";
        break;
    }
  });
});
