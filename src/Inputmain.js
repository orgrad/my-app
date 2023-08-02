import { useState } from "react";


function Inputmain() {
    const[text,setText] = useState("");
    const handleChange =(event)=>{
        setText(event.target.value);

    }
    const handelReset=()=>{
        setText("");
    }
    return (
        <div>
            <input onChange={handleChange} value={text} />
            <button onClick={handelReset}>초기화</button>
            <div>
                <b>값 :{text} </b>
            </div>
        </div>

    );
}
export default Inputmain;