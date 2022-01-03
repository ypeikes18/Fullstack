import React from "react";
import { connect } from 'react-redux';

import {blurbs} from '../../util/content'
import Blurb from './blurb'

const BlurbIndex = (props) => {
    return (<div id='blurb-index'>
                {props.blurbs.map((blurb, i) => {
                    return (< Blurb header={blurb.header}
                                    description={blurb.description}
                                    imageLink={blurb.imageLink}
                                    key={i}
                                    index={i}/>)
                })}
            </div>)
}

const mSTP = () => ({
    blurbs
});

const mDTP = () => ({});

export default connect(mSTP, mDTP)(BlurbIndex)