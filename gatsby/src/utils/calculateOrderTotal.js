import calculatePizzaPrice from "./calculatePizzaPrice";
import formatMoney from './formatMoney';

export default function calculateOrderTotal(order, pizzas) {
    //loop over items in order
    const total = order.reduce((runningTotal, singleOrder) =>{
        const pizza = pizzas.find((singlePizza)=> singlePizza.id === singleOrder.id);
        //add total to running total
        return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
    }, 0);
    return formatMoney(total);
    
    
}