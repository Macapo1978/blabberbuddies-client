import "./QuizList.scss";
import QuizCard from "../QuizCard/QuizCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { async } from "q";

const QuizList = ({userId}) => {
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
        const fetchAllQuizzes = async () => {
            try {
                const {data} = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/quizzes`);
                setQuizData(data);

            }catch(error){
                console.log("Error fetching all data quizzes.");
            }
        };
        fetchAllQuizzes();
    }, []);

    return (
        <section className="quizzes">
            <h3 className="quizzes-title">Let's learn new words!</h3>
            <div className="quizzes-list">
                {quizData.map(quiz => 
                    <QuizCard 
                        key={quiz.id}
                        dataQuiz={quiz}
                        userId={userId}
                    />
                )}
            </div>
        </section>
    );
};

export default QuizList;