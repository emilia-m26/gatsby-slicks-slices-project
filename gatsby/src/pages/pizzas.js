import React from 'react';
import { graphql } from 'gatsby';
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';
import SEO from '../components/SEO';

//destructured one level deep
export default function PizzasPage({ data, pageContext }) {
    const pizzas = data.pizzas.nodes
    return ( 
        <>
        <SEO title={pageContext.topping ? `Pizzas with ${pageContext.topping}` : `All Pizzas`} />
        <ToppingsFilter activeTopping={pageContext.topping} />
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