import React from 'react';
import SEO from "../components/SEO";
import useForm from '../utils/useForm'; //custom hook
import { graphql } from 'gatsby';

export default function OrderPage() {
    const { values, updateValue } = useForm({
        name: '',
        email: ''
    });
    return ( 
        <>
        <SEO title="Order a Pizza!" />
            <form>
                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={values.name} onChange={updateValue}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={values.email} onChange={updateValue} />
                </fieldset>
                <fieldset>
                    <legend>Menu</legend>
                </fieldset>
                <fieldset>
                    <legend>Order</legend>
                </fieldset>
            </form>
        </>
    );
}

export const query = graphql`
    query {
        pizzas: allSanityPizza {
            nodes {
                id
                name
                slug {
                    current
                }
                price
                image{
                    asset {
                        fluid(maxWidth: 100) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;