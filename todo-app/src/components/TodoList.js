import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div classname="TodoList">
            {todos.map(todo => {
                return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
            })}
        </div>
    );
};

export default TodoList;