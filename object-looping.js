var shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2
}
// var shopingItems = ['books','sunglass','soes','pen'];
const keys = Object.keys(shoppingCart);
console.log(keys);

const value = Object.values(shoppingCart);
console.log(value);
console.log(shoppingCart);



// set a keys and values //// kothin babe kora hoice
var shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2
}
for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertiesValues = shoppingCart[propertyName];
    console.log(propertyName,propertiesValues);
}



/////// simple version
var shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes:2
}
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName,value);
}