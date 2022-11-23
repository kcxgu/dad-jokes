import './Home.css';

export default function Home() {
    return (
        <div className="app">
            <div className="container">
                <header className="app-header">
                    <h1>Dad Jokes 🎅</h1>
                    <p>An indescribably cheesy joke typically (but not necessarily) made by a father to his children.</p>
                </header>
                <img src='../face.svg' alt='dad jokes head back laughing' id='face'></img>
                <p id='text-q'>5 jokes a day, keep your dad at bay.</p>
                <a href='/jokes'>
                    <button id='start-btn'>Start</button>
                </a>
            </div>
        </div >
    );
}
