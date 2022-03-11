function validate(password) {
    if (password == "gojs") {
        window.location.href = "home.html";
        localStorage.setItem("authenticated", new Date().getTime() + 300000);
    }
}

function checkLogin() {
    let currentTime = new Date().getTime()
    let authentication = parseInt(localStorage.getItem("authenticated"))
    if (!authentication || currentTime > authentication) {
        window.location = "index.html";
    }
}