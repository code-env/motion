import { FC } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  name: string;
  path?: string;
}

const NavItem: FC<NavItemProps> = ({ name, path }) => {
  return (
    <li>
      {path ? (
        <Link to={path} className="text-slate-400">
          {name}
        </Link>
      ) : (
        <span className="text-slate-400 cursor-pointer">{name}</span>
      )}
    </li>
  );
};

export default NavItem;
