import { useState } from 'react';

//custom hook
export default function useForm(defaults) {
    const [values, setValues] = useState(defaults);

    function updateValue(event) {
         //check if its a number and convert
         let value = event.target.value;
         if(event.target.type === 'number') {
             value = parseInt(value);
         }
        setValues({
            //copy existing values into it
            ...values, 
            ///update new value that changed - dynamic - will work for all values
            [event.target.name]: value,
        })
    }

    return { values, updateValue };
}