import copyIcon from "../icons/copy.svg";
import shareIcon from "../icons/share.svg";
import { useState } from "react";
import './Components.css';

export default function EndComponent() {
    const [msg, setMsg] = useState("");

    function copyLink() {
        const copyBtn = document.querySelector("#copy-link");
        const shareBtn = document.querySelector("#share-link")
        const shareLink = {
            title: 'Dad Jokes',
            text: 'Can you beat me at dad jokes?',
            url: 'https://kcxgu.github.io/dad-jokes/'
        }
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(shareLink.url);
                setMsg("Copied!");
            } catch (err) {
                setMsg("Try copying manually");
            }
        });

        shareBtn.addEventListener('click', async () => {
            try {
                await navigator.share(shareLink);
                setMsg("Copied!");
            } catch (err) {
                setMsg("Try copying manually");
            }
        });
    }

    return (
        <div className="end">
            <div className="share">
                <div className="row">
                    <div id="text">
                        <p>Share with a friend</p>
                        <p>or better yet,</p>
                        <p>play against your dad!</p>
                        <p id="link">
                            www.kcxgu.github.io/dad-jokes
                        </p>
                    </div>
                    <div id="icons">
                        <button id="copy-link" onClick={copyLink}>
                            <img src={copyIcon} alt="copy link to dad jokes game"></img>
                        </button>
                        <button id="share-link" onClick={copyLink}>
                            <img src={shareIcon} alt="share link to dad jokes game"></img>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <p id="result">{msg}</p>
                </div>
            </div>
            <div className="external-forms">
                {/* <div className="link-row">
                    <p>
                        <a href="https://kcxgu.github.io/" target="_blank" rel="noopener noreferrer">
                            See my other projects
                        </a>
                    </p>
                </div> */}
                <div className="link-row">
                    <p>
                        <a href="https://forms.gle/fFa2VZmbfjjAb4RL9" target="_blank" rel="noopener noreferrer">
                            Submit a joke
                        </a>
                    </p>
                    <p>
                        <a href="https://forms.gle/tQEyfpbTCCf1Q1g8A" target="_blank" rel="noopener noreferrer">
                            Send feedback
                        </a>
                    </p>
                </div>
            </div>
        </div >
    );
}