
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todo/TodoSlice';
import { useState } from 'react';


const Todos = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [title, setTitle] = useState("")

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


    return (
        <div>
            <h1> TODOS </h1>
            {todos.map((todo) =>
            (
                <li key={todo.id}>  

                    <input type='text' value={todo.title} onChange={e => setTitle(e.target.value)} readOnly={!isEdit} /> 
                    <button onClick={() => dispatch(removeTodo(todo.id))}> ❌ </button>
                    <button onClick={() => {
                        if(isEdit){
                            dispatch(updateTodo({...todo,title: title}))
                            setIsEdit(false)
                        }else { setIsEdit((prev)=>!prev)}
                    }}> {isEdit ? "📁" : "✏️"} </button>
                </li>
            ))}
        </div>
    );

}

export default Todos;
