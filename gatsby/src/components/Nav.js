import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//only will apply to this component - scoped styles
const NavStyles = styled.nav`
    margin-bottom: 3rem;
    ul {
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-gap: 2rem;
        align-items: center;
        text-line: center;
        list-style: none;
    }
`;

export default function Nav() {
    return ( 
        <NavStyles>
            <ul>
                <li><Link to="/">Hot Now</Link></li>
                <li><Link to="/pizzas/">Pizza Menu</Link></li>
                <li><Link to="/">LOGO</Link></li>
                <li><Link to="/slicemasters">SliceMasters</Link></li>
                <li><Link to="/order">Order Ahead</Link></li>
            </ul>
        </NavStyles>
    );
}