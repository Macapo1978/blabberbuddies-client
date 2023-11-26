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
    const [message, setMessage] = useState("What's this?");
    const [endQuiz, setEndQuiz] = useState(false);
    const [pointQuiz, setPointQuiz] = useState(0);

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


    const handleSpeechButtonClick = (wordId, wordName, index) => {
        if (imagesData[currentImageIndex]?.id === wordId) {
            setCurrentImageIndex(currentImageIndex + 1);
            setHiddenIndices((prevIndices) => [...prevIndices, index]);
            setMessage("Good Job!!! Now, what's this?");
            if (currentImageIndex === imagesData.length - 1){
                setEndQuiz(true);
            }
            setPointQuiz(pointQuiz + 1);
        } else {
           setMessage(`Not "${wordName}", keep trying.`);
        }
      };

      return (
        <section className="wordquiz">
          {!endQuiz ? (
            <>
              <section className="wordquiz__message">
                <p>{message}</p>
              </section>
              <section className="wordquiz__images">
                {imagesData.slice(currentImageIndex, currentImageIndex + 1).map((element, index) => (
                  <ImagesWord 
                    key={index}
                    wordSearch={element.word}
                    imgPerPage={4}
                  />
                ))}
              </section>
              <section className="wordquiz__words">
                {wordsData.map((element, index) => (
                  !hiddenIndices.includes(index) && (
                    <section className="wordquiz__words__ctn" key={`word-${index}`}>
                      <div className="wordquiz__words__ctn-text" onClick={() => handleSpeechButtonClick(element.id, element.word, index)}>
                        <p>{element?.word?.toUpperCase()}</p>
                      </div>
                      <SpeechButton
                        key={`speech-button-${index}`}
                        textToSpeak={element.word}
                      />
                    </section>
                  )
                ))}
              </section>
            </>
          ) : (
            <section className="wordquiz__end animation">
                <h2 className="wordquiz__h2">Good Job!!!</h2>
                <h3 className="wordquiz__h3 ">Keep it up and keep learning.</h3>
            </section>
          )}
        </section>
      );
      

};

export default WordQuiz;