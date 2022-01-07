import React from 'react';
import { Link } from 'react-router-dom';

class WriterDashboard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div>

                </div>
                <div>
                    <Link
                    className='purple-button'
                    to=''>
                        New Post
                    </Link>
                    <Link
                    className='purple-button'
                    to=''>
                        New Thread
                    </Link>
                </div>
            </div>
        )
    }

}

export default WriterDashboard;