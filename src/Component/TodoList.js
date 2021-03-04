import React, { useState } from 'react';
import Todo from './Todo';




function TodoList({ todos, setTodos,filterTodos }) {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <Todo setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} />
                ))}
            </ul>
        </div>
    )
};
export default TodoList;