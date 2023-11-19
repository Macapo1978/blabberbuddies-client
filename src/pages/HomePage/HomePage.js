import axios from "axios";
import { useEffect, useState } from 'react';
import './HomePage.scss';
import Nav from "../../components/Nav/Nav";

const HomePage = ({ idUser }) => {
    return <main className="home">
        <Nav userId={idUser}/>

    </main>

};

export default HomePage;