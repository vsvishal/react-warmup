import "./App.css";
import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import ObserverInfiniteScroll from "./components/infiniteScroll/ObserverInfiniteScroll";

function App() {
  return (
    <div className="App App-header">
      {/* <InfiniteScroll /> */}
      <ObserverInfiniteScroll />
    </div>
  );
}

export default App;
