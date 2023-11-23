import "./Nav.scss";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo_transparent.png'
import ImgKidsAvatar from '../../assets/images/kidsNav.png'

const Nav = ({name, lastname}) => {
console.log("nombre y apellido ", name, lastname)   

    return (
        <nav className="nav">
            <Link to="/">
                <section className="nav__logo">
                    <img src={logo} alt="Blabber Buddies logo" className='nav__logo-img' />
                    Blabber Buddies
                </section>
            </Link>
            <div className="nav__ctn">
                <img className="nav__ctn-img" src={ImgKidsAvatar}></img>
                <p className="nav__ctn-user">Hello {name} {lastname}</p>
            </div>
        </nav>
    );
};

export default Nav;
