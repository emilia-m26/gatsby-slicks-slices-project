import { MdLocalPizza as icon } from 'react-icons/md';

export default {
    //computer name
    name: 'pizza',
    //visible title
    title: 'Pizzas',
    type: 'document',
    //can give icon any React comp
    icon: icon, 
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000),
            //TODO - add custom component
        },
        //relational content - one to many
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ type: 'reference', to: [{type: 'topping'}]}],
        }
    ]
};