import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

const increase = createAction(INCREASE);
const decrease = createAction(DECREASE);

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치
const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(increase()); // 특정 액션을 디스패치합니다.
  const number = yield select((state) => state.counter); // state는 스토어 상태를 의미함
  console.log(`현재 값은 ${number}입니다.`);
}

function* decreaseSaga() {
  yield delay(1000); // 1초를 기다립니다.
  yield put(decrease()); // 특정 액션을 디스패치합니다.
}

export function* counterSaga() {
  // // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);

  // 첫 번째 파라미터: n초 * 1000
  // increaseSage는 3초에 단 한번만 호출
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
  // 가장 마지막으로 실행된 작업만 수행합니다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export { increase, decrease };
export { increaseAsync, decreaseAsync };
export default counter;
