import React from 'react'; 
import BlogPreviews from '../blog_search_results/blog_previews';

class BlogIndex extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { requestType: 'featured', amount: 6 };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { fetchBlogs } = this.props;
        const defaultReq = this.state.requestType;
        fetchBlogs(defaultReq)
    }

    handleDisplayAmount() {

    }

    handleClick(e) {
        e.preventDefault();
        const { fetchBlogs } = this.props;
        const requestType = e.currentTarget.id;

        switch(requestType) {
            case this.state.requestType:
                return;
            case 'authored':
                fetchBlogs(requestType);
                this.setState({ requestType });
            case 'featured':
                fetchBlogs(requestType);
                this.setState({ requestType });
            case 'subscribed':
                fetchBlogs(requestType);
                this.setState({ requestType });
            default:
                fetchBlogs('search', requestType);
                this.setState({ requestType });
        }
    }

    render() {
        const { blogs } = this.props;
        if(!blogs) return null;
        return(            
            <div id='blog-index'>                
                <BlogPreviews blogs={blogs}/>

                <div id='category-buttons-container'>
                    <div className='category-buttons-row'>
                        <div 
                        className='category-button'
                        onClick={this.handleClick}
                        id='authored'>
                            Authored
                        </div>

                        <div
                        className='category-button' 
                        onClick={this.handleClick}
                        id='subscribed'>
                            Subscribed
                        </div>

                        <div
                        className='category-button' 
                        onClick={this.handleClick}
                        id='economics'>
                            Economics
                        </div>
                    </div>

                    <div className='category-buttons-row'>
                        <div
                        className='category-button' 
                        onClick={this.handleClick}
                        id='featured'>
                            Featured
                        </div>
                        <div
                        className='category-button' 
                        onClick={this.handleClick}
                        id='sports'>
                            Featured
                        </div>
                    </div>
                    

                    
    
                </div>
            </div>
        )
    }
}

export default BlogIndex;