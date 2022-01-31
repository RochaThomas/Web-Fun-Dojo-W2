
var typesOfCrust = ["deep dish", "hand tossed", "vegan", "thin crust", "stuffed crust"];
var typesOfSauce = ["traditional", "marinara", "white", "pink sauce"];
var typesOfCheese = ["mozzarella", "feta", "cheddar", "provolone"];
var typesOfToppings = ["pepperoni", "bacon", "sausage", "pineapple", "spinach", "mushrooms", "olives", "onions"];

function pizzaOven(crust, sauce, cheese, topping){
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = topping;
    return pizza;
}

function getRandomInt(maxInt){
    var num = Math.floor(Math.random() * maxInt);
    return num;
}

function randomPizza(){
    var randCrust = typesOfCrust[getRandomInt(typesOfCrust.length)];
    var randSauce = typesOfSauce[getRandomInt(typesOfSauce.length)];
    var randCheeses = [];
    var randToppings = [];
    var numOfCheeses = (getRandomInt(typesOfCheese.length)) + 1;
    var numOfToppings = (getRandomInt(typesOfToppings.length)) + 1;

    randCheeses.push(typesOfCheese[getRandomInt(typesOfCheese.length)]);
    for (var i = 0; i < numOfCheeses; i++){
        var oneRandCheese = typesOfCheese[getRandomInt(typesOfCheese.length)];
        var dupe = false;
        for (var n = 0; n < randCheeses.length; n++){
            if (dupe == true){
                i--;
                break;
            }
            else {
                if (oneRandCheese == randCheeses[n]) {
                    dupe = true;
                }
            }
        }
        if (dupe == false){
            randCheeses.push(oneRandCheese);
        }
    }
    //repetitive code --> make a function called getRandomItems(randElement) and pass in randCheeses and randToppings
    randToppings.push(typesOfToppings[getRandomInt(typesOfToppings.length)]);
    for (var i = 0; i < numOfToppings; i++){
        var oneRandTopping = typesOfToppings[getRandomInt(typesOfToppings.length)];
        var dupe = false;
        for (var n = 0; n < randToppings.length; n++){
            if (dupe == true){
                i--;
                break;
            }
            else {
                if (oneRandTopping == randToppings[n]) {
                    dupe = true;
                }
            }
        }
        if (dupe == false){
            randToppings.push(oneRandTopping);
        }
    }

    return pizzaOven(randCrust, randSauce, randCheeses, randToppings);
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1: ");
console.log(p1);
console.log();

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2: ");
console.log(p2);
console.log();

var p3 = randomPizza();
console.log("Pizza 3: ");
console.log(p3);
console.log();

var p4 = randomPizza();
console.log("Pizza 4: ");
console.log(p4);
console.log();