import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex w-full fixed top-0 left-0 h-20 ">
      <div
        className="w-full mx-auto max-w-7xl flex items-center
      justify-between"
      >
        <h1 className="logo text-white">Logo Here!!</h1>
        <div>routes</div>
        <div>actions</div>
      </div>
    </div>
  );
};

export default Navbar;
