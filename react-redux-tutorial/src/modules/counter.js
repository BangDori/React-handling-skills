/**
 * 액션 함수와 액션생성자 함수를 함께 넣어서 관리하는 모듈파일
 */

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성자 함수
const increase = createAction(INCREASE);
const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

/**
 * Reducer의 역할
 * switch문을 통해 관리하는 것이 아닌, handleActions 함수를 통해 관리
 */
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export { increase, decrease };
export default counter;
