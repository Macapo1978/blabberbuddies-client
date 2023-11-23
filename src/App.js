import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from "./pages/LoginForm/LoginForm";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from './pages/QuizPage/QuizPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path='/vocabulary' element={<HomePage/>}/>
        <Route path="/quiz/:idQuiz/:idUser/:idWord" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;