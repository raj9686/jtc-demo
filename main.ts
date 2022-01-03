'use strict';
import prompt from 'prompt';

let promptInput = () => {
    prompt.start();
    prompt.get(schema, (err: any, result: any) => {
        if (err) {
            return onErr(err);
        }
        let mArray = result.arrayList.split(",").map(Number)
        if (!mArray.some(isNaN)) {
            sortInWave(mArray)
        }else {
            promptInput()
        }

    });
}

var schema = {
    properties: {
        arrayList: {
            description: 'Please enter input an array of numbers comma separated',
            message: 'Array List must be only negative, positive and decimal Numbers Only with comma separated',
            required: true
        }
    }
};

let onErr = (err: any) => {
    console.log(err);
    return 1;
}

let swap = (arr: [], x: number, y: number) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp
}

let sortInWave = (arr: []) => {
    let n = arr.length;
    arr.sort((a, b) => b - a);
    for (let i = 0; i < n - 1; i += 2)
        swap(arr, i, i + 1);
    console.log("Re-arranged Array :", arr);
}

promptInput();
