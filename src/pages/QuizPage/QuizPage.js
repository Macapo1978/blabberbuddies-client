import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './QuizPage.scss';
import WordSelected from "../../components/WordSelected/WordSelected";
import WordsList from "../../components/WordsList/WordsList";
import Nav from "../../components/Nav/Nav";

const QuizPage = () => {
    const {idQuiz, idUser, idWord} = useParams();
    const [wordSelected, setWordSelected] = useState();
    
    useEffect(() => {
        if (idWord !== "0" && idWord !== undefined) {
            console.log(idWord, "estoy en quiz page id word")            
            setWordSelected(idWord);
        }
    }, [idWord]);
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchQuizData = async (idQuiz) => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/quizzes/${idQuiz}`);
                const data = response.data;
                if (data.length !== 0){
                    if (data[0].words && data[0].words.length !== 0){
                        setWordList(data[0].words);
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
        <>
        <Nav/>
        <main className="quiz">
            {wordList.length > 0 && (
            <WordsList 
                wordId={wordSelected}
                wordList={wordList.map(item => item.word_id)} 
                quizID={idQuiz}
                userID={idUser}
            />
            )}
            {wordSelected && (
            <WordSelected wordId={wordSelected} />
            )}
        </main>
        </>
    )
};

export default QuizPage;