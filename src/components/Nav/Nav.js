import "./Nav.scss";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_transparent.png'
import ImgKidsAvatar from '../../assets/images/kidsNav.png'
import { usePatientData } from "../../PatientDataContext";

const Nav = () => {
    const { patientData } = usePatientData();

    return (
        <nav className="nav">
            <Link to="/loginForm">
                <section className="nav__logo">
                    <img src={logo} alt="Blabber Buddies logo" className='nav__logo-img' />
                    Blabber Buddies
                </section>
            </Link>
            <div className="nav__ctn">
                <img className="nav__ctn-img" src={ImgKidsAvatar}></img>
                <p className="nav__ctn-user">Hello {patientData?.namePatient} {patientData?.lastNamePatient}</p>
            </div>
        </nav>
    );
};

export default Nav;
