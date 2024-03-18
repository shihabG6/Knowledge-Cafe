import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handelBook}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/bloges.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <div className="w-2/3 border-2">
      <h2>Blogs:{blogs.length}</h2>
      {
        blogs.map((blog , index) =><Blog blog={blog} handelBook={handelBook}
         key={index}></Blog>)
      }
    </div>
  );
};
Blogs.propTypes={
  handelBook:PropTypes.func.isRequired
}
export default Blogs;
