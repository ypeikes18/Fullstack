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
                <div>
                <Link to='/sign-up' 
                      className='orange-button '
                      id='start-writing'>
                Start Writing
                </Link>  
                </div>
            </div>

            < BlurbIndexContainer/>
            <div id='calculator-and-small-blurb'>
                <div id='small-blurb'>
                    <h1>A media business in minutes.</h1>
                    <p>We make monetizing your content simple. 
                       You create the content; we take care of the rest.
                    </p>
                </div>
                < Calculator/>
            </div>

        </div>
    )
}

export default SplashContent;