import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './QuizPage.scss';
import WordSelected from "../../components/WordSelected/WordSelected";
import WordsList from "../../components/WordsList/WordsList";

const QuizPage = () => {
    const {idQuiz, idUser} = useParams();
    const [quizData, setQuizData] = useState([]);
    const [wordSelected, setWordSelected] = useState();
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchQuizData = async (idQuiz) => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quizzes/${idQuiz}`);
                const data = response.data;
                if (data.length !== 0){
                    setQuizData(data);
                    if (data[0].words && data[0].words.length !== 0){
                        setWordList(data[0].words);
                        setQuizData(data);
                        if (!wordSelected){
                            setWordSelected(data[0].words[0].word_id);
                        }
                    }
                }
            }catch(error){
                console.log("Error fetching data quiz. Page Quiz.", error);
            }
        }
        fetchQuizData(idQuiz);
    }, [wordSelected]);


    return (

        <main className="quiz">
            <section>
            {wordSelected && (
                <WordSelected wordId={wordSelected} />
                )}
            </section>
            <section>
                {wordList.length > 0 && (
                <WordsList 
                    wordId={wordSelected}
                    wordList={wordList.map(item => item.word_id)} 
                />
                )}
            </section>
        </main>
    )
};

export default QuizPage;