import React, { useState } from 'react';




function Todo({ text, setTodos, todos, todo }) {

    const deleteHendler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
        // console.log(todo);
    };
    const completeHendler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHendler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHendler} className='trash-btn' >
                <i className='fas fa-trash '></i>
            </button>

        </div>
    );
};
export default Todo;