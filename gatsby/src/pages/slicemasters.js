import React from 'react';
import { graphql } from 'gatsby';


export default function SlicemastersPage({ data }) {
    const slicemasters = data.slicemasters.nodes;
    console.log(slicemasters);

    return ( 
        <>
            <p> hey, I am the slice masters page</p>
        </>
    );
}

export const query = graphql`
query {
    slicemasters: allSanityPerson {
        totalCount
        nodes {
            name
            id
            slug {
                current
            }
            description
            image {
                asset {
                    fluid(maxWidth: 410) {
                    ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
}
`;