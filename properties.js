var shoppingCart = {
    books:3,
    sunglass:1,
    keybord:5,
    mouse:1,
    pen:25
}

/* var penCount = shoppingCart.pen;
console.log(penCount);
console.log(shoppingCart); */
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];
console.log(penCount2);

var properties = Object.keys(shoppingCart);
console.log(properties);
  

var propertyName = 'books';
var propertiesValues = Object.values(shoppingCart);
console.log(propertiesValues);


/* set property values */
shoppingCart.mouse = 30;
shoppingCart['mouse'] = 20;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);