function Version() {
    const fp = fetch('https://cws.auckland.ac.nz/gas/api/Version');
    const sp = fp.then((response) => response.text());
    sp.then((data) => {
        document.getElementById('version').innerText = data;
    });
}

const home = () => {
    document.getElementById("home").style.display = "block";
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
}

const shop = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    getProducts();
}

const game = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "block";
    document.getElementById("comment").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
}

const comment = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("comment").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("myRecentComments").innerHTML = '<iframe src="https://cws.auckland.ac.nz/gas/api/Comments"></iframe>';
}

const register = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
}

const login = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function registerUser() {
    let myStr = JSON.stringify({
        "username": `${document.getElementById("username").value}`,
        "password": `${document.getElementById("password").value}`,
        "address": `${document.getElementById("address").value}`
    })
    const fp = fetch('https://cws.auckland.ac.nz/gas/api/Register', {
        method: 'POST',
        body: myStr,
        headers: { "Content-Type": "application/json" }
    });
    const sp = fp.then((response) => response.text());
    sp.then((response) => {
        document.getElementById("registrationMessage").innerText = response;
    });

}

function loginUser() {
    const fp = fetch('https://cws.auckland.ac.nz/gas/api/VersionA', {
        headers: {
            "Content-Type": "text/plain",
            'Authorization': 'Basic ' + btoa(`${document.getElementById("usernameLog").value}:${document.getElementById("passwordLog").value}`),
        }
    });
    fp.then((response) => {
        if (response.status === 200) {
            var logoutbutton = document.getElementById("logoutbutton");
            logoutbutton.style.display = "inline";
            logoutbutton.innerHTML = `Logout (${document.getElementById("usernameLog").value})`;
            document.getElementById("loginbutton").style.display = "none";
            loggedIn = true;
            home();

        } else {
            alert("Incorrect Login Details. Try Again.");
            return;
        }
    });
}

function logout() {
    var logoutbutton = document.getElementById("logoutbutton");
    logoutbutton.style.display = "none";
    document.getElementById("loginbutton").style.display = "inline";
    loggedIn = false;
    home();
}


window.onload = home();
Version();
let loggedIn = false;
let gameId = "";

