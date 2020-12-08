import { useState, useEffect } from 'react';


function useLatestData() {
    //hot slices
    const [hotSlices, setHotSlices] = useState();
    //slice masters
    const [slicemasters, setSlicemasters] = useState();
    //use side effect to fetch data from graphql endpoint
    useEffect(function() {
        //when component loads, fetch data
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query {
                        StoreSettings(id: "downtown) {
                            name
                            slicemaster {
                                name
                            }
                            hotSlices {
                                name
                            }
                        }
                    }
                `,
            })
        })
    }, []);
}