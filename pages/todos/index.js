import Todo from '../../components/todo';

function TodosPage(props) {
    return (
        <div>
            {props.todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <Todo todo={todo} />
                    </div>
                );
            })}
        </div>
    );
}

export const getStaticProps = async ({ parmas }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todosData = await data.json();

    return {
        props: { todos: todosData },
    };
};

export default TodosPage;
