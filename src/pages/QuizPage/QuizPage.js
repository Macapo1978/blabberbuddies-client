import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './QuizPage.scss';
import WordSelected from "../../components/WordSelected/WordSelected";
import WordsList from "../../components/WordsList/WordsList";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SubNav from "../../components/SubNav/SubNav";
import WordQuiz from "../../components/WordQuiz/WordQuiz";

const QuizPage = () => {
    const {idQuiz, idUser, idWord, play} = useParams();
    const [wordSelected, setWordSelected] = useState();

    useEffect(() => {
        if (idWord !== "0" && idWord !== undefined) {
            setWordSelected(idWord);
        }
    }, [idWord]);
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const fetchQuizData = async () => {
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
        fetchQuizData();
    }, [wordSelected]);


    return (
        <>
        <Nav/>
        <SubNav/>
        <main className="quiz">
            {play === '0' ? (
                <>
                {wordSelected && (
                <WordSelected wordId={wordSelected} />
                )}
                {wordList.length > 0 && (
                <WordsList 
                    wordId={wordSelected}
                    wordList={wordList.map(item => item.word_id)} 
                    quizID={idQuiz}
                    userID={idUser}
                />
                )}
                </>
            ) : (
                <>
                {wordList && (
                    <WordQuiz wordList={wordList.map(item => item.word_id)}/>
                )}
                </>
            )}
        </main>
        <Footer/>
        </>
    )
};

export default QuizPage;