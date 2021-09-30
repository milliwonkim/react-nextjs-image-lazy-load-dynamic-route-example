import React from 'react';

function TodoDetailPage({ detailTodoDatas }) {
    console.log(detailTodoDatas);
    if (!detailTodoDatas) {
        return <p>Loading ...</p>;
    }
    return (
        <div>
            <h5>id: {detailTodoDatas.id}</h5>
            <h1>title: {detailTodoDatas.title}</h1>
        </div>
    );
}

export async function getStaticProps({ params }) {
    console.log(params);
    const detailData = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );

    const detailTodoDatas = await detailData.json();

    return {
        props: { detailTodoDatas: detailTodoDatas },
    };
}

export const getStaticPaths = async () => {
    const todoDatas = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    const todoDataIds = await todoDatas.json();
    console.log('todoDataIds', todoDataIds);
    const idsPaths = todoDataIds.map((todoDataId) => ({
        params: {
            id: todoDataId.id.toString(),
        },
    }));

    return {
        paths: idsPaths,
        fallback: false,
    };
};

export default TodoDetailPage;
