const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputPasswordConfirmation = document.getElementById(
  "password-confirmation"
);

inputName.onfocus = function () {
  console.log("Mouse selecionar no input");
};
inputName.onblur = function (e) {
  console.log("Mouse saiu do input");
};
inputName.onchange = function (e) {
  console.log("Aconteceu alguma mudança");
};

inputPassword.onchange = function (e) {
  if (inputPasswordConfirmation.value !== "") {
    if (e.target.value !== inputPasswordConfirmation.value)
      alert("Senhas não coincidem");
  }
};

inputPasswordConfirmation.onchange = function (e) {
  if (inputPassword.value !== "") {
    if (e.target.value !== inputPassword.value) alert("Senhas não coincidem");
  }
};

const inputs = document.querySelectorAll(".container-input input");

for (let input of inputs) {
  input.addEventListener("focus", (e) => {
    e.target.classList.remove("error");
    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.children[1]);
    console.log(e.target.parentElement);
    if (e.target.parentElement.children[2]) {
      e.target.parentElement.children[2].remove();
    }
  });
}

const formSignup = document.querySelector("form");

formSignup.onsubmit = (e) => {
  for (let input of inputs) {
    if (input.parentElement.children[2]) {
      input.parentElement.children[2].remove();
    }
  }
  e.preventDefault();
  // console.log("Formulário submetido");
  // console.log(inputEmail, inputName, inputPassword, inputPasswordConfirmation);
  // console.log(inputPassword.getAttribute("data-error-required"));
  // const inputsRequired = document.getElementsByClassName("required")
  // for(let input of inputsRequired){
  //   if(input.value==="") alert(input.getAttribute("data-error-required"))
  // }
  if (inputEmail.value === "") {
    inputEmail.classList.add("error");
    // console.log(inputEmail.parentElement.children[2]);
    // inputEmail.parentElement.children[2].innerText = "Alguma mensagem";
    // console.log(inputEmail.parentElement.innerHTML)
    let span = document.createElement("span");
    span.classList.add("message-error");
    span.innerText = "Preencha o email";
    inputEmail.parentElement.appendChild(span);
  }
  if (inputName.value === "") {
    inputName.classList.add("error");
    let span = document.createElement("span");
    span.classList.add("message-error");
    span.innerText = "Preencha o nome";
    inputName.parentElement.appendChild(span);
  }
  if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    let span = document.createElement("span");
    span.classList.add("message-error");
    span.innerText = "Preencha a senha";
    inputPassword.parentElement.appendChild(span);
  }
  if (inputPasswordConfirmation.value === "") {
    inputPasswordConfirmation.classList.add("error");
    let span = document.createElement("span");
    span.classList.add("message-error");
    span.innerText = "Preencha a confirmação de senha";
    inputPasswordConfirmation.parentElement.appendChild(span);
  }
};
