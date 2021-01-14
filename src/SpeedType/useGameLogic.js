import { useState, useEffect, useRef } from 'react'

function useGameLogic() {
    const STARTING_TIME = 5
    const [text, setText] = useState('')
    const [timer, setTimer] = useState(STARTING_TIME)
    const textRef = useRef(null)
    const [round, setRound] = useState(false)
    const [numberOfWords, setNumberOfWords] = useState(0)


    function handleTextChange(event) {
        setText(event.target.value)
    }

    function resetText() {
        setText("")
    }


    function wordCount(text) {
        console.log("wordCount() called")
        const wordCount = text.trim().split(" ")
        return wordCount.filter(word => word !== "").length
    }

    function results() {
        setNumberOfWords(wordCount(text))
    }

    function restart() {
        resetText()
        restartRound()
        resetWordCount()
    }


    function resetWordCount() {
        setNumberOfWords(0)
    }

    function restartRound() {
        console.log("restartRound() called")
        setRound(false)
        setTimer(STARTING_TIME)
    }

    function startRound() {
        setRound(true)
    }

    function timeRun() {
        setTimer(prevTime => prevTime - 1)
    }

    useEffect(() => {
        if (round === true & timer > 0) {
            textRef.current.focus()
            setTimeout(() => {
                timeRun()
                console.log(text)
            }, 1000)
        }
        if (timer === 0) {
            console.log("Round over!")
            results()
        }

    }, [timer, round])

    return {
        textRef,
        round,
        timer,
        restartRound,
        timeRun,
        numberOfWords,
        wordCount,
        resetWordCount,
        text,
        handleTextChange,
        resetText,
        results,
        restart,
        startRound
    }
}

export default useGameLogic