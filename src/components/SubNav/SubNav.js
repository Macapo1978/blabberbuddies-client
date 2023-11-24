import "./SubNav.scss";
import categories from '../../assets/images/categories_icon.png';
import { Link } from "react-router-dom";

const SubNav = () => {

    return (
        <nav className="subnav">
            <Link to="/vocabulary">
                <section className="subnav__categories">
                    <img src={categories} alt="Categories icon" className='subnav__categories-img' />
                    Categories
                </section>
            </Link>
        </nav>
    );
};

export default SubNav;