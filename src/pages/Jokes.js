import { correctResponseOptions, incorrectResponseOptions } from "../utils/Responses";
import { date } from "../utils/Date";
import { jokes } from "../utils/JokesQA";
import { useState, useRef, useEffect } from "react";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import EndComponent from "../components/End";
import "./Jokes.css"

export default function Jokes() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [currentJoke, setCurrentJoke] = useState(0);
    const [score, setScore] = useState(0);
    const [end, setEnd] = useState(false);

    const botMessage = useRef();
    const humanMessage = useRef();
    const commentMessage = useRef();
    const input = useRef();

    const jokeLimit = 5;
    const randomiseResponse = Math.floor(Math.random() * incorrectResponseOptions.length)


    // Day-Set Logic
    const startDate = new Date(2022, 10, 31);
    const msOffset = Date.now() - startDate;
    const dayOffset = msOffset / 1000 / 60 / 60 / 24;

    let set = [];
    let targetSet = [];
    for (let i = 0; i < jokes.length; i += 5) {
        set.push(jokes.slice(i, i + jokeLimit))
        targetSet = set[Math.floor(dayOffset)]
    }

    if (!targetSet) {
        jokes.sort(() => Math.random() - 0.5)
        targetSet = jokes.slice(0, jokeLimit)
    }

    function handleEnterKey(e) {
        if (e.code === "Enter") {
            handleInput()
        }
    }

    const handleInput = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

        let inputRef = input.current;
        let getHumanMessage = humanMessage.current;
        let getBotMessage = botMessage.current;
        let getCommentMessage = commentMessage.current;

        if (inputRef.value === "") {
            inputRef.value = "I haven't the foggiest"
        }

        let correctAnswer = new RegExp(targetSet[currentJoke].answer);
        let inputValue = document.querySelector("#input").value;

        if (correctAnswer.test(inputValue.toLowerCase())) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.setAttribute("id", "bot");
                getBotMessage.innerText = correctResponseOptions[randomiseResponse];
                inputRef.value = "";
            }, 1000);
            setTimeout(() => {
                getCommentMessage.setAttribute("id", "bot");
                getCommentMessage.innerText = targetSet[currentJoke].comment;
            }, 2000);
            setTimeout(() => {
                setScore(score + 1);
            }, 2000)
        } else {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.setAttribute("id", "bot");
                getBotMessage.innerText = incorrectResponseOptions[randomiseResponse];
                inputRef.value = "";
            }, 1000);
            setTimeout(() => {
                getCommentMessage.setAttribute("id", "bot");
                getCommentMessage.innerText = targetSet[currentJoke].comment;
            }, 2000);
        }

        getHumanMessage.setAttribute("id", "human")
        getHumanMessage.innerText = inputRef.value;

        setTimeout(() => {
            getHumanMessage.setAttribute("id", "");
            getHumanMessage.innerText = "";
            getBotMessage.setAttribute("id", "");
            getBotMessage.innerText = "";
            getCommentMessage.setAttribute("id", "");
            getCommentMessage.innerText = "";
            const nextJoke = currentJoke + 1;
            if (nextJoke < targetSet.length) {
                setCurrentJoke(nextJoke);
            } else {
                setEnd(true);
            }
        }, 5000);
    };

    return (
        <div className="quiz">
            <HeaderComponent score={score} />
            <div id="display">
                <p id='date'>{date}</p>
                <p>Joke {currentJoke + 1} of {targetSet.length}</p>
            </div>
            {end ? (
                <>
                    <div className="top">
                        <h1>The End</h1>
                        <h3>You scored: {score} out of {targetSet.length}!</h3>
                        <p>Come back tomorrow for more funnies 🤭</p>
                    </div>
                    <EndComponent />
                    <FooterComponent />
                </>
            ) : (
                <>
                    <div className="content">
                        <div className="message" id="question">
                            {targetSet[currentJoke].question}
                        </div>
                        <div
                            className="message"
                            ref={humanMessage}
                        >
                        </div>
                        <div
                            className="message"
                            ref={botMessage}
                        >
                        </div>
                        <div
                            className="message"
                            ref={commentMessage}
                        >
                        </div>
                    </div>
                    <div className='user-submit'>
                        <input
                            type="text"
                            id="input"
                            placeholder="Enter your answer here"
                            ref={input}
                            onKeyDown={handleEnterKey}
                        />
                        <button onClick={handleInput}>Send</button>
                    </div>
                    <p id="reminder">Give your dad a minute to type the next joke</p>
                    <FooterComponent />
                </>
            )}
        </div>
    );
}