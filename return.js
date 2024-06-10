function add(number1 , number2){
    console.log(number1 , number2);
    var sum = number1 + number2;
    return sum;
    // console.log(sum);
    // return r por ar kono kicu licle ta r count hobe na ==> onek ta "break" r moto
}
// add(11,12);
var total = add(11,12);
console.log('total :',total);



function bringSingara(money){
    var singaraPrice = 10;
    var quentity = money / singaraPrice;
    return quentity;
};
var sigaras = bringSingara(90);
console.log("singara pabo :",sigaras);
