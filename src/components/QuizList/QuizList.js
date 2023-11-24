import "./QuizList.scss";
import QuizCard from "../QuizCard/QuizCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ImgSearch from '../../assets/images/search-icon.svg';

const QuizList = ({userId}) => {
    const [quizData, setQuizData] = useState([]);
    const [stringSearch, setStringSearch] = useState('');

    useEffect(() => {
        const fetchAllQuizzes = async () => {
            try {
                const {data} = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/quizzes`);
                setQuizData(data);

            }catch(error){
                console.log("Error fetching all data quizzes.");
            }
        };
        fetchAllQuizzes();
    }, []);

    const handleSearch = async () => {
        try {
          let apiUrl;
    
        if (stringSearch) {
          const encodedSearchString = encodeURIComponent(stringSearch);
          apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/quizzes/searchbyname/${encodedSearchString}`;
        } else {
          apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/quizzes`;
        }
    
        const response = await axios(apiUrl);
          const data = response.data;
          setQuizData(data);
    
        } catch (error) {
            console.log("Error fetching data quizzes.", error);
        }
      };

    return (
        <main className="quizzes">
            <section className="quizzes__subnav">
                <h3 className="quizzes__subnav-title">Let's learn new words!</h3>
                <section className="quizzes__subnav__search">
                    <input className="quizzes__subnav__search-input"
                        type="text"
                        placeholder="Word Collection"
                        value={stringSearch}  
                        onChange={(e) => setStringSearch(e.target.value)}
                    />
                    <button onClick={handleSearch} className="quizzes__subnav__search-button" >
                        <img src={ImgSearch} className="quizzes__subnav__search-button-img" alt="Search Icon"></img>
                        Search
                    </button>
                </section>
            </section>
            <div className="quizzes-list">
                {quizData.map(quiz => 
                    <QuizCard 
                        key={quiz.id}
                        dataQuiz={quiz}
                        userId={userId}
                    />
                )}
            </div>
        </main>
    );
};

export default QuizList;