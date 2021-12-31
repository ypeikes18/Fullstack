import React from 'react'
import { subStackURL } from '../../util/urls'

class FullStackIcon  extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (<img 
                src={subStackURL}
                id='full-stack-icon'/>)
    }

}    

export default FullStackIcon;