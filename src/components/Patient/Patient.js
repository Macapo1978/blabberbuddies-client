import './Patient.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ImgLanguage from '../../assets/images/child-speaking.svg';
import ImgKidsPlaying from '../../assets/images/kids-playing.svg';

const Patient = ({patientId, userId, namePatient, lastNamePatient, native_language_id, language}) => {

    return(
        <Link to={`/vocabulary/${userId}`}>
            <article className="article">
                <div className="article-language">
                    <img src={ ImgLanguage } alt="Child Speaking" />
                    <p className="article-language-text">Speak: { language }</p>
                </div>
                <div className="article-welcome">
                    <h2 className="article-welcome-text">Welcome</h2>
                    <h4 className="article-welcome-name">{namePatient} {lastNamePatient}</h4>
                    <div className="article-welcome-button">
                        <img className='article-welcome-button-img' src={ ImgKidsPlaying } alt="Child Playing" />
                        <p>Let's play</p>
                        <img className='article-welcome-button-img' src={ ImgKidsPlaying } alt="Child Playing" />
                    </div>
                </div>
            </article>
        </Link>
    );

};

export default Patient;