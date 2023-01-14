let task1 = () => {
    for (let i = 0; i <= 5; ++i)
        console.log(i);
};

let task2 = () => {
    for (let i = 5; i >= 1; --i)
        console.log(i);
};

let task3 = () => {
    for (let i = 1; i <= 10; ++i)
        console.log(`3 x ${i} = ${3 * i}`);
};

let task4 = () => {
    let x = prompt("Enter the boundary number");
    (x <= 0) ? (console.log("You've entered an invalid number")) : (console.log((1 + parseInt(x)) / 2 * x));
};

let task5 = () => {
    let x = prompt("Enter the boundary number");
    for (let i = 1; i <= x; ++i) {
        if (i % 2 !== 0)
            console.log(i);
    }
}

let task6 = () => {
    let x = prompt("Enter the boundary number");
    for (let i = 1; i <= x; ++i) {
        if (i % 2 === 0)
            console.log(i);
    }
}

let task7 = () => {
    let x = prompt("Enter the number");
    for (let i = 1; i <= 10; ++i) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

let task8 = () => {
    let x = prompt("Enter the number");
    for (let i = 10; i >= 1; --i) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

let task9Constructor = (x, y = 2) => {
    if (x === 2 || y * y > x)
        return true;
    if (x < 2 || x % y === 0)
        return false
    return task9Constructor(x, y + 1);
}

let task9 = () => {
    let x = prompt("Enter the number");
    console.log(task9Constructor(parseInt(x)))
}

let task14_1 = () => {
    let arr = [];
    for (let i = 1; i <= 100; ++i)
        arr.push(i);
    console.log(arr)
}

let task14_2 = () => {
    let arr = [];
    for (let i = 100; i >= 1; --i)
        arr.push(i);
    console.log(arr)
}