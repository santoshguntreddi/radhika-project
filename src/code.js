const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits);
const obj = { name: "Santosh", email: "santosh@gmail.com" }
// console.log(Object.entries(obj))
for (const iterator of Object.entries(obj)) {
    console.log(iterator[0], ":", iterator[1]);
}