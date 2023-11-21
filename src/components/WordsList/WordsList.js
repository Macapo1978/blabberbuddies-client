import "./WordsList.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import WordSelected from "../WordSelected/WordSelected";

const WordsList = ({wordId, wordList, quizID, userID}) => {
    const [wordsData, setWordsData] = useState([]);

    useEffect(() => {
        const fetchWordsData = async () => {
            try{
                const promises = wordList.map ( async(id) => {
                    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${id}`);
                    return response.data;
                });
                const wordsDataArray = await Promise.all(promises);

                setWordsData(wordsDataArray);

            } catch(error){
                console.log("Error fetching data list.", error)
            }
        }
        if (wordId !== undefined && wordList !== undefined) {
            fetchWordsData();
        }
    }, [wordId, wordList]);

    return (
        <section className="wordlist">
            {wordsData.map((element) => (
        <Link
          to={`/quiz/${quizID}/${userID}/${element.id}`}
          key={element.id}
        >
          <button   
            className={`wordlist__button ${element.id == wordId ? 'wordlist__button--selected':''}`} 
            key={element.id} >
                {element.word}
          </button>
        </Link>
      ))}
        </section>
    );

};

export default WordsList;