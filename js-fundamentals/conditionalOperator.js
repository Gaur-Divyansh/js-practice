//let's rewrite this
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a = 2;
let b = 2;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

//also rewrite this
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = "";

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";

console.log(message);
