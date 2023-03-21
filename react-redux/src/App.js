import "./App.css";
import store from "./redux/Store";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
        {/* <CakeContainer></CakeContainer> */}
        {/* <NewCakeContainer></NewCakeContainer>
        <IceCreamContainer></IceCreamContainer>
        <ItemContainer cake></ItemContainer>
        <ItemContainer iceCream></ItemContainer> */}
      </div>
    </Provider>
  );
}

export default App;
