import React from 'react';
import { SayButton } from 'react-say';
import './SpeechButton.scss';
import SoundIcon from '../../assets/images/sound_icon.svg';

const SpeechButton = ({ textToSpeak, buttonClasses }) => {
  const handleSpeech = () => {
    console.log("Estoy aquí");
    
  };

  return (
    <div className={buttonClasses}>
        <SayButton onClick={handleSpeech} text={textToSpeak}>
             {textToSpeak?.toUpperCase()}
             <img className="word__card-img" src={SoundIcon} alt="Sound Icon"></img>
        </SayButton>
       
    </div>
   
  );
};

export default SpeechButton;