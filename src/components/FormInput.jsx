import React from 'react';

const FormInput = ({label, type, name, defaultValue}) => {
    return (
        <div>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className='input input-bordered '
            />
        </div>  
    );
};

export default FormInput;