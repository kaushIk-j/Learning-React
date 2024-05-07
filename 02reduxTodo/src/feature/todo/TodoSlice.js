import {createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos : [{id:1, title:"hello worls"}]
}


export const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(curentState,action)=>{
            const todo = {
                id: nanoid(),
                title: action.payloadr
            }
            curentState.todos.push(todo)
        },

        removeTodo:(curentState,action)=>{
           curentState.todos = curentState.todos.filter((todo)=>( action.payload !== todo.id ))
        },

        updateTodo:( curentState, action)=>{
            curentState.todos.map((todo) => (todo.id === action.payload ? {...todo, title:action.payload}: todo) )
        }
    }
})

export const {addTodo, removeTodo,updateTodo} =TodoSlice.actions

export default TodoSlice.reducer