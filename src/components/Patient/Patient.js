import './Patient.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ImgLanguage from '../../assets/images/child-speaking.svg';

const Patient = ({patientId, userId, namePatient, lastNamePatient, native_language_id, language}) => {

    return(
        <Link to={`/vocabulary/${userId}`}>
            <article className="article">
                <div className="article-language">
                    <img src={ ImgLanguage } alt="Child Speaking" />
                    <p className="article-language-text">Speak: { language }</p>
                </div>
                <div className="article-welcome">
                    <h3 className="article-welcome-text">Welcome</h3>
                    <h4 className="article-welcome-name">{namePatient} {lastNamePatient}</h4>
                    <button className="article-welcome-button">
                    Let's play
                    </button>
                </div>
            </article>
        </Link>
    );

};

export default Patient;