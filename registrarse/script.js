let singUp = document.getElementById("singUp");
let singIn = document.getElementById("singIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

singIn.onclick = function () {
  nameInput.style.maxHeight = "0";
  title.innerHTML = "Login";
  singUp.classList.add("disable");
  singIn.classList.remove("disable");
};

singUp.onclick = function () {
  nameInput.style.maxHeight = "60px";
  title.innerHTML = "Registrarse";
  singUp.classList.remove("disable");
  singIn.classList.add("disable");
};
