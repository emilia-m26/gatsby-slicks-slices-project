import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

//custom sidebar file
export default function Sidebar() {
    return S.list().title(`Slick's Slices`).items([
        //create new subitem
        S.listItem()
        .title('Home Page')
    ])
}