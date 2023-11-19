import "./Nav.scss"
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import logo from '../../assets/images/logo_transparent.png'


export const Nav = ({userId}) => {
    const [dataUser, setDataUser] = useState({});

    useEffect(() => {
        const fetchDataUser = async (userId) => {
            try {
                const response = await axios(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`);
                const userData = response.data;
                setDataUser(userData);

            } catch (error) {
                console.log("Error fetching data user.")
            }
        };
        if (userId) {
            fetchDataUser(userId);
        }
    }, [userId]);

    return (
        <nav className="nav">
            <Link to="/">
                <section className="nav__logo">
                    <img src={logo} alt="Blabber Buddies logo" className='nav__logo-img' />
                </section>
            </Link>
            <p className="nav__user">Hello {dataUser.user_name}</p>
        </nav>
    );
};

export default Nav;
