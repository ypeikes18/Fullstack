# Fullstack

[Fullstack](https://fullstack-aa.herokuapp.com/#/) is a clone of the popular blogging platform [Substack](https://substack.com/). Fullstack allows writers to create blogs, posts, and also allows for commenting on posts. The UI is designed to be clean and simple. Fullstack is commited to free speech and will never censor it's writers.

![image](https://user-images.githubusercontent.com/59425912/149536189-4cde2765-2b32-4dc1-a6c5-6ca948d6acda.png)

### Technologies

- Ruby on Rails for the backend
- PostgreSQL database
- Javascript, React on the frontend
- Redux for state management 

### Notable points:

Comments are nested as pictured below:

![image](https://user-images.githubusercontent.com/59425912/149536599-ada46624-126e-4b0b-96af-74c7bff0fef3.png)

This was accomplished as follows:
* creating a query in the `Post` model for all of the posts comments
* in the post container the comments were filtered to take in top level comments as props
* each comment filters the state to take in it's child comments as props
* comment component recursively renders child comments
 

* Similiarly, each comment in the the state has an array of child comment IDs. This allows us to recursively render comments in the `Comment` component by iterating through each child comment Id and rendering it as another comment. 


```    render() {
        const { comment, childComments } = this.props;

        if(!comment) return null;

        const { commenterName, created_at } = comment;

        return (
            <div className='comment'>

                <div className='comment-banner-container'>
                    <strong>{commenterName}</strong>
                    <span className='comment-date'>{created_at}</span>
                </div>

                { this.createCommentBody() }

                { childComments.map((comment, i) => (
                            < CommentContainer 
                            comment={comment}
                            key={i}/>
                )) }          
            </div>
        )
    }```

* the visual aspect of the nesting is then accomplished by simply giving each comment a margin.

## Future updates

* Likes - users will have the ability to like comments and posts.
* Subscriptions - users will have the ability to subscribe to blogs and view and manage their subscriptions from an accoutn dashboard.
