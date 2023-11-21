import "./WordSelected.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import TranslateWord from '../TranslateWord/TranslateWord';
import ImagesWord from '../ImagesWord/ImagesWord';

const WordSelected = ({wordId}) => {
    const [dataWord, setDataWord] = useState({});
console.log(wordId, "estoy en linea 10 de wordselected este es el id de word")
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
        </section>

    );
};

export default WordSelected;