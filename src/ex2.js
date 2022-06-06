// [async]
// async는 함수 앞에 async를 붙여서 사용
// 항상 프라미스를 반환(프라미스가 아닌 값이라도, 프라미스로 감싸서 반환!)

// async function myFunc() {
// 	return "프라미스를 반환해요!"; // 프라미스가 아닌 걸 반환해볼게요!
// }

// myFunc().then(result => {console.log(result)}); // 콘솔로 확인해봅시다!

// [await]
// async의 짝꿍(async 없이는 못 씀)
// async 함수 안에서만 동작
// await는 프라미스가 처리될 때까지 기다렸다가 그 이후에 결과를 반환

// async function myFunc(){
// 	let promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve("완료!"), 1000);
// 	});

//     console.log(promise);

// 	let result = await promise; // 여기서 기다리자!하고 신호를 줍니다.

//     console.log(promise);

// 	console.log(result); // then(후처리 함수)를 쓰지 않았는데도, 1초 후에 완료!가 콘솔에 찍힐거예요.
// }

// await를 만나면, 실행이 잠시 중단되었다가 프라미스 처리 후에 실행을 재개합니다!
// 즉, await를 쓰면 함수 실행을 기다리게 하는거예요.
