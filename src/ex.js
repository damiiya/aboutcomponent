// [callback-pattern/callback-hell]
// callback함수는 특정함수에 매개변후로 전달된 함수
// a()가 b()를 콜백으로 받으면 a((b)=>())
// 콜백 패턴은 자바스크립트가 비동기 처리를 하기 위한 패턴 중 하나
// 전통적인 콜백 패턴은 일명 콜백 헬로 불리는 엄청난 중첩 문제가 생기기 쉬움

// function async1('a', function (err, async2){
// 	if(err){
// 		errHandler(err);
// 	}else{
// 		...
// 		async2('b', function (err, async3){
// 			...
// 		}){
// 			...
// 		}
// 	}
// });

// [promise]
// 비동기 연산이 종료된 이후 결과를 알기 위해 사용하는 객체
// 비동기 메서드를 마치 동기 메서드처럼 값을 반환할 수 있음

// [promise 만들어보기]
// 프라미스 객체를 만듭니다.
// 인자로는 (resolve, reject) => {} 이런 excutor 실행자(혹은 실행 함수라고 불러요.)를 받아요.
// 이 실행자는 비동기 작업이 끝나면 바로 두 가지 콜백 중 하나를 실행합니다.
// resolve: 작업이 성공한 경우 호출할 콜백
// reject: 작업이 실패한 경우 호출할 콜백

// const promise = new Promise((resolve, reject) => {
// 	if(...){
// 		...
// 		resolve("성공!");
// 	}else{
// 		...
// 		reject("실패!");
// 	}
// });

// [promise 상태값]
// pending: 비동기 처리 수행 전(resolve, reject가 아직 호출되지 않음)
// fulfilled: 수행 성공(resolve가 호출된 상태)
// rejected: 수행 실패(reject가 호출된 상태)
// settled: 성공 or 실패(resolve나 reject가 호출된 상태)

// [.then/resolve]
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("완료!"), 3000);
// });

// promise.then(result => {
// 	console.log(result); // 완료!가 콘솔에 찍힐거예요.
// }, error => {
// 	console.log(error); // 실행되지 않습니다.
// });

// [.then/reject]
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => reject(new Error("오류!")), 1000);
// });

// promise.then(result => {
// 	console.log(result); // 실행되지 않습니다.
// }, error => {
// 	console.log(error); // Error: 오류!가 찍힐거예요.
// });

// [.catch]
// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => reject(new Error("오류!"), 1000);
// });

// promise.catch((error) => {console.log(error};);

// [promise chaning]
// 후속 처리 메서드를 체이닝해서 여러 개의 프라미스를 연결 > 콜백 헬 해결

// new Promise((resolve, reject) => {
// 	setTimeout(() => resolve("promise 1"), 1000);
// }).then((result) => { // 후속 처리 메서드 하나를 쓰고,
// 	console.log(result); // promise 1
// 	return new Promise(...);
// }).then((result) => { // 이렇게 연달아 then을 써서 이어주는 거예요.
// 	console.log(result);
// 	return new Promise(...);
// }).then(...);
