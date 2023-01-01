import React from 'react';
import './Person.css';

function Person(props) {
    return (
        <button className={props.className} id='Morris'>me</button>
    )
}

export default Person;