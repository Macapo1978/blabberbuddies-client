import axios from "axios";
import { useEffect, useState } from 'react';
import './TranslateWord.scss';

const TranslateWord = ({wordTranslate, originLanguage, destinLanguage}) => {
    const [translatedWord, setTranslatedWord] = useState();
    

    useEffect(() => {
        const fetchTranslate = async () => {
            try{
                const {data} = await axios
                    .post(`${process.env.REACT_APP_BACKEND_URL}/api/tranlateText`,
                    {
                        text: wordTranslate,
                        originLanguage: originLanguage,
                        translateLanguage: destinLanguage
                    }
                    );
                if (data){
                    setTranslatedWord(data.translation);
                }
            }catch(error){
                console.log("Error fetching data translate.")
            }
        }
        if (wordTranslate && originLanguage && destinLanguage){
            fetchTranslate();
        }
    }, [wordTranslate, originLanguage, destinLanguage]);

    return(
        <>
            {translatedWord}
        </>
    );

};

export default TranslateWord;