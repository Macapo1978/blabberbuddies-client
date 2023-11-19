import axios from "axios";
import { useEffect, useState } from 'react';
import './HomePage.scss';
import Nav from "../../components/Nav/Nav";
import QuizList from "../../components/QuizList/QuizList";

const HomePage = ({ idUser }) => {
    return <main className="home">
        <Nav userId={idUser}/>
        <QuizList userId={idUser}/>
    </main>

};

export default HomePage;