import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex w-full">
      <h1 className="logo text-white">Logo Here!!</h1>
    </div>
  );
};

export default Navbar;
