import "./WordSelected.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TranslateWord from '../TranslateWord/TranslateWord';
import ImagesWord from '../ImagesWord/ImagesWord';
import SpeechButton from '../SpeechButton/SpeechButton'; 


const WordSelected = ({wordId}) => {
    const [dataWord, setDataWord] = useState({});
    const [translatedText, setTranslatedText] = useState();
    const [translateLanguage, setTranslateLanguage] = useState();
    
    
    useEffect(() => {
        try{
            const patientData = localStorage.getItem('patientData');
            const patientObject = JSON.parse(patientData);
        
            if (patientObject) {
                const translateLanguage = patientObject.language.slice(0, 2).toLowerCase();
                console.log(translateLanguage);
                setTranslateLanguage(translateLanguage);
            } else {
                console.log("Error getting language patient.")
            }
        } catch(error){
            console.log("Error getting language user.", error)
        }


    }, [])

    useEffect(() => {
        const fetchWord = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${wordId}`);
                const data = response.data;
                if (data && translateLanguage){
                    setDataWord(data);

                    const translationResponse  = await axios
                        .post(`${process.env.REACT_APP_BACKEND_URL}/api/tranlateText`,
                            {
                                text: data.word,
                                originLanguage: data.language_description,
                                translateLanguage: translateLanguage
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
        if (translateLanguage){
            fetchWord();
        }

    }, [wordId, translateLanguage]);


    return (

        <section className="word">
            <section className="word__image">
            {dataWord  && (                
                <ImagesWord 
                    wordSearch={dataWord.word}
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