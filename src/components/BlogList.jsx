const BlogList = ({blogs, title, handleDelete}) => {    // destructure the props directly and make available in component
  // const blogs = props.blogs;
  // const title = props.title;
// grab the props and cycle them through the template below. Makes BlogList component more usable.
  return (
    <div className='blog-list'>
      <h2>{ title }</h2>
      {blogs.map((blog) => (
      <div className='blog-preview' key={blog.id}>
      <h2>{blog.title}</h2>
      <p>Written by {blog.author}</p>
      <button onClick={() => handleDelete(blog.id)}>delete blog</button>
      </div>
    ))}
    </div>
  )
}

export default BlogList;