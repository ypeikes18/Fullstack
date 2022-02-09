import React from 'react';

import { gitHubIcon, linkedinIcon } from '../../util/urls';

const Footer = (props) => {
    return (
        <div id='footer'>
            <div id='footer-content-container'>
                <p>&copy; Fullstack is a <a href='https://substack.com/'>
                    substack
                </a> clone by Yisrael Peikes</p>
                <div className="icons-container">
                    <ul className="icons">
                        <li>
                            <a href="https://www.linkedin.com/in/yisrael-peikes-16b87356/" 
                            target="_blank" 
                            className="icon brands fa-linkedin">

                                <img src={window.linkedinLogoURL}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://angel.co/u/yisrael-peikes-2" 
                            target="_blank" 
                            className="icon brands fa-angellist">
                                
                                <img src={window.angelListIconUrl}/>
                            </a>

                            
                        </li>
                        <li>
                            <a href="https://github.com/ypeikes18" 
                            target="_blank" 
                            className="icon brands fa-github">

                                <img src={window.gitHubLogoURL}/>
                            </a>
                        </li>
                    </ul>
				</div>
                
            </div>

        </div>
    )
}

export default Footer;