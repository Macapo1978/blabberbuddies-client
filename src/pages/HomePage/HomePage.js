import './HomePage.scss';
import Nav from "../../components/Nav/Nav";
import QuizList from "../../components/QuizList/QuizList";
import React, { useEffect, useState } from 'react';
import { usePatientData } from '../../PatientDataContext';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const { patientData, updatePatientData } = usePatientData();

  useEffect(() => {
    const getPatientDataFromLocalStorage = () => {
      try {
        const storedData = localStorage.getItem('patientData');
        if (storedData) {
          const jsonData = JSON.parse(storedData);
          updatePatientData(jsonData);
        }
      } catch (error) {
        console.error('Error getting data from local sesion:', error);
      }
    };

    getPatientDataFromLocalStorage();
  }, []); 

  return (
    <div className='ctn'>
      <Nav/>
      <main className="ctn__home">
        <QuizList userId={patientData?.userId} />
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
