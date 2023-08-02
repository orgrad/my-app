import { useState } from "react";





function ChangeName (){
    const [name,setName] = useState("");
    
    const handleName =(event)=>{
        setName(nameInput);
    }
   

return(
    <div>
       
        <input  placeholder="이름을 입력하세요" value={nameInput} />
        <button onClick={handleName}>변경</button> 
        
        <br/>
        <b>{name} 님 환영합니다.</b>


    </div>


);


}
export default ChangeName;