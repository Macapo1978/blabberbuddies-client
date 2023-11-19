import "./QuizCard.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const QuizCard = ({dataQuiz, userId}) => {
    const [quizUser, setQuizUser] = useState({});

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
console.log("largo de data", Object.keys(quizUser).length);
            }catch(error){
                console.log("Error fetching data quiz user.")
            }
        };

        fetchQuizUser(userId, dataQuiz.id);        
    }, []);

    return(
        <Link to={`/quiz/${dataQuiz.id}/${userId}`}>
            <article className="card">
                <h3 className="card_title">{dataQuiz.name}</h3>
                <button className={Object.keys(quizUser).length === 0 ? "card_button" : "card_button--practise"}>
                    { Object.keys(quizUser).length === 0 ? 'Learn':'Practise'}
                </button>
            </article>
        </Link>
    );
};

export default QuizCard;