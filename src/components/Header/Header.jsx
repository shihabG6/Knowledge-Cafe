import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center border-b-2 mx-4 p-2'>
      <h2 className='text-2xl font-bold'>Knowldge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;