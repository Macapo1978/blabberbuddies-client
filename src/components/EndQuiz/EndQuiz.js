import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EndQuiz.scss';

const EndQuiz = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate('/vocabulary');
        }, 8000);  

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <section className="end">
                <h2 className="end__h2">Good Job!!!</h2>
                <h3 className="end__h3 ">Keep it up and keep learning.</h3>
        </section>
    );
};

export default EndQuiz;

