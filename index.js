// Pizza shop app
// that has a menu of pizzas
// and a cart to add pizzas to
// and a checkout to pay for pizzas

// public Menu initMenu() 
function initMenu() {
  return {
    pizzas: [
      { name: 'Margherita', price: 5 },
      { name: 'Fungi', price: 3 },
      { name: 'Pepperoni', price: 6 },
      { name: 'Hawaiian', price: 7 },
    ]
  };
}

let menu = initMenu();
let cart = { items: [] };

let choosenPizza = menu.pizzas.find(pizza => pizza.name === 'Margherita');


let choosenPizza2 = menu.pizzas.find(pizza => pizza.name === 'Pepperoni');

// Result in error because the pizza name is not correct
let choosenPizza3 = menu.pizzas.find(pizza => pizza.name === 'Hawaiiannn');

cart.items.push({ pizza: choosenPizza, quantity: 1 });
cart.items.push({ pizza: choosenPizza2, quantity: 6 });

// Unchecked undefined variable
cart.items.push({ pizza: choosenPizza3, quantity: 3 });

console.log(JSON.stringify(cart, null, 2));

let order = {
  cart: cart,
  total: cart.items.reduce((acc, item) => acc + item.pizza.price * item.quantity, 0)
}

console.log(JSON.stringify(order, null, 2));