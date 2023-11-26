import "./SubNav.scss";
import categories from '../../assets/images/categories_icon.png';
import { Link } from "react-router-dom";
import imgWordActive from '../../assets/images/word-collection-icon.svg';
import quiz from '../../assets/images/quiz-icon.svg';
import { usePatientData } from "../../PatientDataContext";

const SubNav = () => {
    const quizName = sessionStorage.getItem('quizName');
    const quizID = sessionStorage.getItem('quizID');
    const { patientData } = usePatientData();
    const userID = patientData.userId;

    return (
        <nav className="subnav">
            <Link to="/vocabulary">
                <section className="subnav__option subnav__categories">
                    <img src={categories} alt="Categories icon" className='subnav__option__img' />
                    Word Collection
                </section>
            </Link>
            <Link to={`/quiz/${quizID}/${userID}/0/1`}>
                <section className="subnav__option subnav__quiz">
                    <img src={quiz} alt="Quiz icon" className='subnav__option__img'/>
                    Quiz
                </section>
            </Link>
            <section className="subnav__option subnav__active">
                <img src={imgWordActive} alt="Word Active Collection" className="subnav__option__img"></img>
                You're learning: {quizName}
            </section>
        </nav>
    );
};

export default SubNav;