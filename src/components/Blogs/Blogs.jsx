import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handelBook,handelTime}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/bloges.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <div className="w-2/3 border-2 bg-slate-200" >
      {
        blogs.map((blog , index) =><Blog blog={blog} handelTime={handelTime} handelBook={handelBook}
         key={index}></Blog>)
      }
    </div>
  );
};
Blogs.propTypes={
  handelBook:PropTypes.func.isRequired,
  handelTime:PropTypes.func.isRequired
}
export default Blogs;
