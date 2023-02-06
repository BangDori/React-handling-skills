import React from 'react';
import { useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions';

const TodosContainer = () => {
  /**
   * useSelector hook은 스토어의 상태를 반환해주는 역할
   * useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우
   * 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다.
   * 컴포넌트 렌더링 최적화에 용이
   */
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    [],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
