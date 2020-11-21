import { MdPerson as icon } from 'react-icons/md';

export default {
    //computer name
    name: 'person',
    //visible title
    title: 'Slicemasters',
    type: 'document',
    //can give icon any React comp
    icon: icon, 
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tell us a bit about this person.'
        }
    ]
};