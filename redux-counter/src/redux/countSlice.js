import {createSlice,createSelector} from '@reduxjs/toolkit';


export const countSlice = createSlice({
    name:'counter',
    initialState : {
        value : 0,
        status :'idle'
    },
    reducers :{
        increment : state=>{
            state.value+=1
        },
        decrement : state=>{
            state.value-=1
        },
        increbyAmt : (state,action) =>{
            state.value += action.payload 
        }
    }
});

export const {increment,decrement,increbyAmt} = countSlice.actions

export const getSelectCount = createSelector(
    [(state) => state.counter.value] ,(state)=>state
)

export default countSlice.reducer