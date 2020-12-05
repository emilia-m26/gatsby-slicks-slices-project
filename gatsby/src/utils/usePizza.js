import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({pizzas, inputs}) {
    //create state to hold order
    //const [order, setOrder] = useState([]); -- moved this state to provider
    const [order, setOrder] = useContext(OrderContext);
    //need new pieces of state, handling errors, loading and returned messages
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

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
    //function run when form submitted
    async function submitOrder(event) {
        event.preventDefault();
        console.log(event)
        setLoading(true)
    }
    //send data to serverless function when checking out
    
    //return all functionality that this custom hook needs to surface for who is using hook
    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
    };
}