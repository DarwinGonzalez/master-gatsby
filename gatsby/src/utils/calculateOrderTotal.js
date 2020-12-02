import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  // 1. Loop over each item in the order
  // Calc the total for that pizza
  // Ad the total to a running total
  const total = order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((element) => element.id === singleOrder.id);
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
  return total;
}
