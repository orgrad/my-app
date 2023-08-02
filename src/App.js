import './App.css';
import { useState } from 'react';
function App() {
/*script작성부

css,javascript활동을 적는다
변수 선언 , 상태변경은 여기서 진행

useState : 상태값 관리자 초기값 세팅 / 값변환이 가능
state  
  -컴포넌트 내부에서 선언한 값
  -setState를 통해서 내부값을 변경가능
*/

// let count = 0;
// const ['초기값 ' , 변환될 변수] = useState(초기값);
const [count , setCount] = useState(0);
const [time , setTime] = useState(24);

const plus= ()=>{
  // 증가
  // count = count+ 1
  setCount(count +1);
  console.log(count);
}
const minus= ()=>{
  // 감소

  setCount(count - 1);
  console.log(count);
}

const updateTime= ()=>{
  

  setTime(time + 1);
 
}

  return (
    /*html만 적는다
    
    div 는 한번만 쓴다
    
    
    */
    <div className="App">
      {/* <div>안에 주석 */}
      {/* <div className= "App">은 <html>태그와 비슷한 역할을 한다. 
          onClick={}  리액트에서는  온클릭을 좌측과 같이 사용
      
      */}
      <h2>{count}</h2>

      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
     
      <h2>{time}시</h2>
      <button onClick={updateTime}>시간증가</button>




    </div>
  );
}

export default App;
