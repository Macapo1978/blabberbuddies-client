import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from "./pages/LoginForm/LoginForm";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from './pages/QuizPage/QuizPage';
import { PatientDataProvider } from './PatientDataContext';

const App = () => {

  return (
    <BrowserRouter>
      <PatientDataProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path='/vocabulary' element={<HomePage/>}/>
            <Route path="/quiz/:idQuiz/:idUser/:idWord/:play" element={<QuizPage/>}/>
          </Routes>
        </div>
      </PatientDataProvider>
    </BrowserRouter>
  );
}

export default App;