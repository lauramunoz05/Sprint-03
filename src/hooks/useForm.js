import { useState } from 'react';

export const useForm = (initalState = {}) => {

    const [values, setValues] = useState(initalState);

     const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });

        console.log(values);
    }

     const handleReset = () => {
        setValues( initalState )
    }

    return [ values, handleInputChange, handleReset ]

}