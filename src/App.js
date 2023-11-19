import './App.scss';
import axios from "axios";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginForm from "./pages/LoginForm/LoginForm";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from './pages/QuizPage/QuizPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [idUser, setIdUser] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      // ...

      // ver llamar al endpoint del user
      setIdUser(1);
      setLoggedIn(true);
      // ...
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loggedIn ? <HomePage idUser={idUser} /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/quiz/:idQuiz/:idUser" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;