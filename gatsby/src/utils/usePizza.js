import { useState } from 'react';

export default function usePizza({ pizza, inputs }) {
  // 1. Create som estate to hold our order
  const [order, setOrder] = useState([]);
  // 2. Make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Make a fucntion remove thingsfrom order
  function removeFromOrder(index) {
    setOrder([
      // Everything before the item we want to remove
      ...order.slice(0, index),
      // Everytinh after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data a serverless fucntion when they check out
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
