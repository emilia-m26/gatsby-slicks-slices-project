import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

export default function ToppingsFilter() {
    //get list of all toppings
    const toppings = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                    vegetarian 
                }
            }
        }
    `);
    console.log(toppings);
    //get list of all pizzas with their toppings
    //count how many pizzas are in each topping
    //loop ove rlist of toppings and display topping and count of toppings
    ///link it up
        
    return (
        <div>
            <p>Toppings</p>
        </div>
    )
}