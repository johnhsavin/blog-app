import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Test A', body: 'lorem ipsum', author: 'john', id: 1},
    { title: 'Test B', body: 'lorem ipsum', author: 'todd', id: 2},
    { title: 'Test C', body: 'lorem ipsum', author: 'jon', id: 3},
  ]);

  const [name, setName] = useState('Jon')

const handleDelete = (id) => {
const newBlogs = blogs.filter(blog => blog.id !== id)     
setBlogs(newBlogs);
}

useEffect(() => {}, [name]);           // This useEffect will run when the name changes

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!"  handleDelete={handleDelete}/>
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'John')} title="John's Blogs" /> */}
      <button onClick={() => setName('todd')}>change name</button>    
      {/* when button is clicked it will trigger the useEffect state */}
      <p>{ name }</p>
    </div>
  );
}

export default Home;