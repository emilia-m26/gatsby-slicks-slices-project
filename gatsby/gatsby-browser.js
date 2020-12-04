//this file allows to hook into different gatbsy APIs if needed
import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}> {element} </Layout>
};

//wrap root element to persist data from page to page

export function wrapRootElement({ element }) {
return <OrderProvider>{element}</OrderProvider>
}