import React from 'react';
import './Person.css'

const  person = (props) => {
    return <div className="Person">
            <p>I am a person! My Name is {props.name}.  
                I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed}></input>
            </div>
};

export default person;