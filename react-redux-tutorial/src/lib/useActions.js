import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

/**
 * useAction Hook은 액션 생성 함수를 액션을 디스패치 함수로 변환
 * 액션 생성 함수를 사용하여 액션 객체를 만들고, 이를 스토어에
 * 디스패치해주는 작업을 해 주는 함수를 자동으로 만들어 주는 것
 * @param {Array} actions 액션 생성 함수로 이루어진 배열
 * @param {Array} deps 이 배열 안에 들어 있는 원소가 바뀌면 액션을 디스패치하는 함수를 새로 생성
 * @returns
 */
export default function useActions(actions, deps) {
  const dispatch = useDispatch();

  /**
   * useMemo hook
   * 의존성이 변경되었을 때 메모제이션된 값만 다시 계산
   * 모든 렌더링 시의 고비용 계산을 방지
   */
  return useMemo(
    () => {
      // actions parameter가 Array로 이루어져있는지 확인
      if (Array.isArray(actions)) {
        // bindActionCreators를 사용하면 액션함수를 모두 자동으로 설정
        // 액션의 수가 많아질수록 유용
        return actions.map((a) => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps,
  );
}
