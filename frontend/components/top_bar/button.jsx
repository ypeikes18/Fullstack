import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => (
    <Link to={props.link}>
        {props.action}
    </Link>
)

export default Button;

