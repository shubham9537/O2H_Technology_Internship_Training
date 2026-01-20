import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          BlogApp
        </Link>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="username">Hi, {user.name}</span>
            <Link to="/create" className="nav-link">
              Create
            </Link>
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link signup">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
