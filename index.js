// const shoes = [
//   {
//     id: 1,
//     name: "Air Runner",
//     brand: "Adidas",
//     category: "Running",
//     color: "Black",
//     size: 42,
//     price: 120,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Ultraboost 24",
//     brand: "Adidas",
//     category: "Running",
//     color: "White",
//     size: 43,
//     price: 180,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "Classic Leather",
//     brand: "Adidas",
//     category: "Casual",
//     color: "Brown",
//     size: 41,
//     price: 90,
//     inStock: false,
//   },
//   {
//     id: 4,
//     name: "Old Skool",
//     brand: "Vans",
//     category: "Sneakers",
//     color: "Black/White",
//     size: 40,
//     price: 75,
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "Chuck Taylor All Star",
//     brand: "Converse",
//     category: "Casual",
//     color: "Red",
//     size: 42,
//     price: 65,
//     inStock: true,
//   },
// ];

// const ulElement = document.getElementById("list");

// const onFilter = (e) => {
//   ulElement.innerHTML = "";
//   const filterValue = e.target.value;
//   const filteredShoes = shoes.filter((shoe) => shoe.brand === filterValue);
//   const shoesToRender = filterValue === "all" ? shoes : filteredShoes;
//   renderShoes(shoesToRender);
// };

// const renderShoes = (shoesToRender) => {
//   for (var i = 0; i < shoesToRender.length; i++) {
//     ulElement.innerHTML += `<li>${shoesToRender[i].name}</li>`;
//   }
// };

// renderShoes(shoes);
// console.log(x);
// var x = 2;
// var y = 4;

// function checkType(num) {
//   return typeof num;
// }

// function calculateSquare(num) {
//   var isValidNo = checkType(num);
//   if (!isValidNo) {
//     return "Not a valid no";
//   }
//   var result = num * num;

//   return result;
// }

// calculateSquare(2);

// var student = {
//   name: 'Muhazzib',
//   batch: 22
// }

// var students = ['muhazib', 'ali', 'ahmed']

// for(let studentData in students) {
//   console.log(students[studentData])
// }

// function greetUser(extraQuestion) {
//   console.log("Good Morning");

//   if (extraQuestion) {
//     extraQuestion();
//   }
// }
// function askUserName() {
//   console.log("What is you name");
// }

// greetUser(askUserName);

// function showAlert() {
//   function askQuestion() {
//       prompt('What is your name ?')
//   };

//   alert("Good Morning");
//   askQuestion()
// }

// setTimeout(showAlert, 4000);
// setInterval(showAlert, 4000);

// let username = 'muhazzib';

// function greetUser(extraQuestion) {
//   console.log("Good Morning");

//   if (extraQuestion) {
//     extraQuestion();
//   }
// }
// function askUserName() {
//   console.log("What is you name");
// }

// greetUser(askUserName());

const circleRadius = [3, 6, 8, 5];

const area = (r) => Math.PI * (r * r);
const circumference = (r) => 2 * Math.PI * r;
const diameter = (r) => 2 * r;

const calculate = (radius, callback) => radius.map((r) => callback(r));

const areaOfCircle = calculate(circleRadius, circumference);
// const diameterOfCircle = calculate(circleRadius, diameter);
// const circumferenceOfCircle = calculate(circleRadius, circumference);

console.log(areaOfCircle)