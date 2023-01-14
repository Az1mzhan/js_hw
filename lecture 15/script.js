let ageFormat = (age) => {
    return (age === 1) ? ("year") : ("years");
}

let isLegal = (age) => {
    return (age >= 21) ? ("can") : ("can't");
}

let task1 = (name, surname, age) => {
    name = prompt("Enter your name!");
    surname = prompt("Enter your surname!");
    age = prompt("Enter your age!");
    console.log(`Hello, ${name} ${surname}! You're ${age} ${ageFormat(age)} old.`);
}

let task2 = (name, surname, age) => {
    name = prompt("Enter your name!");
    surname = prompt("Enter your surname!");
    age = prompt("Enter your age!");
    console.log(`Hello, ${name} ${surname}! You ${isLegal(age)} drink alcohol.`);
}

let task3 = (x, y) => {
    x = prompt("Enter the first number");
    y = prompt("Enter the second number");
    console.log(parseInt(x) + parseInt(y), x - y, x * y, x / y);
}

let task4 = (val, len) => {
    val = prompt("Enter the value");
    len = prompt("Enter the number");
    let arr = [];
    for (let i = 0; i < len; i++)
        arr.push(val);
    console.log(arr);
}

let arrFilter = (arr, rem) => {
    return arr.filter(elem => elem !== rem);
}

let task5 = (arr, rem) => {
    console.log(arrFilter(arr, rem));
}