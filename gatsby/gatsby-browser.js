//this file allows to hook into different gatbsy APIs if needed
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}> {element} </Layout>
};