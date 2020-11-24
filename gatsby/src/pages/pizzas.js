import React from 'react';
import { graphql } from 'gatsby';



export default function PizzasPage() {
    return ( 
        <>
            <p> hey, I am the pizzas page</p>
        </>
    );
}

//specify page query - gatsby will grab data and pass it to page comp
export const query = graphql`
    query PizzaQuery {
        pizzas: allSanityPizza {
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