import './App.css';
import { useState } from 'react';
function AppTime() {

  const [time , setTime] = useState(24);

  const updateTime= ()=>{

    setTime(time + 1);

  }

  return (
   
    <div className="App">
      <h2>{time}시</h2>
      <button onClick={updateTime}>시간증가</button>
    </div>
  );
}

export default AppTime;
