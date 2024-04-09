import React from 'react';

const FormInput = ({label, type, name, defaultValue, size}) => {
    return (
        <div>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <input
                type={type}
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size}`}
                style={{width: '100%'}}
            />
        </div>  
    );
};

export default FormInput;