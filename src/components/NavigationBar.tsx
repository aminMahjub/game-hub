import logo from "../assets/logo.webp";

const Navigation = () => {
  return (
    <nav
      className='col-span-2 p-2 flex justify-start items-center '
    >
      <img src={logo} width={55} height={55} />
      
    </nav>
  );
};

export default Navigation;
