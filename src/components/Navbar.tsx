import { FC } from "react";
import GradientText from "./ui/GradientText";
import { useNavbarRoutes } from "../constants";
import NavItem from "./NavItem";
import { buttonVariants } from "./ui/Button";

interface NavbarProps {}

interface route {
  name: string;
  path?: string;
}

const Navbar: FC<NavbarProps> = () => {
  const routes = useNavbarRoutes();
  return (
    <div className="flex w-full fixed top-0 left-0 h-20 ">
      <div
        className="w-full mx-auto max-w-7xl flex items-center
      justify-between"
      >
        <GradientText label="Motion" className="text-3xl font-extrabold" />
        <ul className="flex items-center gap-4 font-medium">
          {routes.map((route: route, index) => (
            <NavItem name={route.name} path={route.path} key={index} />
          ))}
        </ul>
        <ul className="flex items-center gap-4">
          <li
            className={buttonVariants({
              variant: "default",
            })}
          >
            Sign in
          </li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
