import React from 'react';
import styled from 'styled-components';
import 'normalize.css'; //package from package.json
import Nav from './Nav';
import Footer from './Footer';

import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';


const ContentStyles = styled.div`
    background: white;
    padding: 2rem;
`;

export default function Layout({ children }) {
 return (
     <>
         <GlobalStyles />
         <Typography />
         <ContentStyles>
            <Nav />
            {children}
            <Footer />
         </ContentStyles>
     </>
 )
};