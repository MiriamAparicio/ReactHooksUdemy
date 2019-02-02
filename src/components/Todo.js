import React, { Fragment, useState } from 'react';
import axios from 'axios'; //https://react-hooks-todo-list.firebaseio.com/

const todo = props => {
    /**
     * rules:
     * use hooks at the top level of the component function
     * will only work on a componet function (takes props and return jsx)
     * only call useState at the root level of the component function 
     * not in: loops, if statements, other functions, etc
     */
    //use multiple states
    const [ todoName, setTodoName ] = useState('');

    const [ todoList, setTodoList ] = useState([]);

    //use one state
    //const [ todoState, setTodoState ] = useState({userInput: '', todoList: []})
 
    const inputChangeHandler = (event) => {
        //use one state
        // setTodoState({
        //     userInput: event.target.value,
        //     todoList: todoState.todoList
        // });
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        //use one state
        // setTodoState({
        //     userInput: todoState.userInput,
        //     todoList: todoState.todoList.concat(todoState)
        // });
        setTodoList(todoList.concat(todoName));
        setTodoName('');
        axios.post('https://react-hooks-todo-list.firebaseio.com/todos.json', {name: todoName})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    };

    return (
        <Fragment>
            <input 
            type="text" 
            placeholder="todo"
            onChange={inputChangeHandler}
            value={todoName}/>
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </Fragment>
    )
};

export default todo;