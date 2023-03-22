import "./App.css";
import ClassCounter from "./Components/ClassCounter";
import HookCounter from "./Components/HookCounter";
import HookCounterFour from "./Components/HookCounterFour";
import HookCounterThree from "./Components/HookCounterThree";
import HookCounterTwo from "./Components/HookCounterTwo";
import ClassCounterOne from "./Components/ClassCounterOne";
import HookCounterOne from "./Components/HookCounterOne";
import ClassMouse from "./Components/ClassMouse";
import HookMouse from "./Components/HookMouse";
import MouseContainer from "./Components/MouseContainer";
import IntervalClassCounter from "./Components/IntervalClassCounter";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import DataFetching from "./Components/DataFetching";

function App() {
  return (
    <div className="App">
      <DataFetching></DataFetching>
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HookMouse></HookMouse> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <ClassCounterOne></ClassCounterOne>
      <HookCounterOne></HookCounterOne> */}
      {/* <ClassCounter></ClassCounter>
      <br></br>
      <HookCounter></HookCounter>
      <br></br>
      <HookCounterTwo></HookCounterTwo>
      <br></br>
      <HookCounterThree></HookCounterThree>
      <br></br>
      <HookCounterFour></HookCounterFour> */}
    </div>
  );
}

export default App;
