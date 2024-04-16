import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment , increbyAmt, getSelectCount} from "../redux/countSlice";

const Counter = () =>{

    const count = useSelector(getSelectCount);
    const dispatch = useDispatch();
    const [amt,setAmt] = useState(2);

    const incrementAmt = Number(amt) || 0;

    console.log(count);

    return(
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}> increment </button>
                <span> this the value : {count} </span>
                <button onClick={()=> dispatch(decrement())}> decrement </button>
                </div>
                <div>
                    <input type="text" className="text" value={amt} onChange={e=>setAmt(e.target.value)}/>
                    <button onClick={()=>dispatch(increbyAmt(incrementAmt))}>incresed by amt</button>
                </div>
        </div>
    );

}

export default Counter;