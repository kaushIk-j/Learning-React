import {useContext , createContext} from "react"

export const TodoContxt = createContext({
        todos :[{
            id: 1,
            task_name: "Learning React",
            isCompleted : false
        }],
        addTodo : (todo) => {},
        updateTodo : (id,todo) => {},
        deleteTodo : (id) => {},
        toggleComplete:(id)=> {}

})

export const TodoProvider = TodoContxt.Provider

export const useTodo = ()=>{
    return useContext(TodoContxt)
}