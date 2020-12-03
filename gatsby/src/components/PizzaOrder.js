import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function PizzaOrder({ order, pizzas, removeFromOrder }){
    return (
        <>
        {order.map((singleOrder, Index) =>{
            return (
                <MenuItemStyles>
                {singleOrder.id}
                </MenuItemStyles>
            )
        })}
        </>
    )
}