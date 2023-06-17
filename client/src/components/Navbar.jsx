import { Link } from "react-router-dom";
import { Planet, UserCircle } from "@phosphor-icons/react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <header className="bg-bg-100 w-full flex justify-center py-5 fixed border-b-2 border-primary-200 bg-opacity-70 backdrop-blur z-10 h-20">
      <div className="max-w-custom w-full m-custom flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-2xl text-white flex">
            <span className="hidden sm:block">Astro Bytes</span>
            <Planet
              className="inline-block text-primary-100 sm:ml-2"
              size={30}
              weight="bold"
            />
          </h1>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center justify-center gap-6">
              <Link
                to="/profile"
                className="font-medium flex items-center text-lg"
              >
                <UserCircle
                  className="inline-block mr-2 text-primary-100"
                  size={30}
                />
                {user.username}
              </Link>
              <button onClick={handleLogout} className="btn text-white">
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex items-center justify-center gap-5 font-semibold">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link className="btn" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
