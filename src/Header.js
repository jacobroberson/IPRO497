import React from "react";
import "./Header.js";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
        <Link to="/">
          <img
            className="header__icon"
            src={process.env.PUBLIC_URL + "/media/logo.png"}
            alt="logo"
          />
        </Link>

      <div className="header__center">
        <h1>Get A Study Space!</h1>
      </div>

      <div className="header__right">
        {/* <LanguageIcon />
        <ExpandMoreIcon /> */}
        <Button className="admin-button" onClick={() => history.push("/admin")}>
          Admin
        </Button>
        <Button className="admin-button" onClick={() => history.push("/Login")}>
          Login
        </Button>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
