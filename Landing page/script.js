

function greetUser() {
    const username = document.getElementById("username").value; // Get the user's name
    if (username) {
        alert(`Hello, ${username}! Welcome to our website.`);
    } else {
        alert("Please enter your name!");
    }
}

function learnMore() {
    const username = document.getElementById("username").value;
    if (username) {
        alert(`${username}, feel free to explore all about us!`);
    } else {
        alert("Welcome! Don't forget to explore our offerings.");
    }
}
