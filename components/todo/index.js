import { useRouter } from 'next/router';
import React from 'react';

function Todo({ todo }) {
    const router = useRouter();

    const movingToTodo = (id) => {
        router.push(`/todos/${id}`);
    };

    return (
        <div>
            <h5
                style={{ cursor: 'pointer' }}
                onClick={() => movingToTodo(todo.id)}>
                id: {todo.id}
            </h5>
            <h1>title: {todo.title}</h1>
        </div>
    );
}

export default Todo;
