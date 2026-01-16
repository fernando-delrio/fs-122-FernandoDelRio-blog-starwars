import { Link } from "react-router-dom";
import { Favorites } from "./Favorites";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">

        <Link to="/" className="navbar-brand mb-0 h1">
          Star Wars Blog
        </Link>

        <div className="d-flex align-items-center gap-2">
          <Link to="/favorites" className="btn btn-outline-secondary">
            Favorites
          </Link>

          <Favorites />
        </div>

      </div>
    </nav>
  );
};
