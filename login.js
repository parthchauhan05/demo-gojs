function validate() {
    let password = document.getElementById("password").value;
    if (password == "gojsdemo") {
        window.location = "home.html";
        localStorage.setItem("authenticated", new Date().getTime() + 300000);
    }
}

function checkLogin() {
    let currentTime = new Date().getTime()
    let authentication = parseInt(localStorage.getItem("authenticated"))
    console.log(currentTime, authentication)
    if (!authentication || currentTime > authentication) {
        window.location = "index.html";
    }
}