import { useState } from "react";
import './App.css';


function AppInput(){
    const[text,setText]=useState("");
    const[name,setName]=useState("");  
    const handleJoin= ()=>{
        setName(text);


    }
    const handleChange= (event)=>{

        setText(event.target.value);
    }
return(
    <div>{
        name===""?(
        <input placeholder="이름을 입력하세요"
        value={text}/>):(
        <div>{name}님 환영합니다</div>)}
        <button onClick={handleJoin}>등록</button>

    </div>
);


}
export default AppInput;