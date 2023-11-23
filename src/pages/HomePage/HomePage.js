import './HomePage.scss';
import Nav from "../../components/Nav/Nav";
import QuizList from "../../components/QuizList/QuizList";
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const getPatientDataFromLocalStorage = () => {
      try {
        const storedData = localStorage.getItem('patientData');
        if (storedData) {
          const jsonData = JSON.parse(storedData);
          setPatientData(jsonData);
console.log(jsonData, "estoy en home");  
        }
      } catch (error) {
        console.error('Error getting data from local sesion:', error);
      }
    };

    getPatientDataFromLocalStorage();
  }, []); 

  return (
    <main className="home">
      <Nav name={patientData?.namePatient} lastname={patientData?.lastNamePatient} />
      <QuizList userId={patientData?.userId} />
    </main>
  );
};

export default HomePage;
