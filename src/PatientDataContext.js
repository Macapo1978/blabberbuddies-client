import React, { createContext, useContext, useState } from 'react';

const PatientDataContext = createContext();

export const PatientDataProvider = ({ children }) => {
  const [patientData, setPatientData] = useState(null);

  const updatePatientData = (newData) => {
    setPatientData(newData);
    localStorage.setItem('patientData', JSON.stringify(newData));
  };

  return (
    <PatientDataContext.Provider value={{ patientData, updatePatientData }}>
      {children}
    </PatientDataContext.Provider>
  );
};

export const usePatientData = () => {
  const context = useContext(PatientDataContext);
  if (!context) {
    throw new Error('usePatientData must be used within a PatientDataProvider');
  }
  return context;
};
