import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
//BEM
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header__icon" fontSize="large" />
      </IconButton>
      <img
        className="header__logo"
        src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
        alt="tinder logo"
      />
      <IconButton>
        <QuestionAnswerIcon className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
