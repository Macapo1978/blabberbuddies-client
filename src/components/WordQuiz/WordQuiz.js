import "./WordQuiz.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ImagesWord from '../ImagesWord/ImagesWord';
import SpeechButton from '../SpeechButton/SpeechButton'; 


const WordQuiz = ({wordList}) => {
    const [wordsData, setWordsData] = useState([]);
    const [imagesData, setImagesData] = useState([]);

    useEffect(() => {
        const fetchWordsData = async () => {
            try{
                const promises = wordList.map ( async(id) => {
                    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${id}`);
                    return response.data;
                });
                const allData = await Promise.all(promises);

                const randomOrder = Array.from({ length: allData.length }, (_, index) => index);
                randomOrder.sort(() => Math.random() - 0.5);
                
                const randomWordsData = randomOrder.map((index) => allData[index]);
                setWordsData(randomWordsData);
                setImagesData(allData);

            } catch(error){
                console.log("Error fetching data list.", error)
            }
        }
        if (wordList !== undefined) {
            fetchWordsData();
        }
    }, [wordList]);

    return (
        <section className="wordquiz">
            <section className="wordquiz__images">
                {imagesData.map((element) => (
                    <ImagesWord 
                    wordSearch={element.word}
                    imgPerPage={1}
                />
                ))}

            </section>
            <section className="wordquiz__words">
                {wordsData.map((element) => (
                    <SpeechButton
                    textToSpeak={element.word}
                    buttonClasses="wordquiz__words-button"
                    />
                ))}

            </section>
        </section>
    );

};

export default WordQuiz;