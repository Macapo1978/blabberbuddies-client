import "./SubNav.scss";
import categories from '../../assets/images/categories_icon.png';
import imgWordActive from '../../assets/images/word-collection-icon.svg';
import quiz from '../../assets/images/quiz-icon.svg';
import { usePatientData } from "../../PatientDataContext";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const SubNav = () => {
    const quizName = sessionStorage.getItem('quizName');
    const quizID = sessionStorage.getItem('quizID');
    const { patientData } = usePatientData();
    const userID = patientData.userId;
    const location = useLocation();
    const [learningText, setLearningText] = useState("You're learning:");

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        const lastNumber = pathParts[pathParts.length - 1];

        if (lastNumber === '1') {
            setLearningText("You're playing with:");
        } else if (lastNumber === '0') {
            setLearningText("You're learning:");
        }
    }, [location.pathname]);


    return (
        <nav className="subnav">
            <Link to="/vocabulary">
                <section className="subnav__option subnav__categories">
                    <img src={categories} alt="Categories icon" className='subnav__option__img' />
                    Word Collection
                </section>
            </Link>
            <Link to={`/quiz/${quizID}/${userID}/0/1`}>
                <section className={"subnav__option subnav__quiz"}>
                    <img src={quiz} alt="Quiz icon" className='subnav__option__img'/>
                    Quiz
                </section>
            </Link>
            <section className="subnav__option subnav__active">
                <img src={imgWordActive} alt="Word Active Collection" className="subnav__option__img"></img>
                {learningText} {quizName}
            </section>
        </nav>
    );
};

export default SubNav;