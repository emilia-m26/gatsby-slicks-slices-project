import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from './formatMoney';

export default function calculateOrderTotal(order, pizzas) {
    //loop over items in order
    const total = order.reduce((runningTotal, singleOrder) =>{
        const pizza = pizzas.find(pizza => pizza.id === singleOrder.id);
        return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
    }, 0);
    return formatMoney(total);
    //calc the total for that pizza
    //add total to running total
}