
import './App.css';
/*
    컴포넌트로 만들어진
    리액트는 컴포넌트의 위치를 상관하지 않는다
    정의를 내리고 사용할수있으면 된다.
*/
function Animals(props){

    return(
        <p>
            <hi>고양이와 {props.name}</hi>
        </p>

    );
}


function Proptype() {


    return (
        <div>
           <Animals name = "강아지" />


        </div>

    );
}
export default Proptype;