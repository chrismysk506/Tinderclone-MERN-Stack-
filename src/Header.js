import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import {IconButton} from '@material-ui/core';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './Header.css';

export default function Header() {
    return (
        <div className="Headercontainer">
            <IconButton>
                <PersonIcon></PersonIcon>
            </IconButton>
         <div className="option">

        
            <IconButton >
                <WhatshotIcon fontSize="large"   background-color="secondary"></WhatshotIcon>
            </IconButton>
            </div>
            <IconButton>
                <QuestionAnswerIcon></QuestionAnswerIcon>
            </IconButton>
        </div>
    )
}

