import React from "react";
import { Link } from "react-router-dom";

import BlurbIndexContainer from './blurb_index_container';
import Testimonial from './testimonial';
import { greeting } from '../../util/content';
import Calculator from "./calculator";

const SplashContent = (props) => {

    return (
        <div id='splash-content'>
            <div id='splash-content-banner'>
                <h1>{greeting.h}</h1>
                <p>{greeting.p}</p>
                <Link to='/' 
                      className='orange-button '
                      id='start-writing'>
                Start Writing
                </Link>  
            </div>
            < BlurbIndexContainer/>
            < Calculator/>
        </div>
    )
}

export default SplashContent;