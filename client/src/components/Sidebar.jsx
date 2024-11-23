import { Link, useLocation } from "react-router-dom";
import navLinks from "../constant/navs";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">joystep</div>
      <div className="logo">academy</div>
      <div className="grid mt-6 gap-2">
        {navLinks.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`p-2 rounded-md font-semibold ${
              pathname === item.path
                ? "bg-white text-gray-700"
                : "text-white bg-transparent"
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
