import "./WordsList.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const WordsList = ({wordId, wordList}) => {
    const [wordsData, setWordsData] = useState([]);
console.log(wordId, wordList, " line 7 wordlist");

    useEffect(() => {
        const fetchWordsData = async () => {
            try{
                const filteredWordList = wordList.filter((id) => id !== wordId);

                const promises = filteredWordList.map ( async(id) => {
                    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/words/${id}`);
                    return response.data;
                });
                const wordsDataArray = await Promise.all(promises);
                setWordsData(wordsDataArray);

            } catch(error){
                console.log("Error fetching data list.", error)
            }
        }
        fetchWordsData();
    }, []);

    return (
        <section className="wordlist">
            {wordsData.map((element) => (
                    <Link
                        to={{ pathname: '/word', state: { wordId: element.id } }}
                        key={element.id}
                      >
                        <button className="wordlist__button">
                            {element.word}
                        </button>
                    </Link>
                     ) )
            }
        </section>
    );

};

export default WordsList;