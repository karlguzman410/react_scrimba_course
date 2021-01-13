import React from 'react'
import useGameLogic from './useGameLogic'

function TypingGame() {

    const { textRef,
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
    } = useGameLogic()


    const gameOver = timer === 0 ? <h4>Game Over! Press Restart to try again</h4> : <h4>Good luck!</h4>

    return (
        <div>
            <h1>Typing Game</h1>
            <textarea
                ref={textRef}
                name="text"
                value={text}
                onChange={handleTextChange}
                disabled={!round}
                placeholder="Press 'Start Game' button to start typing here" />
            <h4>Time left: {timer} </h4>
            {gameOver}
            <button
                onClick={() => startRound(true)}
                disabled={round || timer === 0 ? true : false}>Start Game</button>
            <button
                onClick={restart}
                disabled={!round || timer > 0 ? true : false}>Restart </button>
            <h1>Word Count: {numberOfWords}</h1>

        </div>
    )
}

export default TypingGame
