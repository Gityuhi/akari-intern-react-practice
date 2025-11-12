import { useEffect, useState } from "react";
import "./App.css";

// 📬 要件 2: useEffect で「副作用」を管理せよ
// 次に、Reactの外の世界（この場合はコンソール）と連携します。

// useEffect を使ってください。

// todos リスト（の数）が変更されるたびに、コンソールの document.title（ブラウザのタブ）に「タスク数: (現在のタスク数)」と表示されるように実装してください。

// useEffect の依存配列を正しく設定し、「todos が変更された時だけ」この処理が実行されるようにしてください。

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Reactを学ぶ", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  

  const handleAddTask = () => {
    let newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const handleDeleteTask = (key) => {
    // どのtodoオブジェクトかを判別する。(filterメソッド？)
    // setTodos関数を呼んで、削除する？
    let filteringTodo = todos.filter((todo) => key !== todo.id )
    setTodos(filteringTodo)
  }

  return (
    <>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-400 p-2 mb-4"
      />
      <button onClick={handleAddTask}>追加</button>
      <div>
        {todos.map((todo) => {
          return (
            <div className="flex mb-4" key={todo.id}>
              <li className="mr-16">{todo.task}</li>
              <button onClick={() => handleDeleteTask(todo.id)}>削除</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
