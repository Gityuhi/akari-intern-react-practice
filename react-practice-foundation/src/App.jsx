import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { TodoList } from "./components/todoList";

// 📬 要件 4: useCallback と React.memo で「不要な再レンダリング」を最適化せよ
// 最後に、Todoリストの表示部分を別コンポーネントに切り出し、最適化します。

// todos リストを表示する部分を、TodoList という別のコンポーネントに切り分けてください。親コンポーネントから todos と handleDeleteTask 関数をPropsとして渡します。

// TodoList コンポーネントを React.memo で囲んでください。

// 【問題発生】 この状態で、親コンポーネントの「入力フォーム（newTask）」に文字を入力してみてください。TodoList は React.memo で囲んだはずなのに、入力のたびに（todos が変わっていないのに）再レンダリングされてしまいます。（TodoList コンポーネントの先頭に console.log("TodoListが再レンダリングされました") を入れて確認してください）

// 【原因特定】 再レンダリングの原因は、親コンポーネントで定義した handleDeleteTask 関数が、親が再レンダリング（文字入力）されるたびに「新しい関数」として再生成され、TodoList に渡されてしまうからです。

// 【解決】 useCallback を使い、handleDeleteTask 関数を**メモ化（キャッシュ）**してください。これにより、todos が変わらない限り、文字入力では TodoList が再レンダリングされなくなるはずです。

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [test, setTest] = useState(0);

  useEffect(() => {
    document.title = `タスク数： ${todos.length}`;
  }, [todos]);
  console.log("親コンポーネントレンダリング");

  const completedTodos = useMemo(() => {
    // onChangeでstateが更新されてもレンダリングされていない！
    // console.log("レンダリングされた！");
    const slowCalculation = () => {
      const startTime = performance.now();
      while (performance.now() - startTime < 200) {}
    };

    const filteringCompleteTodo = todos.filter((todo) => {
      return todo.completed === true;
    });
    const completedTodoAmount = filteringCompleteTodo.length;
    slowCalculation();
    return completedTodoAmount;
  }, [todos]);
  // memo化したから関数を呼び出す必要がなくなった。useMemoは引数なしで第一引数の関数を呼び出した結果が返り血になる。
  // const completedTodo = calculateCompletedTodos();

  const testCount = () => {
    return setTest(test + 1);
  };

  const handleAddTask = () => {
    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    newTodo.task && setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const handleDeleteTask = useCallback(
    (key) => {
      // どのtodoオブジェクトかを判別する。(filterメソッド？)
      // setTodos関数を呼んで、削除する？
      const filteringTodo = todos.filter((todo) => key !== todo.id);
      setTodos(filteringTodo);
    },
    [todos]
  );

  const handleCompletedTask = useCallback(
    (key) => {
      const completedTodo = todos.map((todo) => {
        if (key === todo.id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
      setTodos(completedTodo);
    },
    [todos]
  );

  // const handleEditTask = (key) => {

  // }

  return (
    <>
      <h2>完了したタスク：{completedTodos}</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-gray-400 p-2 mb-4"
      />
      <button onClick={handleAddTask}>追加</button>
      <button onClick={testCount}>test</button>

      <TodoList
        handleDeleteTask={handleDeleteTask}
        handleCompletedTask={handleCompletedTask}
        // handleEditTask={handleEditTask}
        todos={todos}
      />
    </>
  );
}

export default App;
