import logo from "./logo.svg";
import "./App.css";
import One, { Two } from "./Components";

function App() {
  // 동기 : 동시에 일어나는 일
  // 동기 방식 : 요청 => 결과
  // run-to-completion : 앞의 일을 끝내기 전에 다음 일을 실행하지 않음
  // console.log("1");
  // window.alert("2");
  // console.log("3");

  // 비동기 : 동시에 일어나지 않는 일
  // 비동기 방식 : 요청1,요청2,요청3 => 결과2,결과3,결과1
  // 쓰레드 : 일꾼
  // 자바스크립트는 싱글 쓰레드!
  // 자바스크립트는 기본적으로 동기방식이지만 비동기도 가능
  // 자바스크립트 실행환경?
  // v8 엔진은 heap과 call stack으로 나뉨
  // heap: 동적으로 생성된 객체 인스턴스가 할당되는 영역 (변수 선언 등)
  // call stack: 일거리가 쌓이는 스택 (alert나 console.log 같은 일 등)
  // webAPI: Ajax, DOM event, setTimeout 등 브라우저에 내장된 API && 콜스택 대신 비동기 작업을 처리해주는 역할
  // event queue : 테스크 큐(Task queue)나 콜백 큐(callback queue)라고도 함. 비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, 타이머의 콜백 함수를 넣어두는 큐
  // event loop : 테스크(일거리)가 들어오길 기다렸다가 테스크가 들어오면 일을 하고, 일이 없으면 잠깐 쉬기를 반복하는 자바스크립트 내의 루프
  // => call stack 내에서 현재 실행중인 일거리가 있는 지, 이벤트 큐에 일거리가 있는 지 반복해서 확인하고, 콜 스택이 비어 있으면 이벤트 큐의 일거리를 콜스택으로 옮겨가게끔 도움
  // window.setTimeout(() => {
  //   window.alert("yap");
  // }, 1000);
  // console.log("222222");

  return (
    <div className="App">
      <One />
      <Two />
    </div>
  );
}

export default App;
