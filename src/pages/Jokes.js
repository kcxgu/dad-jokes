import { date } from "../utils/Date";
import { jokes } from "../utils/JokesQA";
import { useState, useRef } from "react";
import HeaderComponent from "../components/Header";
import copyIcon from "../icons/copy.svg";
import "./Jokes.css"

export default function Jokes() {
    const [currentJoke, setCurrentJoke] = useState(0);
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(false);
    const [copied, setCopied] = useState("");

    const botmessage = useRef();
    const humanMessage = useRef();
    const input = useRef();

    const jokeLimit = 5;


    const handleInput = () => {
        const inputRef = input.current;
        let getHumanMessage = humanMessage.current;
        let getBotMessage = botmessage.current;

        let correctAnswer = new RegExp(jokes[currentJoke].answer);
        let inputValue = document.querySelector("#input").value;

        if (correctAnswer.test(inputValue.toLowerCase())) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.setAttribute("id", "message2");
                getBotMessage.innerText = "Correct!";
                inputRef.value = ""; // clear the input
            }, 1000);
            setTimeout(() => {
                setScore(score + 1);
            }, 1500)
        } else {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.setAttribute("id", "message2");
                getBotMessage.innerText = "Uh-oh! That's not quite right.";
                inputRef.value = ""; // clear the input
            }, 1000);

        }

        getHumanMessage.setAttribute("id", "message1")
        getHumanMessage.innerText = inputRef.value;

        setTimeout(() => {
            getHumanMessage.setAttribute("id", "");
            getBotMessage.innerText = "";
            getBotMessage.setAttribute("id", "");
            getHumanMessage.innerText = "";
            const nextJoke = currentJoke + 1;
            if (nextJoke < jokeLimit) {
                setCurrentJoke(nextJoke);
            } else {
                setEnd(true);
            }
        }, 2500);
    };

    function copyLink() {
        navigator.clipboard.writeText("www.kcxgu.github.io/dadjokes")
        setCopied('Copied!')
    }

    return (
        <div className="quiz">
            <HeaderComponent score={score} />
            <div id="display">
                <p id='date'>{date}</p>
                <p>Joke {currentJoke + 1} of {jokeLimit}</p>
            </div>
            {end ? (
                <div className="end">
                    <div className="top">
                        <h1>The End!</h1>
                        <p>Come back tomorrow for more funnies 🤭</p>
                    </div>
                    <div className="middle">
                        <p>Share with a friend to see who's cheesier.</p>
                        <p>Or better yet, play against your dad!</p>
                    </div>
                    <div className="share">
                        <div id="text">
                            <p>Share with a friend:</p>
                            <p id="link">
                                www.kcxgu.github.io/dadjokes
                            </p>
                        </div>
                        <div id="icon">
                            <button id="copy" onClick={copyLink}>
                                <img src={copyIcon} alt="copy link to dad jokes game"></img>
                            </button>
                            <div id="copied">
                                <p>{copied}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="content">
                        <div className="bot message" id="question">
                            {jokes[currentJoke].question}
                        </div>
                        <div
                            className="human message"
                            ref={humanMessage}
                        >
                        </div>
                        <div
                            className="bot message"
                            ref={botmessage}
                        >
                        </div>
                    </div>
                    <div className='user-submit'>
                        <input
                            type="text"
                            id="input"
                            placeholder="Enter your answer here"
                            ref={input} />
                        <button onClick={handleInput}>Send</button>
                    </div>
                </>
            )}
        </div>
    );
}