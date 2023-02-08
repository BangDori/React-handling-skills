import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request) {
  // 성공 및 실패 액션 타입을 정의합니다.
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); // 시작
    dispatch(startLoading(type)); // 로딩 시작

    try {
      const res = await request(params);
      dispatch({
        type: SUCCESS,
        payload: res.data,
      }); // 성공
      dispatch(finishLoading(type)); // 로딩 종료
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(finishLoading(type)); // 로딩 종료
      throw e;
    }
  };
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers);
