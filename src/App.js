import "./styles.css";
import TimerProgressBar from "./TimerProgressBar";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TimerProgressBar
        duration="8000"
        onComplete={() => console.log("Done")}
      />
    </div>
  );
}
