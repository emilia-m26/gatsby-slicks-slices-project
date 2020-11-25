import React from 'react';

//destructuring prop
export default function PizzaList({ pizzas }) {
    return (
        <p>
           There are {pizzas.length} pizzas!
        </p>
    )
}