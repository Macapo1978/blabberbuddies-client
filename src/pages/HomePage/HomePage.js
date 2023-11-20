import axios from "axios";
import { useEffect, useState } from 'react';
import './HomePage.scss';
import QuizList from "../../components/QuizList/QuizList";

const HomePage = ({ idUser }) => {
    return <main className="home">
        <QuizList userId={idUser}/>
    </main>

};

export default HomePage;