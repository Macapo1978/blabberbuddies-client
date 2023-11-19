import "./WordsList.scss";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const WordsList = ({wordId, wordList}) => {
console.log(wordId, wordList);
    return (
        <section>
            Words list: {wordList}
            <p>Word selected: {wordId}</p>
        </section>

    );

};

export default WordsList;