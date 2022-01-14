# Size Limit

[Fullstack](https://fullstack-aa.herokuapp.com/#/) is a clone of the popular blogging platform [Substack](https://substack.com/). Fullstack allows writers to create blogs, posts, and also allows for commenting on posts. The UI is designed to be clean and simple. Fullstack is commited to free speech and will never censor it's writers.

![image](https://user-images.githubusercontent.com/59425912/149536189-4cde2765-2b32-4dc1-a6c5-6ca948d6acda.png)

### Notable points:

Comments are nested as pictured below:

![image](https://user-images.githubusercontent.com/59425912/149536599-ada46624-126e-4b0b-96af-74c7bff0fef3.png)

This was accomplished as follows:
* creating a query in the `Post` model for IDs of top level comment
* Passing those IDs to an array in the state of each `Post`
* 
![image](https://user-images.githubusercontent.com/59425912/149537263-d3ef6aa2-09ee-4691-9d28-beb8a2b64b47.png)
* sample state of a post with it's top level comments' *









