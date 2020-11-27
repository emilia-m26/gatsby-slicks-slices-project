import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { Link } from 'gatsby';

function countPizzasInToppings(pizzas) {
    //return pizzas with counts
    // flat() - take an arrays of arrays and turn it into one big array
    const counts = pizzas.map(pizza => pizza.toppings).flat().reduce((acc, topping) => {
        //check if existing topping
        const existingTopping = acc[topping.id];
        if(existingTopping){
            //if is, increment
            existingTopping.count += 1;
        } else {
        //otherwise create new entry and set to 1
        acc[topping.id] = {
            id: topping.id,
            name: topping.name,
            count: 1,
            }
        }
        return acc;
    }, {});
    //sort them based on count
    const sortedToppings = Object.values(counts).sort((a, b) => b.count - a.count);
    return sortedToppings;
}

export default function ToppingsFilter() {
    //get list of all toppings
    //get list of all pizzas with their toppings
    const {toppings, pizzas} = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                    vegetarian 
                }
            }
            pizzas: allSanityPizza {
                nodes {
                    toppings {
                        name
                        id
                    }
                }
            }
        }
    `);
    
    //count how many pizzas are in each topping
    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
    console.log(toppingsWithCounts);
   
         //loop over list of toppings and display topping and count of toppings
    return (
        <div>
            {toppingsWithCounts.map((topping) => <Link to={`/topping/${topping.name}`}>{topping.name}</Link>)}
        </div>
    )
}