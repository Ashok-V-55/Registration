
let userForm = document.querySelector("#userForm");
let userCards = document.querySelector("#userCards");

let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let genderInput = document.querySelector("#gender");
let emailInput = document.querySelector("#email");
let addressInput = document.querySelector("#address");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirmPassword");

userForm.addEventListener("submit", function(event) {

    event.preventDefault();


    let name = nameInput.value.trim();
    let age = ageInput.value.trim();
    let gender = genderInput.value;
    let email = emailInput.value.trim();
    let address = addressInput.value.trim();
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;



    document.querySelector("#nameError").textContent = "";
    document.querySelector("#ageError").textContent = "";
    document.querySelector("#genderError").textContent = "";
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#addressError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#confirmPasswordError").textContent = "";




    let isValid = true;




    if (name.length < 3) {

        document.querySelector("#nameError").textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }




    let ageNumber = Number(age);

    if (age === "" || !Number.isInteger(ageNumber) ||
        ageNumber < 18 || ageNumber > 100) {

        document.querySelector("#ageError").textContent =
            "Age must be a whole number between 18 and 100.";

        isValid = false;
    }




    if (gender === "") {

        document.querySelector("#genderError").textContent =
            "Please select your gender.";

        isValid = false;
    }




    if (!email.includes("@") || !email.includes(".")) {

        document.querySelector("#emailError").textContent =
            "Please enter a valid email address.";

        isValid = false;
    }




    if (address.length < 10) {

        document.querySelector("#addressError").textContent =
            "Address must contain at least 10 characters.";

        isValid = false;
    }


    // 9. Password Validation

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {

        let char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }

        if (char >= "a" && char <= "z") {
            hasLowercase = true;
        }

        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }
    }


    if (password.length < 8) {

        document.querySelector("#passwordError").textContent =
            "Password must contain at least 8 characters.";

        isValid = false;

    } else if (!hasUppercase || !hasLowercase || !hasNumber) {

        document.querySelector("#passwordError").textContent =
            "Password must contain uppercase, lowercase and a number.";

        isValid = false;
    }




    if (confirmPassword !== password || confirmPassword === "") {

        document.querySelector("#confirmPasswordError").textContent =
            "Passwords do not match.";

        isValid = false;
    }




    if (!isValid) {
        return;
    }




    let card = document.createElement("div");

    card.className = "user-card";


    let emptyMessage = userCards.querySelector(".empty-message");

    if (emptyMessage) {
        emptyMessage.remove();
    }


    let heading = document.createElement("h3");

    heading.textContent = name;

    card.appendChild(heading);




    let agePara = document.createElement("p");
    agePara.textContent = "Age: " + age;

    let genderPara = document.createElement("p");
    genderPara.textContent = "Gender: " + gender;

    let emailPara = document.createElement("p");
    emailPara.textContent = "Email: " + email;

    let addressPara = document.createElement("p");
    addressPara.textContent = "Address: " + address;



    card.appendChild(agePara);
    card.appendChild(genderPara);
    card.appendChild(emailPara);
    card.appendChild(addressPara);



    userCards.appendChild(card);


    userForm.reset();

});
