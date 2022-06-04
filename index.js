// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function appendCat(){
}
function appendCat(){
    var newArray = cats.slice();
    newArray.push("Broom")
    return newArray;
} 
function prependCat(){
    var newArray= cats.slice();
    newArray.unshift("Arnold");
    return newArray;
}
function removeLastCat(){
    var newArray=cats.slice();
    newArray.pop();
    return newArray;
}

function removeFirstCat(){
    var newArray= cats.slice();
    newArray.shift();
    return newArray;
}

