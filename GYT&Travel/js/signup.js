function signupUser() {

    // get values from input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // check if any field is empty
    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // save data in localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // show success message
    alert("Signup Successful");

    // open login page
    window.location.href = "login.html";
}