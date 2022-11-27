import { Link } from "react-router-dom";
import faceImg from "./face.svg"
import './Home.css';

export default function Home() {
    return (
        <div className="app">
            <div className="container">
                <header className="app-header">
                    <h1>Dad Jokes 🎅</h1>
                    <p>❄️ Christmas Edition ❄️</p>
                    <p>An indescribably cheesy joke typically (but not necessarily) made by a father to his children.</p>
                </header>
                <img src={faceImg} alt='dad jokes head back laughing' id='face'></img>
                <p id='tagline'>5 jokes a day, keep your dad at bay.</p>
                <div id='instructions'>
                    <p>Spelling matters to a certain extent.</p>
                    <p>E.g.: "What do you call a cute door?".</p>
                    <p>Accepted answers are:</p>
                    <p>"adorable", "a-door-able", "adoorable".</p>
                </div>
                <Link to='/jokes'>
                    <button id='start-btn'>Start</button>
                </Link>
            </div>
        </div >
    );
}
