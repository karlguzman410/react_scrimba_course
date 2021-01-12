import React, { useState, useRef } from 'react'

function TodoList() {

    //track current value of input form
    const [todoItem, setTodoItem] = useState('')

    //array of todos
    const [todoList, setTodoList] = useState([])

    //input ref
    const inputRef = useRef(null)

    //handleChange function
    //grabs the value of input and setTodoItem
    function handleChange(event) {
        setTodoItem(event.target.value)
    }

    //addTodo
    //adds todoItem to the array of todos
    function addTodo(event) {
        event.preventDefault()
        setTodoList(prevTodoList => [...prevTodoList, todoItem])
        setTodoItem("")

        //access inputRef
        //so everytime user clicks button, the focus goes back into input box to start typing
        inputRef.current.focus()
    }

    //map the todos array
    const list = todoList.map(todo => <p key={todo}>{todo}</p>)

    return (
        <div>
            <form>
                <input ref={inputRef} type="text" name="todo" value={todoItem} onChange={handleChange} />
                <button onClick={addTodo}>Add this to to-do list!</button>
            </form>
            <p>Items we need done for today: </p>
            {list}
        </div>
    )
}

export default TodoList
