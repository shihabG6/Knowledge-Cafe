import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center border-b-2 mx-4 p-2'>
      <h2 className='text-2xl font-bold'>Knowldge Cafe</h2>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;