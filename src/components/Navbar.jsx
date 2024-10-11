import logo from "../assets/Marvel_Logo.svg";

const Navbar = () => {
  return (
    <div className="w-full h-[142px] flex items-end justify-center bg-navbar-bg bg-top bg-no-repeat bg-[length:1864px_142px]">
      <img className="w-60 my-4" src={logo} alt="Marvel Heroes" />
    </div>
  );
};

export default Navbar;
