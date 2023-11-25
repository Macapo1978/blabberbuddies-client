import "./WordQuiz.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ImagesWord   from '../ImagesWord/ImagesWord';
import SpeechButton from '../SpeechButton/SpeechButton'; 

const WordQuiz = ({wordList}) => {
    const [wordsData, setWordsData] = useState([]);
    const [imagesData, setImagesData] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hiddenIndices, setHiddenIndices] = useState([]);

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
console.log(allData, "esto es lo que hay en imagesData")                

            } catch(error){
                console.log("Error fetching data list.", error)
            }
        }
        if (wordList !== undefined) {
            fetchWordsData();
        }
    }, [wordList]);

    const handleSpeechButtonClick = (wordId, index) => {
        if (imagesData[currentImageIndex]?.id === wordId) {
          setCurrentImageIndex(currentImageIndex + 1);
          setHiddenIndices((prevIndices) => [...prevIndices, index]);
        }
        // Puedes realizar otras acciones según tus necesidades
      };

    return (
        <section className="wordquiz">
           
            <section className="wordquiz__images">
                {imagesData.slice(currentImageIndex, currentImageIndex + 1).map((element) => (
                    <ImagesWord 
                    key={element.id}
                    wordSearch={element.word}
                    imgPerPage={4}
                />
                ))}
                
            </section>
            <section className="wordquiz__words">
                {wordsData.map((element, index) => (
                    !hiddenIndices.includes(index) && (
                        <section className="wordquiz__words__ctn">
                            <div className="wordquiz__words__ctn-text" key={index} onClick={() => handleSpeechButtonClick(element.id, index)}>
                                <p>{element?.word?.toUpperCase()}</p>
                            </div>
                            <SpeechButton
                                key={index}
                                textToSpeak={element.word}
                            />
                        </section>
                    )
                ))}

            </section>
        </section>
    );

};

export default WordQuiz;