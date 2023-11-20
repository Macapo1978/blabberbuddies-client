import "./WordSelected.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TranslateWord from '../TranslateWord/TranslateWord';
import ImagesWord from '../ImagesWord/ImagesWord';

const WordSelected = ({wordId}) => {
    const [dataWord, setDataWord] = useState({});
    const [dataWordId, setDataWordId] = useState(wordId)

    useEffect(() => {
        const fetchWord = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${wordId}`);
                const data = response.data;
                if (data){
                    setDataWord(data);
                }
            }catch(error){
                console.log("Error fetching data Word.")
            }
        }

        fetchWord();

    }, [dataWordId]);

    return (
        <section className="word">
            
            <article className="word__card">
                <button className="word__card-button">
                    {dataWord.word}
                </button>
                <button className="word__card-button word__card-button--secondary">
                    {dataWord  && (     
                            
                        <TranslateWord 
                            wordTranslate={dataWord.word}
                            originLanguage={dataWord.language_description}
                            destinLanguage={"es"} // aca tengo que pasar el lenguaje nativo del usuario
                        />
                    )}
                </button>
            </article>
            <section className="word__image">
            {dataWord  && (                
                <ImagesWord wordSearch={dataWord.word}/>
            )} 
            </section>
        </section>

    );
};

export default WordSelected;