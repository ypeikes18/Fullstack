import React from 'react'

class BlogLogo extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const blogId = this.props.match.params.blogId;
        return (<div>
                    <h1>{blogId}</h1>
                </div>)
    }
}





export default BlogLogo;