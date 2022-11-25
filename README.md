# Dad Jokes

Inspired by some memes that I saw on a cloudy Saturday morning, I wanted to exercise my React skills in creating a simple Dad Jokes game. 

## The premise

Each day there will be 5 jokes (in Q&A format) for the player to answer. There is no time limit on how long each player takes to answer.

Correct answer scores 1 cheese. Incorrect answer scores none. 

Spelling matters to an extent. For example, if the joke is "What do you call a cute door?". The answer can be any of the following: "adorable", "a-door-able", "adoorable".

## UX/UI -> Components

Settling on a chatbot/messaging approach, I spent about an hour drawing up some simple designs on Figma, from which, I extracted the following pages, components and utils:

App.js

Home.js

```
Jokes.js
    |
    |-- Header.jsx
    |-- Date.jsx (utils)
    |-- JokesQA.jsx (utils)
```

## Difficulties encountered

1. Ensuring the answer is checked against the exact answer to the question

Prior to utilising the "currentJoke" state, I used a loop to loop through each of the 5 array objects but that didn't always gave the right answer and console logged the question and answer 5 times. 

Then it occurred to me, since I'm already using "currentJoke" for the question, I just need to use the same state for the answer.  

2. Ensuring it's a new batch of 5 jokes per day. 

First, the per day logic: First, we take the starting date and subtract it from any given date that the app is used. This gives us the milisecond offset. We then divide it by / 1000 / 60 / 60 / 24 to gives us the day offset. Round it down by Math.floor() and use the joke at that index number. 

For the 5 jokes per day, this took longer to get it right but in reality, it's not too difficult. As the list of jokes will continue to increase, it's more efficient to take however long the jokes list is and slice it into sets of five first. Then push the corresponding set into the target jokes set depending on the day offset. 


## To do:
- Add keyboard for mobile
- Error handling/prevention