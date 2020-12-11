import React from 'react';
import { ItemsGrid } from "../styles/Grids";

export default function LoadingGrid({ count }) {
    return (
        <ItemsGrid>
            {Array.from({ length: count }, (_, i) => (
             <p>Loading...</p>   
            ))}
        </ItemsGrid>
    )
}