const pizzaToppings = ["Cheese", "meat", "veggies", "Pineapple"];
function greetCustomer() {
let greeting = "Welcome to the Pizza Club! The toppings are";
  //console.log(`${greeting}`)
for (let toppings of pizzaToppings) {
greeting += ` ${ toppings }`;  
}
  console.log(greeting);
}
greetCustomer();

3
function getPizzaOrder(size, crust, ...toppings) {
let order = `One ${size} pizza with ${crust} and ${toppings}`;  
  for (let topping of toppings) {
order += `${toppings}`;
  }
  console.log(`${order}. coming up`);
return [size, crust, toppings];
} 
let customerOrder = getPizzaOrder(
  "large", 
  "thick",
  "fish", 
  "pepper",
  "bean"
);



//4
function preparePizza(pizza) {
  console.log ("Your order is coming!");
  return{
    size: pizza[0],
    crust: pizza[1],
    toppings: pizza[2] 
  }
   
};

//5

function servePizza (pizza) {
console.log ("Order up! Here's your large thick crust pizza!")
  size: pizza[0],
  crust: pizza[1],
  toppings: pizza[2]
  return pizza 
};

//6
function preparePizza


