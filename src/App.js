import "./App.css";
import io from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:8081");
  const click = () => {
    socket.emit("click", { msg: "text" });
  };
  return (
    <div className="App">
      running
      <button onClick={click}>click</button>
    </div>
  );
}

export default App;
