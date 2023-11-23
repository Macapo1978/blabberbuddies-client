import './HomePage.scss';
import Nav from "../../components/Nav/Nav";
import QuizList from "../../components/QuizList/QuizList";
import { useParams } from 'react-router-dom';

const HomePage = () => {
    const { idUser } = useParams();
    return <main className="home">
        <Nav userId={idUser}/>
        <QuizList userId={idUser}/>
    </main>

};

export default HomePage;