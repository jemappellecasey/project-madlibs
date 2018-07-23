import React from 'react';

const Input = ({type, state, name}, onChange, index) => {
    return (
        <div key={index} className="input">
        <label className={`input__number ${state == '' ? 'grey' : 'green'}`}>
            {index + 1}
        </label>
        <input placeholder={type} name={name} value={state} onChange={onChange} />
        <label className="input__type">
            {type}
        </label>
       </div>
    )
}

export default Input;