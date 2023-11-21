import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


const SpeechButton = ({ textToSpeak, buttonClasses }) => {
    const { speak } = useSpeechSynthesis();
    
    const handleSpeech = () => {
        speak({ text: textToSpeak });
    };
  
    return (
        <button onClick={handleSpeech} className={buttonClasses}>
            {textToSpeak}
        </button>
    );
  };

  export default SpeechButton;