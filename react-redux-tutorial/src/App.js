import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';

// Container는 기능 처리 담당
const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </>
  );
};

export default App;
