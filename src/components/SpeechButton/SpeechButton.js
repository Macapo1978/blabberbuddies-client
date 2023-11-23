import React from 'react';
import { SayButton } from 'react-say';

const SpeechButton = ({ textToSpeak, buttonClasses }) => {
  const handleSpeech = () => {
    console.log("Estoy aquí");
    
  };

  return (
    <div className={buttonClasses}>
        <SayButton onClick={handleSpeech} text={textToSpeak}>
             {textToSpeak}
        </SayButton>
       
    </div>
   
  );
};
