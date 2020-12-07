import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

//custom sidebar file
export default function Sidebar() {
    return S.list().title(`Slick's Slices`).items([
        //create new subitem
        S.listItem()
        .title('Home Page')
        .icon(() => <strong>🍕</strong>)
        .child(
            S.editor().schemaType('storeSettings')
            //make new doc id so we don't have random string of numbers
            .documentId('downtown') 
        ),
        //add in the rest of doc items
        ...S.documentTypeListItems()
        //will filter out settings to our custom settings show only
        .filter(item => item.getId() !== 'storeSettings'),
    ])
}