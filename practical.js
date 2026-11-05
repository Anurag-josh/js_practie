// let name = "Anurag";
// let age = 22;

// console.log(`My name is ${name}`);
// console.log(`My age is ${age}`);

// let student = {
//     name: "Anurag",
//     age: 21,
//     city: "Solapur",
//     marks: 90
// };

// // console.log(student);
// console.log(student.name);
// console.log(student.age);

// let name = "Anurag";
// let age = 22;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let age = "22";

// console.log(typeof age);

// let newAge = Number(age);

// console.log(newAge);
// console.log(typeof newAge);

// let a = "100";
// let b = "200";

// console.log(Number(a) + Number(b));

// let age = 22;

// console.log(typeof age);

// let newAge = String(age);

// console.log(newAge);
// console.log(typeof newAge);

// let a = "100";
// let b = "100.50";

// console.log(parseInt(a));
// console.log(parseInt(b));

// let price = "99.50";

// console.log(parseFloat(price));

// let name = "Anurag";

// console.log(name.length);

// let name = "Anurag";

// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[5]);

// console.log(name.at(-1));
// console.log(name.at(-2));

// let name = "anurag";

// console.log(name.toUpperCase());

// let name = "ANURAG";

// console.log(name.toLowerCase());

// let name = "   Anurag   ";

// console.log(name.trim());

// let a = "Hello";
// let b = "World";

// console.log(a + " " + b);

// let text = "Hello ";

// console.log(text.repeat(3));

// let message = "Welcome to JavaScript";

// console.log(message.includes("JavaScript"));
// console.log(message.includes("Python"));

// let message = "Hello World";

// console.log(message.startsWith("Hello"));
// console.log(message.startsWith("World"));

// let name = "JavaScript";

// console.log(name.slice(0, 4));
// console.log(name.slice(4, 10));

// let name = "JavaScript";

// console.log(name.substring(0, 4));
// console.log(name.substring(4, 10));

// let name = "JavaScript";

// console.log(name.substr(4, 6));

// let text = "Hello JavaScript";

// console.log(text.search("JavaScript"));

// let text = "I like Java";

// let result = text.replace("Java", "JavaScript");

// console.log(result);

// let text = "Java is easy. Java is popular.";

// console.log(text.replaceAll("Java", "JavaScript"));

// let fruits = "Apple,Banana,Mango";

// let result = fruits.split(",");

// console.log(result);

// let name = "Anurag";

// console.log(name.split(""));

// let text="i love apples"

//  console.log(text.split(" "));

// let age = 15;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// }

// console.log("Program ended");


// let marks = 35;

// if (marks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// let marks = 85;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 60) {
//     console.log("Grade C");
// } else if (marks >= 40) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }

// let username = "admin";
// let password = "12345";

// if (username === "admin") {
//     if (password === "12345") {
//         console.log("Login Successful");
//     } else {
//         console.log("Incorrect Password");
//     }
// } else {
//     console.log("Incorrect Username");
// }

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     default:
//         console.log("Invalid Day");
// }

// let age = 20;

// let result = age >= 18 ? "Adult" : "Minor";

// console.log(result);

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello");
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// let fruits = ["Apple", "Banana", "Mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let student = {
//     name: "Rahul",
//     age: 21,
//     city: "Pune"
// };

// for (let key in student) {
//     console.log(key);
// }

// let fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });

// let students = new Map();

// students.set("Rahul", 85);
// students.set("Priya", 92);
// students.set("Amit", 78);

// console.log(students);

// let student = new Map();

// student.set("name", "Rahul");
// student.set("age", 21);

// console.log(student.has("name"));
// console.log(student.has("marks"));

// let student = new Map();

// student.set("name", "Rahul");
// student.set("age", 21);
// student.set("marks", 85);

// student.delete("age");

// console.log(student);

// let student = new Map();

// student.set("name", "Rahul");
// student.set("age", 21);
// student.set("marks", 85);

// student.clear();

// console.log(student);

// let student = new Map();

// student.set("name", "Rahul");
// student.set("age", 21);
// student.set("marks", 85);

// console.log(student.size);

// let student = new Map([
//     ["name", "Rahul"],
//     ["age", 21],
//     ["course", "IT"]
// ]);

// for (let entry of student) {
//     console.log(entry);
// }

// let obj1 = {
//     name: "Sourav"
// };

// let obj2 = {
//     age: 23
// };

// let obj3 = {
//     ...obj1,
//     ...obj2
// };

// console.log(obj3);

// let student = {
//     name: "Sourav",
//     age: 23,
//     course: "IT"
// };

// console.log(Object.keys(student).length);

const student = {
    name: "Anurag",
    age: 22,

    display: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.display();
