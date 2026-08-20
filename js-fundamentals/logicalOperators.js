// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt("Login as?", "");

if (userName == "Admin") {
    let password = prompt("Password?","");
    if(password == "TheMaster") alert("Welcome!");
    else if(password == "" || password == null) alert("Canceled");
    else alert("Wrong Password");
} else if (userName == "" || userName == null) alert("Canceled");
else alert("I don't know you");
