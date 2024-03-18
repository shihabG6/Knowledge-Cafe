
import PropTypes from 'prop-types';
const Count = ({readTime}) => {
  return (
    <div  className="border-blue-500 border py-10 rounded-md mb-4">
      <h1 className="text-2xl text-center text-blue-600 font-bold">Spand time on read: {readTime} min</h1>
    </div>
  );
};
Count.propTypes ={
  readTime:PropTypes.number.isRequired,
}
export default Count;