import React from 'react'
import url from '../../util/urls'

class FullStackIcon  extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (<img 
                src={url}
                id='full-stack-icon'/>)
    }

}    

export default FullStackIcon;