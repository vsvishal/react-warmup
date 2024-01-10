import "./App.css";
import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import ObserverInfiniteScroll from "./components/infiniteScroll/ObserverInfiniteScroll";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App App-header">
      <TodoList />
    </div>
  );
}

export default App;
