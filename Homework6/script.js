let obj = {
    name: "Anakin",
    surname: "Skywalker",
    age: 23
};

function retObjKeys(k) {
    return Object.keys(k);
};

console.log(retObjKeys(obj));