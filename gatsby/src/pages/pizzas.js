import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';

//destructured one level deep
export default function PizzasPage({ data }) {
    const pizzas = data.pizzas.nodes
    return ( 
        <>
        <ToppingsFilter />
        <PizzaList pizzas={pizzas}/>
        </>
    );
}

//specify page query - gatsby will grab data and pass it to page comp
export const query = graphql`
    query PizzaQuery($topping: [String]) {
        pizzas: allSanityPizza(filter: {
            toppings: {
                elemMatch: {
                    name: {
                       in: $topping
                    }
                }
            }
        }) {
            nodes {
                id
                name
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image{
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;