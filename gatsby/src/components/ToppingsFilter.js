import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        .count {
            background: white;
            padding: 2px 5px;
        }
        .active {
            background: var(--yellow);
        }
    }
`;

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
    const {pizzas} = useStaticQuery(graphql`
        query {
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
        <ToppingsStyles>
            {toppingsWithCounts.map((topping) => (
            <Link to={`/topping/${topping.name}`} key={topping.id}>
                <span className="name">
                {topping.name}
                </span>
                <span className="count">
                    {topping.count}
                </span>
                </Link>
            ))}
        </ToppingsStyles>
    )
}