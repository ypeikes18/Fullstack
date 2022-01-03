import React from 'react';

const Blurb = (props) => {
    const { header, 
            description, 
            imageLink,
            index} = props;
    
    const content = (<div>
        <h1>{header}</h1>
        <p>{description}</p>
    </div>);
    const image = (<img src={imageLink}/>)


    return (
        <div className='blurb'>
            {parseInt(index) % 2 === 0 ? image : content}
            {parseInt(index) % 2 === 0 ? content : image}    
        </div>
    )
}

export default Blurb