import React from'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ items }) {
    return (
        <ItemsGrid>
           {items.map((item) => (
               <ItemStyles>
                   <p>
                       <span className="mark">{item.name}</span>
                   </p>
                   <img src={`${item.image.asset.url}`} alt={item.name} />
               </ItemStyles>
           ))}
        </ItemsGrid>
    )
}