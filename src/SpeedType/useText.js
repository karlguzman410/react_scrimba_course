import { useState } from 'react'

function useText(props) {
    const [text, setText] = useState('')

    function handleTextChange(event) {
        setText(event.target.value)
    }

    function resetText() {
        setText("")
    }

    return [text, handleTextChange, resetText]
}

export default useText