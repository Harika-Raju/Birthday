function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // 🔹 Change these values to your friend's actual name & birthdate
    const correctUsername = "poojitha"; // Example: "Sarah"
    const correctPassword = "01042005"; // Example: "DDMMYYYY" format

    if (username === correctUsername && password === correctPassword) {
        // ✅ Redirect to the birthday surprise page
        window.location.href = "birthday.html";  
    } else {
        // ❌ Show error message if details are wrong
        errorMsg.innerText = "Incorrect username or password. Try again!";
    }
}
