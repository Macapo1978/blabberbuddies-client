import "./SubNav.scss";
import categories from '../../assets/images/categories_icon.png';
import { Link } from "react-router-dom";
import imgWordActive from '../../assets/images/word-collection-icon.svg';
import { usePatientData } from "../../PatientDataContext";

const SubNav = () => {
    const quizName = sessionStorage.getItem('quizName');
    const quizID = sessionStorage.getItem('quizID');
    const { patientData } = usePatientData();
    const userID = patientData.userId;

    return (
        <nav className="subnav">
            <Link to="/vocabulary">
                <section className="subnav__categories">
                    <img src={categories} alt="Categories icon" className='subnav__categories-img' />
                    Word Collection
                </section>
            </Link>
            <Link to={`/quiz/${quizID}/${userID}/0/1`}>
                Quiz
            </Link>
            <section className="subnav__active">
                <img src={imgWordActive} alt="Word Active Collection" className="subnav__active-img"></img>
                You're learning: {quizName}
            </section>
        </nav>
    );
};

export default SubNav;