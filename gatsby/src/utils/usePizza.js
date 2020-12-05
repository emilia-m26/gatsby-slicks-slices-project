import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';

export default function usePizza({pizzas, values}) {
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
        
        setLoading(true);
        setError(null);
        setMessage(null);
        //gather all data to be sent
        const body = {
            order: attachNamesAndPrices(order, pizzas),
            total: calculateOrderTotal(order, pizzas),
            name: values.name,
            email: values.email,
        };
         //send data to serverless function when checking out
         console.log(process.env.GATSBY_SERVERLESS_BASE);
         
    const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const text = JSON.parse(await res.text());
    //const text = await res.text();
    console.log(text)
    //check if everything worked
    if(res.status >= 400 && res.status < 600) {
        setLoading(false); //turn off loading
        setError(text.message); //sent from our server side
    } else {
        //it worked
        setLoading(false);
        setMessage('Success! Come on down for your pizza.');
    }
}
   
    
    //return all functionality that this custom hook needs to surface for who is using hook
    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder,
    };
}