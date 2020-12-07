import { MdStore as icon } from 'react-icons/md';

export default {
    //computer name
    name: 'storeSettings',
    //visible title
    title: 'Settings',
    type: 'document',
    //can give icon any React comp
    icon: icon, 
    fields: [
        {
            name: 'slicemasters',
            title: 'Slicemasters Currently Slicing',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person'}]}]
        },
    ],    
};