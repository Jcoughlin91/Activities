const pizzaToppings = ["Cheese", "meat", "veggies", "Pineapple"];
function greetCustomer() {
let greeting = "Welcome to the Pizza Club! The toppings are";
for (let toppings of pizzaToppings) {
console.log(toppings)
}
}
greetCustomer();

//3
function getPizzaOrder(size, crust, ...toppings){
console.log(`One ${size} pizza with ${crust} and ${toppings}`);  
return [size, crust, toppings];
} 
getPizzaOrder("medium", "thick","Cheese", "meat", "veggies", "Pineapple");



//4
function preparePizza(pizza) {
  console.log ("Your order is coming!");
  return{
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2]
  }
};



