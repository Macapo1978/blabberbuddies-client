import React from 'react';
import { SayButton } from 'react-say';
import './SpeechButton.scss';
import SoundIcon from '../../assets/images/sound_icon.svg';

const SpeechButton = ({ textToSpeak }) => {

  return (
    <div className="speech-button">
      <SayButton onClick={() => {}} text={textToSpeak}>
        <img className="speech-button-icon" src={SoundIcon} alt="Sound Icon" />
      </SayButton>
    </div>
  );
  
};

export default SpeechButton;