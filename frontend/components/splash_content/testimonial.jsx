import React from 'react';

const Testimonial = (props) => {
    return (
        <div>
            <h1>{props.testimonial}</h1>
            <span>{props.name}</span>
        </div>
    )
}

export default Testimonial;

