import React from 'react';
import { graphql } from 'gatsby';

export default function SinglePizzaPage() {
    return (
        <p>single pizza</p>
    )
};

//to be dynamic based on slug passed in with context in gatsby-node
export const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza(slug: {
            current: {eq: $slug }}) {
            name
            id
        }
    }
`;