import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

//destructuring props
export default function PriceInput({ type, value, onChange, inputComponent }) {
    return (
    <div>
        <h2>{type.title}</h2>
        <p>{type.description}</p>
        <input type={type.name} value={value} onChange={event => onChange(createPatchFrom(event.target.value))} ref={inputComponent}/>
    </div>
    );
}

//exposing focus method for sanity to run
PriceInput.focus = function() {
    this._inputElement.focus();
}