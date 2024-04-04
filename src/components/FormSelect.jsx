import React from 'react';

const FormSelect = ({name, label, list,  defaultValue, size}) => {
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label'>
                <span className='label-text capitalize'>{label}</span>
            </label>
            <select className={`select select-bordered ${size}`} name={name} id={name} defaultValue={defaultValue}>
                {list.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default FormSelect;