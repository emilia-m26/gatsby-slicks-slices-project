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
        }
    ]
};