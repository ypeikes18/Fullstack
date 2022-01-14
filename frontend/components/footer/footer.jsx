import React from 'react';

import { gitHubIcon, linkedinIcon } from '../../util/urls';

const Footer = (props) => {
    return (
        <div id='footer'>
            <div id='footer-content-container'>
                <p>Fullstack is a <a href='https://substack.com/'>
                    substack
                </a> clone by Yisrael Peikes</p>
                {/* <div id='github-icon-container'>
                    <img
                    id='github-icon' 
                    src={gitHubIcon}/>
                </div>
                <div id='linkedin-icon-container'>
                    <img 
                    id='linkedin-icon' 
                    src={linkedinIcon}/>
                </div> */}
            </div>

        </div>
    )
}

export default Footer;