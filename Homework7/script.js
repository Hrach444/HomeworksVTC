let obj = {
    name: "Ashoka",
    surname: "Tano",
    age: 20
};

function retObjKeys(v) {
    return Object.values(v);
};

console.log(retObjKeys(obj));