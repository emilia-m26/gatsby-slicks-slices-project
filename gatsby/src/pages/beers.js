import React from 'react';
import { graphql } from 'gatsby';


export default function BeersPage({ data }) {
    return ( 
        <>
            <h2 className="center"> We have ${data.beers.nodes.length} Beers available. Dine in Only!</h2>
            <div>
                {data.beers.nodes.map(beer => {
                    const rating =Math.round(beer.rating.average)
                    return (
                        <div key={beer.id}>
                            <img src={beer.image} alt={beer.name} />
                            <h3>{beer.name}</h3>
                            {beer.price}
                            <p title={`${rating} out of 5 stars`}>
                            {`🌟`.repeat(rating)}
                            <span style={{filter: `grayscale(100%)`}}>
                            {`🌟`.repeat(5-rating)}
                            </span>
                            <span>({beer.rating.reviews})</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export const query = graphql`
    query {
        beers: allBeer {
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