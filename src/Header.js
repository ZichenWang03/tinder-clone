import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
//BEM
function Header() {
    return (
        <div className="header"> 
            <PersonIcon /> 
            <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder logo"/> 
            <QuestionAnswerIcon />
        </div>
    )
}

export default Header
