import "./WordSelected.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TranslateWord from '../TranslateWord/TranslateWord';
import ImagesWord from '../ImagesWord/ImagesWord';
import SpeechButton from '../SpeechButton/SpeechButton'; 


const WordSelected = ({wordId}) => {
    const [dataWord, setDataWord] = useState({});
    const [translatedText, setTranslatedText] = useState();

    useEffect(() => {
        const fetchWord = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${wordId}`);
                const data = response.data;
                if (data){
                    setDataWord(data);

                    const translationResponse  = await axios
                        .post(`${process.env.REACT_APP_BACKEND_URL}/api/tranlateText`,
                            {
                                text: data.word,
                                originLanguage: data.language_description,
                                translateLanguage: "es" //aca tengo que poner el language del user
                            }
                        );
                    const translationData = translationResponse.data;
                    if (translationData) {
                        setTranslatedText(translationData.translation);
                    }

                }
            }catch(error){
                console.log("Error fetching data Word.")
            }
        }

        fetchWord();

    }, [wordId]);


    return (

        <section className="word">
            
            <section className="word__image">
            {dataWord  && (                
                <ImagesWord 
                    wordSearch={dataWord.word}
                    category={dataWord.categories_description}    
                />
            )} 
            </section>
            <article className="word__card">
                <SpeechButton
                    textToSpeak={dataWord.word}
                    buttonClasses="word__card-button"
                />
                {translatedText  && (
                    <SpeechButton
                        textToSpeak={translatedText}
                        buttonClasses="word__card-button word__card-button--secondary"
                    />)}
            </article>
        </section>

    );
};

export default WordSelected;