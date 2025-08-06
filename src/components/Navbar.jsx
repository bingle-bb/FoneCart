import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = (props) => {
  const { cartItems, favouriteIds } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          zNova
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={"nav-link " + (pathname === "/" && "active")}
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={"nav-link " + (pathname === "/cart" && "active ")}
              >
                Cart{" "}
                {totalItemCount > 0 && (
                  <span className="badge text-bg-light">{totalItemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/favourite"
                className={
                  "nav-link " + (pathname === "/favourite" && "active")
                }
              >
                Favourite{" "}
                {favouriteIds.length > 0 && (
                  <span className="badge bg-secondary">
                    {favouriteIds.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
