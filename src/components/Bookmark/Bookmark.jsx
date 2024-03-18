import PropTypes from 'prop-types';
import Book from '../book/book';
const Bookmark = ({bookMark}) => {
  return (
    <div className=" border-2 p-4 bg-slate-200">
      <h1 className="text-3xl rounded-md py-4">Bookmark:{bookMark.length}</h1>
      {
        bookMark.map(book =><Book book={book}key={book.id}> </Book>)
      }
        
    </div>
  );
};

Bookmark.propTypes={
  bookMark:PropTypes.array.isRequired
}
export default Bookmark;