import React from 'react';
import { graphql } from 'gatsby';


export default function BeersPage() {
    return ( 
        <>
            <p> hey, I am the Beers page</p>
        </>
    );
}

export const query = graphql`
    query {
        allBeer {
            nodes {
                id
                name
                price
                image
                rating {
                    average
                    reviews
                }
            }
        }
    }
`;