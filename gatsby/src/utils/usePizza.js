import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({pizzas, inputs}) {
    //create state to hold order
    //const [order, setOrder] = useState([]); -- moved this state to provider
    const [order, setOrder] = useContext(OrderContext);
    //make function to add things to order
    function addToOrder(orderedPizza) {
        setOrder([...order, orderedPizza]);
    }
    //function to remove things from order
    function removeFromOrder(index) {
        setOrder([
            //everything before item we want to remove
            ...order.slice(0, index),
            //everything after item we want to remove
            ...order.slice(index + 1) //omit 2nd arg - goes to end
        ]);
    }
    //send data to serverless function when checking out
    
    //return all functionality that this custom hook needs to surface for who is using hook
    return {
        order,
        addToOrder,
        removeFromOrder
    };
}