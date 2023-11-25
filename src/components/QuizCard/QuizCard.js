import "./QuizCard.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const QuizCard = ({dataQuiz, userId}) => {
    const [quizUser, setQuizUser] = useState({});
    const wordID = 0;
    useEffect(() => {
        const fetchQuizUser = async (userId, quizId) => {
            try{
                const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/quizzesUser`, {
                    user_id: userId,
                    quiz_id: quizId,
                  });

                if (data) {
                    setQuizUser(data);
                }
            }catch(error){
                console.log("Error fetching data quiz user.")
            }
        };

        fetchQuizUser(userId, dataQuiz.id);        
    }, []);

    const handleLinkClick = () => {
        sessionStorage.setItem('quizName', dataQuiz.name);
        sessionStorage.setItem('quizID', dataQuiz.id);
    };

    return(
        <Link to={`/quiz/${dataQuiz.id}/${userId}/${wordID}/0`} onClick={handleLinkClick}>
            <article className="card">
                <h3 className="card-text">{dataQuiz.name}</h3>
            </article>
        </Link>
        
    );
};

export default QuizCard;