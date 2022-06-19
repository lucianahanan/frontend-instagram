
/*-------------------- toggle password visibility --------------------*/
const passworded = document.querySelector('#password');
const captioned = document.querySelector('#showhide');

captioned.addEventListener("click", function () {
  const type = passworded.getAttribute("type") === "password" ? "text" : "password";
  passworded.setAttribute("type", type);

  const label = captioned.innerHTML === "Show" ? "Hide" : "Show";
  captioned.innerHTML = label;
});
