import { useState, useEffect } from 'react';

export default function useLatestData() {
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
                        StoreSettings(id: "downtown") {
                            name
                            slicemasters {
                                name
                                _id
                                image {
                                    asset {
                                        url
                                        metadata {
                                            lqip
                                        }
                                    }
                                }
                            }
                            hotSlices {
                                name
                                _id
                                image {
                                    asset {
                                        url
                                        metadata {
                                            lqip
                                        }
                                    }
                                }
                            }
                        }
                    }
                `,
            })
        }).then(res => res.json()).then(res => {
            //check for errors
            //set data to state
            setSlicemasters(res.data.StoreSettings.slicemasters);
            setHotSlices(res.data.StoreSettings.hotSlices);
        })
    }, []);
    return {
        hotSlices,
        slicemasters,
    }
}