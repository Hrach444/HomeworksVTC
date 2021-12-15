const arr = [1,98,78,56,0,24];

const retEvenNumbers = function (filterArr1) {
    const evenNumbers = [];
    for(let i = 0; i < arr.length; i++){
        if(filterArr1[i] % 2 === 0)
        evenNumbers.push(filterArr1[i]);
    }
    return evenNumbers;
    
};

const retEvenNumbers2 = function (filterArr2) {
    const evenNumbers2 = [];
    for(let x = 0; x < arr.length; x++){
        if(filterArr2[x] % 2 !== 0)
        evenNumbers2.push(filterArr2[x]);
    }
    return evenNumbers2;
    
};


console.log(retEvenNumbers(arr));
console.log(retEvenNumbers2(arr));