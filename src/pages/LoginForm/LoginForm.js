import { useEffect, useState } from "react";
import axios from "axios";
import './LoginForm.scss';
import Patient from '../../components/Patient/Patient';
import ImgRight from '../../assets/images/logo_right.png';
import ImgLeft from '../../assets/images/logo_left.png';
import ImgSearch from '../../assets/images/search-icon.svg';

const LoginForm = () => {
  const [patientsData, setPatientsData] = useState([]);
  const [stringSearch, setStringSearch] = useState('');

  useEffect(() => {
    const fetchAllPatients = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/patients`);
            const data = response.data;
            setPatientsData(data);
        }catch(error){
            console.log("Error fetching data patients.", error);
        }
    };
    fetchAllPatients();
  }, []);

  const handleSearch = async () => {
    try {
      let apiUrl;

    if (stringSearch) {
      const encodedSearchString = encodeURIComponent(stringSearch);
      apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/patients/searchbyname/${encodedSearchString}`;
    } else {
      apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/patients`;
    }

    const response = await axios(apiUrl);
      const data = response.data;
      setPatientsData(data);

    } catch (error) {
        console.log("Error fetching data patients.", error);
    }
  };

  
  return (
    <main className='loginForm'>
      <section className="loginForm__hero">
          <div className="loginForm__hero-left">
            <img className="loginForm__hero-left-img" src={ImgLeft} alt="Girl Icon"></img>
          </div>
          <div className="loginForm__hero-middle">
            <h1 className="loginForm-title">Hello Kids!</h1>
            <h2 className="loginForm-subtitle">Let's play and learn!</h2>
          </div>
          <div className="loginForm__hero-right">
            <img className="loginForm__hero-right-img" src={ImgRight} alt="Boy Icon"></img>
          </div>
      </section>
      <section className="loginForm__search">
          
          <input className="loginForm__search-input"
            type="text"
            placeholder="Patient's name or last name"
            value={stringSearch}  
            onChange={(e) => setStringSearch(e.target.value)}
          />
          <button onClick={handleSearch} className="loginForm__search-button" >
          <img src={ImgSearch} className="loginForm__search-button-img" alt="Search Icon"></img>
            Search
          </button>

      </section>
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
