import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// Counter에 대한 기능 처리 담당
const CounterContainer = () => {
  /**
   * useSelector hook은 스토어의 상태를 반환해주는 역할
   * useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우
   * 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다.
   * 컴포넌트 렌더링 최적화에 용이
   */
  const number = useSelector((state) => state.counter.number);

  // store에 dispatch하기 위해 함수형 컴포넌트에서 useDispatch hook을 사용
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
