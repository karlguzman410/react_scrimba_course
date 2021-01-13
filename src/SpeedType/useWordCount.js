import { useState } from 'react'

function useWordCount(props) {
    const [numberOfWords, setNumberOfWords] = useState(0)

    function wordCount(text) {
        console.log("wordCount() called")
        console.log(text)
        const wordCount = text.trim().split(" ")
        setNumberOfWords(wordCount.filter(word => word !== "").length)
    }

    function resetWordCount() {
        setNumberOfWords(0)
    }

    return [numberOfWords, wordCount, resetWordCount]
}

export default useWordCount