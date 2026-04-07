let rightSide = document.getElementById("rightSide");

let userName = localStorage.getItem("userName");

if(userName){
    rightSide.innerHTML = `
        <button class="search-btn">🔍</button>
        <div class="account">${userName}</div>
    `;
}
else{
    rightSide.innerHTML = `
        <a href="login.html" class="login">Login</a>
        <a href="signup.html" class="signup">Sign Up</a>
    `;
}

function logoutUser() {

    // remove only current user login data
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    // go to login page
    window.location.href = "login.html";
}

