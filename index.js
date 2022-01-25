// Input boxes
const firstNameInput = document.getElementById("first-name-input");
const lastNameInput = document.getElementById("last-name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

// Testing email pattern
const complexEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Error messages
const p1 = firstNameInput.nextElementSibling;
const p2 = lastNameInput.nextElementSibling;
const p3 = emailInput.nextElementSibling;
const p4 = passwordInput.nextElementSibling;
const exampleMail=document.getElementById("example-mail");

// Form element
const form = document.getElementById("form");
const lastDiv = document.getElementById("last-div");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();

})

function validateInput() {


    if (firstNameInput.value == "") {
        firstNameInput.classList.add("error");
        p1.classList.add("error");
        form.classList.add("error");

    } else {
        firstNameInput.classList.remove("error");
        p1.classList.remove("error");
        form.classList.remove("error");
    }


    if (lastNameInput.value == "") {
        lastNameInput.classList.add("error");
        p2.classList.add("error");
        form.classList.add("error");

    } else {
        lastNameInput.classList.remove("error");
        p2.classList.remove("error");
        form.classList.remove("error");
    }


    if (!complexEmailRegex.test(emailInput.value)) {
        emailInput.classList.add("error");
        p3.classList.add("error");
        form.classList.add("error");
        emailInput.value="";
        emailInput.setAttribute("placeholder","email@example/com");
    
    }
     else{
        emailInput.classList.remove("error");
        p3.classList.remove("error");
        form.classList.remove("error");
    }


    if (passwordInput.value == "") {
        passwordInput.classList.add("error");
        p4.classList.add("error");
        form.classList.add("error");
    } else {
        passwordInput.classList.remove("error");
        p4.classList.remove("error");
        form.classList.remove("error");
    }


    if (!firstNameInput.value == "" && !lastNameInput.value == "" && complexEmailRegex.test(emailInput.value) && !passwordInput.value == ""){
   successFunc();
    }
}


function successFunc() {
    form.submit()
    lastDiv.innerHTML = "Thanks for submitting!";
}