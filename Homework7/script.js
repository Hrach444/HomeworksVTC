let obj = {
    name: "Ashoka",
    surname: "Tano",
    age: 20
};

function retObjValues(v) {
    return Object.values(v);
};

console.log(retObjValues(obj));