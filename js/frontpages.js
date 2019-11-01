document.getElementById("forgotPassword-page").style.display = "none";
let loginBtn = document.getElementById("loginBtn");



/* Creating eventListener for our 3 different kind of buttons. */
const backButton = document.getElementsByClassName("back");
[...backButton].forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("front-page").style.display = "grid";
        document.getElementById("login-page").style.display = "none";
        document.getElementById("register-page").style.display = "none";
        document.getElementById("forgotPassword-page").style.display = "none";
    });
});

const signUpButton = document.getElementsByClassName("sign-up");
[...signUpButton].forEach((button) => {
    button.addEventListener("click", () => {
    document.getElementById("register-page").style.display = "grid";
    document.getElementById("front-page").style.display = "none";
    document.getElementById("login-page").style.display = "none";
    document.getElementById("forgotPassword-page").style.display = "none";
    });
});

const logInButton = document.getElementsByClassName("login");
[...logInButton].forEach((button) => {
    button.addEventListener("click", () => {
    document.getElementById("login-page").style.display = "grid";
    document.getElementById("front-page").style.display = "none";
    document.getElementById("register-page").style.display = "none";
    document.getElementById("forgotPassword-page").style.display = "none";
    });
});

const forgotPasswordButton = document.getElementsByClassName("forgot-password");
[...forgotPasswordButton].forEach((button) => {
    button.addEventListener("click", () => {
    document.getElementById("forgotPassword-page").style.display = "grid";
    document.getElementById("login-page").style.display = "none";
    document.getElementById("front-page").style.display = "none";
    document.getElementById("register-page").style.display = "none";

    });
});



/* If the user click login this event runs */ 
loginBtn.addEventListener("click", () => {
    let uid = document.getElementById('email');
    let pwd = document.getElementById('password');

    accounts.forEach((acc) => {
        if(acc.uid == uid.value && acc.pwd == pwd.value) {
            window.location.href = "dashboard.html";
        }
    })

    uid.value = '';
    pwd.value = '';
    
    alert('Incorrect e-mail/password');

});

//Usernames and passwords

let accounts = [
    {
        uid: 'micke@emmio.se',
        pwd: 'emmio'
    },
    {
        uid: 'fabian@fabian.se',
        pwd: 'fabian'
    },
    {
        uid: 'ella@ella.se',
        pwd: 'ella'
    },
    {
        uid: 'andreas@andreas.se',
        pwd: 'andreas'
    },
]