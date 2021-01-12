import React, { useState, useEffect, useRef } from 'react'

function TypingGame() {

    const STARTING_TIME = 5

    const [text, setText] = useState('')
    const [timer, setTimer] = useState(STARTING_TIME)
    const [round, setRound] = useState(false)
    const [numberOfWords, setNumberOfWords] = useState(0)

    const textRef = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)

    }

    function wordCount(text) {
        const wordCount = text.trim().split(" ")
        return wordCount.filter(word => word !== "").length
    }

    function results() {
        setNumberOfWords(wordCount(text))
    }

    function restart() {
        setText('')
        setTimer(STARTING_TIME)
        setNumberOfWords(0)
    }

    useEffect(() => {
        if (round === true & timer > 0) {
            textRef.current.focus()
            setTimeout(() => {
                setTimer(prevTime => prevTime - 1)
            }, 1000)
        }
        if (timer === 0) {
            setRound(false)
            results()
        }

    }, [timer, round])

    // useEffect(() => {
    //     wordCount()
    // }, round)


    return (
        <div>
            <h1>Typing Game</h1>
            <textarea
                ref={textRef}
                name="text"
                value={text}
                onChange={handleChange}
                disabled={!round}
                placeholder="Press 'Start Game' button to start typing here" />

            <h4>Time left: {timer} </h4>
            <button
                onClick={() => setRound(true)}
                disabled={round || timer === 0 ? true : false}>Start Game</button>
            <button onClick={restart}>Restart </button>
            <h1>Word Count: {numberOfWords}</h1>

        </div>
    )
}

export default TypingGame
