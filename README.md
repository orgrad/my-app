# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

만약에 npm start를 종료하고 다시 실행시키고 싶으면 terminal 에서 ctrl + c 를 여러번 눌러주면 된다.

### 리엑트 설치
nodejs :패키지 관리자(리액트 이외에도 다양한 패키지 설치 가능)
    npx : 최신 패키지 설치이기 때문에 초반에 폴더 만들어줄때 사용하는 명령어   ex:  npx create-react-app {폴더명}
    npm : 전반적으로 build, test, start, install 등 다방면으로 사용
        프로젝트 시작하는 명령어 : npm start 또는 npm run start 또는 npm run dev
        초가적으로 필요한 패키지 설치하는 명령어  : npm install

    package.json  : 간략한 사용설명서
    package-lock.json  : 자세한 사용설명서
    README.md : 프로젝트에 대해 사람이 전반적으로 설명하는 공간
    .gitignore :  깃허브에 파일을 업로드할때 업로드 하지 말아야될 이름이나 확장자를 작성하는 공간

### React의 장점
    - 컴포넌트를 이용한 재사용성 
    - Virtual Dom 을 이용한 빠른 응답성 ( "DOM을 추상화한 가상의 객체")
    - SPA("Single page Application) ->단일 페이지로 처리
    - web으로 모바일 앱도 만들수 있다.
    - JSX(JavaScriptXml) : 우리가 작성한 코드를 컴퓨터에 맞게 변환해준다


### 컴포넌트 작성방법
function 이름{
    
    script
        const [기본값, 변겨될 값] = useState(초기값);
        const 동작할 이름 = () =>{
            변경될 값
        }
        ## 만약에 input 처럼 넣어줘야 하는 값이 있을경우
        const 동작할 이름2 = (event) =>{
            변경될 값(event.target.value);
        }
    style
    
    return(

    <div>{기본 값}내용을 채워줌</div>

    );

}
export defailt 이름

### 동작에 대해서 작성
    리액트는 초반에 index.html파일만 바라본다.
    index.js에서 사용할 js파일을 불러온다.
    그다음 App.js와 같은 파일을 만들어서 컴포넌트를 작성한다.
    파일의 이름은 개발자의 자유이다.

### 폴더 구조
    >node_modules   : 패키지  (이폴더 안에 react가 들어있다)
    >public         : 가장 처음에 보여지는 폴더
    >src            : 우리가 원하는 코드를 작성하는 폴더