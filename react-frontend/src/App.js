import "./App.css";
import ClassClick from "./Components/ClassClick";
import Counter from "./Components/Counter";
import EventBind from "./Components/EventBind";
import FunctionClick from "./Components/FunctionClick";
import Greet from "./Components/Greet";
import Message from "./Components/Message";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import Stylesheet from "./Components/Stylesheet";
import Inline from "./Components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Components/Form";
import LifecycleA from "./Components/LifecycleA";
import PureComp from "./Components/PureComp";
import ParentComp from "./Components/ParentComp";
import TimerComp from "./Components/TimerComp";

function App() {
  return (
    <div className="App">
      <TimerComp></TimerComp>
      {/* <ParentComp></ParentComp> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Form></Form> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline></Inline> */}
      {/* <Stylesheet primary={true}></Stylesheet>
      <Inline></Inline> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Message name="Sai Sreekar"></Message>
      <Counter addValue="10"></Counter>
      <Greet name="Sai Sreekar" place="Chennai">
        <p>This is Child Props (Functional Component)</p>
      </Greet>
      <Greet name="Sridhar" place="Bengaluru">
        <button>Click Here</button>
      </Greet>
      <Greet name="Sai" place="Hyderabad"></Greet>
      <Welcome name="Sai Sreekar" place="Chennai">
        This is Child Props (Class Component)
      </Welcome>
      <Welcome name="Sridhar" place="Bengaluru"></Welcome>
      <Welcome name="Sai" place="Hyderabad"></Welcome>
      <Hello></Hello> */}
    </div>
  );
}

export default App;
