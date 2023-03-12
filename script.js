const loginForm = document.querySelector("form");
const loginButton = document.querySelector("#login-button");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");

let isSuccess = false;
let isMoving = false;
let intervalId;

loginButton.addEventListener("mouseenter", () => {
  if (!isSuccess) {
    loginButton.style.background = 'red'; 
    if (isMoving) {
        loginButton.style.transform = "translateX(-120px)";
        isMoving = false;
    } else {
        loginButton.style.transform = "translateX(120px)";
        isMoving = true;
    }
  }
});

passwordEl.addEventListener("input", (e) => {
  const username = usernameEl.value;
  const password = passwordEl.value;

  if (username === "varum" && password === "varum") {
    isSuccess = true;
    loginButton.style.transform = "translateX(0)";
    loginButton.style.background = "green";
  } else {
    isSuccess = false;
    loginButton.style.background = 'red'; 
  }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(isSuccess){
        const loginContainer = document.querySelector('.login-container')
        const successContainer = document.querySelector('.success-container')
        loginContainer.style.display = 'none'
        successContainer.style.display = 'flex'
    }
});
