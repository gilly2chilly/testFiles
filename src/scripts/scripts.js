/* Adding to variables with += and propmt stuff */
document.write("<h1>Hi, I'm a computer, I'd like to talk to you.</h1><br>");
var gillyPrompt = prompt("What are we talking about");
console.log("User response= " + gillyPrompt);
var message = "What is " + gillyPrompt + "?<br>";
message = message + "I am just a computer and don't know.<br>";
document.write(message);
gillyPrompt = prompt("Can you tell me more?");
console.log("User response= " + gillyPrompt);
var incredulous = gillyPrompt.toUpperCase();
incredulous += "?!?!";
message = incredulous + " Really?<br>";
message += "That sounds boring, see you later.";
alert("Computer closed conversation due to lack of interest");
document.write(message);

/* Adding to variables with +=*/
var id = "plm5424";
var lastName = "Orona";
var userName = id.toUpperCase();
lastName = lastName.toUpperCase();
userName += " is " + lastName;
document.write(userName);


/* Array manipulation and concatenation */
var testArray = ["Gilly", "lame", 2, false, "Chilly"];
alert(testArray[0] + " is " + testArray[2] + " " + testArray[4]);
testArray[testArray.length] = " For Real!";
console.log(testArray[0] + " is " + testArray[2] + " " + testArray[4] + testArray[5]);
testArray.unshift("Who", "is", "Chilly? ");
testArray.push("Really", "Really");
/* .shift and .pop will remove the first item and last item in the array respectively. */
for ( var i = 0; i < testArray.length; i++) {
    console.log("List number is: " + i + " List entry data is: " + testArray[i]);
}
var moreTestArray = [":P"];
var fullTestArray = testArray.concat(moreTestArray);
var fullTestArrayDataString = fullTestArray.join(',');
console.log(fullTestArrayDataString);
var position = fullTestArray.indexOf("Chilly? ");

/* Object manipulation and concatenation */
var person = {
    name : "Gilberto Orona",
    nickName : "Gilly2Chilly",
    age : 31,
    developer : true,
    skills : ["Gaming", "Writing", "Drinking"]
};
person.city = "San Antonio";
person.state = "Texas";
for (var property in person) {
    console.log(property);
    console.log(property, ': ', person[property]);
}

/* Complex strings, lets and const */
let str = 'There are x days until I get Chilly!';
let chillyDate = 30;
let complexStr = str.replace('x', chillyDate);
console.log(complexStr);
console.log(/^There/.test(str));
console.log(str.indexOf('Chilly!') === str.length - 'Chilly!'.length);
console.log(str.startsWith('There'));

/* Rest and Spread Parameters */
//Rest Parameters
function myFunction(name, ...params) {
    console.log(name, params);
}
myFunction('Gilly', 1, 2, 3, 'Chilly');
//Spread Parameters
const originalFlavors = ['Chocolate', 'Vanilla'];
console.log(originalFlavors);
const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];
console.log(newFlavors);
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];
console.log(inventory);
//Destructuring Arrays
let widgets = ['widget1', 'widget2', 'widget3', 'widget4', 'widget5'];
let [a, b, c, ...d] = widgets;
console.log(a);
console.log(d);

//arrows as functions, must learn more**********************************************
const myHeading = document.getElementById('myHeading');
myHeading.addEventListener('click', () => {
    myHeading.style.color = 'red';
});

/* for (var i = 2; i <= 24; i += 2) {
  console.log(i);
} */