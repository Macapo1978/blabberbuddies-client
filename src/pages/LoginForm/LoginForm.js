import { useEffect, useState } from "react";
import axios from "axios";
import './LoginForm.scss';
import Patient from '../../components/Patient/Patient';

const LoginForm = () => {
  const [patientsData, setPatientsData] = useState([]);

  useEffect(() => {
    const fetchAllPatients = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/patients`);
            const data = response.data;
            setPatientsData(data);
console.log(data);
        }catch(error){
            console.log("Error fetching data patients.", error);
        }
    };
    fetchAllPatients();
  }, []);
  
  return (
    <main className='loginForm'>
      <h3 className="loginForm-title">Hello Kids!Let's play and learn!</h3>
      <div className="loginForm-list">
          {patientsData.map(patient => 
              <Patient 
                  key={patient.id}
                  patientId = {patient.id}
                  userId={patient.user_id}
                  namePatient = {patient.name}
                  lastNamePatient = {patient.last_name}
                  native_language_id= {patient.native_language_id}
                  language= {patient.description}
              />
          )}
      </div>
    </main>
  );
};

export default LoginForm;
