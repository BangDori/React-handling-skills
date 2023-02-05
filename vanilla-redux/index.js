import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 (액션의 이름)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 (액션 객체 생성)
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 (변화를 일으키는 함수)
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// 스토어 (상태와 리듀서가 존재)
const store = createStore(reducer);

const render = () => {
  const state = store.getState(); // 현재 상태 불러오기

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.textContent = state.counter;
};

render();
// 구독 (액션이 디스패치되어 상태가 업데이트될 때마다 호출)
store.subscribe(render);

// 디스패치 (액션을 발생시키는 것)
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase());
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

// 디스패치 -> 스토어 내부의 리듀서 함수를 실행 -> 리듀서 함수의 파라메터에서 어떤 액션인지 판단
