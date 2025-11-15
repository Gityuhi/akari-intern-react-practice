import React from "react";

export const TodoList = React.memo(
  ({ handleDeleteTask, handleCompletedTask, todos }) => {
      console.log("子コンポーネントレンダリング");

    return (
      <div>
        {todos.map((todo) => {
          return (
            <div className="flex mb-4" key={todo.id}>
              <li className="mr-16">{todo.task}</li>
              <button onClick={() => handleDeleteTask(todo.id)}>削除</button>
              <button onClick={() => handleCompletedTask(todo.id)}>完了</button>
              {/* <button onClick={() => handleEditTask(todo.id)}>編集</button> */}
            </div>
          );
        })}
      </div>
    );
  }
);
