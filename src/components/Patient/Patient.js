import './Patient.scss';
import { Link } from 'react-router-dom';
import ImgLanguage from '../../assets/images/child-speaking.svg';
import ImgKidsPlaying from '../../assets/images/kids-playing.svg';

const Patient = ({patientId, userId, namePatient, lastNamePatient, native_language_id, language}) => {

    const storeDataInLocalStorage = (data) => {
        try{
            const jsonData = JSON.stringify(data);
            localStorage.setItem('patientData', jsonData);
        } catch(error){
            console.log("Error storing data patient.", error);
        }
      };

      const handleClick = () => {
        storeDataInLocalStorage({ patientId, userId, namePatient, lastNamePatient, native_language_id, language });
      };

    return(
        
            <article className="article">
                <div className="article-language">
                    <img src={ ImgLanguage } alt="Child Speaking" />
                    <p className="article-language-text">Speak: { language }</p>
                </div>
                <div className="article-welcome">
                    <h2 className="article-welcome-text">Welcome</h2>
                    <h4 className="article-welcome-name">{namePatient} {lastNamePatient}</h4>
                    <div className="article-welcome-button">
                        <Link to={`/vocabulary`} onClick={handleClick}>
                        <div className='article-welcome-button-ctn'>
                            <img className='article-welcome-button-ctn-img' src={ ImgKidsPlaying } alt="Child Playing" />
                            <p>Let's play</p>
                            <img className='article-welcome-button-ctn-img' src={ ImgKidsPlaying } alt="Child Playing" />
                        </div>
                        </Link>
                    </div>
                </div>
            </article>
       
    );

};

export default Patient;