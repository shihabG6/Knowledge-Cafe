import PropTypes from 'prop-types';
import bookMarkLogo from '../../assets/images/Frame (12).svg'
const Blog = ({blog ,handelBook}) => {
  console.log(blog)
  const {author,cover,reading_time,title ,posted_date,author_img}=blog;
  return (
    <div className='p-4'>
      <img className='rounded-md' src={cover}  />
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img className='h-16' src={author_img} alt="" />
          <div>
            <h2>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <p>{reading_time} min read</p>
          <button onClick={()=>handelBook(blog)}><img src={bookMarkLogo} alt="" /></button>
        </div>
      </div>
      <p className='text-4xl'>{title}</p>
    </div>
  );
};
Blog.propTypes = {
  blog:PropTypes.object.isRequired,
  handelBook:PropTypes.func.isRequired
}
export default Blog;