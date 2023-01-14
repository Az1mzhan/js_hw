let task1_1 = (arr = []) => {
    for (let i = 1; i <= 100; ++i)
        arr.push(i);
    console.log(arr)

}

let task1_2 = (arr = []) => {
    for (let i = 1; i <= 100; ++i)
        arr.push(i);
    for (let i = 0; i < arr.length; ++i)
        console.log(arr[i]);
}

let task1_3 = (arr = []) => {
    for (let i = 1; i <= 100; ++i)
        arr.push(i);
    let rev = [];
    for (let i = 0; i < arr.length; --i) {
        rev[i] = arr[arr.length - i];
        console.log(rev[i]);
    }
    console.log(rev);
}

let task2 = (arr = []) => {
    for (let i = 1; i <= 99; ++i) {
        if (i % 2 !== 0)
            arr.push(i);
    }
    console.log(arr);
}

let task3 = (arr = []) => {
    for (let i = 2; i <= 20; ++i) {
        if (i % 2 === 0)
            arr.push(i);
    }
    console.log(arr);
}

let task4 = (arr = []) => {
    let sum = 0;
    for (let i = 2; i <= 20; ++i) {
        if (i % 2 === 0) {
            arr.push(i);
            sum += i;
        }
    }
    console.log(sum);
}

let arrClear = (arr) => {
    let res = arr.filter(elem => typeof elem !== "undefined");
    let filters = [null, NaN, false, 0, ""];
    for (let i = 0; i < filters.length; ++i)
        res = res.filter(elem => elem !== filters[i]);
    return res;
}

let task5 = (arr) => {
    console.log(arrClear(arr));
}

let findMax = (arr) => {
    let mx = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > mx)
            mx = arr[i];
    }
    return mx;
}

let task6 = (arr) => {
    console.log(findMax(arr));
}

let findMin = (arr) => {
    let mn = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] < mn)
            mn = arr[i];
    }
    return mn;
}

let task7 = (arr) => {
    console.log(findMin(arr));
}

let arrCmp = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        return false;
    else {
        arr1 = arr1.sort();
        arr2 = arr2.sort();
        let cnt = 0;
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i])
                return false;
            else
                ++cnt;
        }
        return true;
    }
}

let task8 = (arr1, arr2) => {
    let ans = (arrCmp(arr1, arr2) === true) ? "yes" : "no";
    console.log(ans);
}
