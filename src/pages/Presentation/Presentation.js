import './Presentation.scss'
import imgFooter_1 from '../../assets/images/footer_1.png'
import imgFooter_2 from '../../assets/images/footer_2.png'
import imgFooter_3 from '../../assets/images/footer_3.png'
import imgFooter_4 from '../../assets/images/footer_4.png'
import imgPhoto from '../../assets/images/fotoPerfil.jpeg'
import imgLogo from '../../assets/images/logo-presentation.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Presentation = () => {
    return(
        <main>
            <Link to="/loginForm">
            <nav className='images-row'>
                <img className='images-row__img' src={imgFooter_1} alt="Nav Eyes"/>
                <img className='images-row__img' src={imgFooter_2} alt="Nav Mouth"/>
                <img className='images-row__img' src={imgFooter_3} alt="Nav Square"/>
                <img className='images-row__img' src={imgFooter_4} alt="Nav Square"/>
            </nav>
            </Link>
            <div className="content">
                <section className="content__photo">
                    <img className='content__photo__img' src={imgPhoto} alt='Mariana Capo'></img>
                </section>
                <section className='content__text'>
                    <h1>Hello, I'm Mariana Capo!</h1>
                    <p>My name is Mariana Capo, and I recently moved to Montreal with my family.</p>

                    <p>I have a background in software engineering, and for the past 15 years, I've been dedicated to the development of web applications. I specialized in .NET development with relational databases.</p>

                    <p>Excitingly, I've recently relocated to Montreal, bringing with me a wealth of experience and a passion for creating software solutions.</p>

                    <p>Today, I'm thrilled to demonstrate one of the applications I developed during my Software engineering career at BrainStation. This application showcases my skills and the solutions I bring to the table.</p>
                </section>
            </div>
            <div className="content">
                <section className="content__photo">
                    <img className='content__photo__logo' src={imgLogo} alt='Blabber Buddies'></img>
                </section>
                <section className='content__text'>
                    <h1>Blabber Buddies: Bridging Language Gaps, Empowering Young Learners</h1>
                    <p>Blabber Buddies is an application designed to support children with cochlear implants in their therapy sessions, transforming learning into an engaging and enjoyable experience. Additionally, it serves for audiologists working with young patients from diverse linguistic backgrounds.</p>
                    <section className='content__text-features'>
                        <section className='content__text-features-desc'>
                            <h2>Key Features:</h2>
                            <ul>
                                <li>Interactive Speech Therapy</li>
                                <li>Multilingual Support</li>
                                <li>Vocabulary Expansion</li>
                                <li>Native Language Integration</li>
                            </ul>
                        </section>
                        <section className='content__text-features-work'>
                            <h2>How It Works:</h2>
                            <p><b>Image Associations: </b>Children are presented with images, and the app associates these images with corresponding English words.</p>
                            <p><b>Audio Pronunciation: </b>Blabber Buddies incorporates audio elements, allowing children to listen to the correct pronunciation of words.</p>
                            <p><b>Native Language Guidance: </b>For audiologists dealing with patients from diverse linguistic backgrounds, the app displays how the word is said and written in the child's native language, creating a comprehensive learning experience.</p>
                        </section>
                    </section>
                </section>
            </div>
        </main>


    )


}; 

export default Presentation;