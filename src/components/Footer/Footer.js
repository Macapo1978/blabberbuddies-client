import './Footer.scss';
import imgFooter_1 from '../../assets/images/footer_1.png'
import imgFooter_2 from '../../assets/images/footer_2.png'
import imgFooter_3 from '../../assets/images/footer_3.png'
import imgFooter_4 from '../../assets/images/footer_4.png'

const Footer = () => {

    return (
        <footer className='footer'>
            <img className='footer__img' src={imgFooter_1} alt="Footer image 1"/>
            <img className='footer__img' src={imgFooter_2} alt="Footer image 2"/>
            <img className='footer__img' src={imgFooter_3} alt="Footer image 3"/>
            <img className='footer__img' src={imgFooter_4} alt="Footer image 4"/>
        </footer>
    );
};

export default Footer;
