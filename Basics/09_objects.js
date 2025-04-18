//Object Literals
const mySum = Symbol("Indians")
const JsUsers = {
    name : "Suchit",
    [mySum] : "Indiana",
    email : "suchitkawade@gmail.com",
    address : "Pimpri Chinchwad"
}

// console.log(JsUsers.email);
// console.log(JsUsers["address"]);
// console.log(JsUsers[mySum]);
// console.log(typeof(JsUsers[mySum]));

console.log(JsUsers);




