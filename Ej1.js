//PEDES IN TERRA AD SIDERA VISUS

//Prt. 1
var names = ["Maria", "Antony", "Joy", "Juan"]
var names = ["Maria", "Antony", "Joy", "Juan".concat( " ", "Adrian")];
console.log(names);

//Prt. 2
function encontrar(y){
    let existName = false;
    names.forEach(function(elemento){
        if(elemento === y){
            existName = true;
        }
    })
    console.log(existName);
}
encontrar("Adrian");


//Prt. 3
let newArray = []
function addNames(anotherListOfNames){
    anotherListOfNames.forEach(function(element){
        newArray.push(element);
    })
    names.forEach(function(element){
        newArray.push(element);
    })
    console.log(newArray);
}
addNames(["Julio", "Adrian", "Ismael"]);

//Prt. 4
let lengthOfNames = [];
function getLengthOfNames(listOfNames){
    listOfNames.forEach(function(element){
        lengthOfNames.push(element.length);
    })
}

getLengthOfNames(["Daniela", "Aaron", "Karen"]);
console.log(lengthOfNames);