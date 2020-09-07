import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Payments from "./Payments";

const Header = () => {
  const authState = useSelector((state) => state.auth);
  const renderHelper = () => {
    switch (authState) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="payment">
            <Payments />
          </li>,
          <li style={{ margin: "0 10px" }} key="credits">
            Credits : {authState.credits}
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={authState ? "/survey" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderHelper()}</ul>
      </div>
    </nav>
  );
};

export default Header;
