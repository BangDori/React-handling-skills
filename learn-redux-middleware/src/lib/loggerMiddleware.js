/**
 *
 * @param {*} store 리덕스 스토어 인스턴스
 * @param {*} next store.dispatch와 비슷한 역할을 수행하지만,
 * next(action)을 호출하면 그 다음 처리해야 할 미들웨어에게 액션을 넘겨주고,
 * 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다는 것
 * @param {*} action 디스패치된 액션
 * @returns
 */
const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어의 기본 구조
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
