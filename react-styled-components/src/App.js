import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import logo from "./logo.svg";
import StyledButton, {
  AnimatedLogo,
  DarkButton,
  FancyButton,
  SubmitButton,
} from "./Components/Button/Button";
import "./styles.css";

const theme = {
  dark: {
    primary: "#000",
    text: "#FFF",
  },
  light: {
    primary: "#FFF",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
  button{
    font-family:  ${(props) => props.theme.fontFamily};
  }`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo"></img> */}
        <AnimatedLogo src={logo}></AnimatedLogo>
        <StyledButton type="submit">Styled Button</StyledButton>
        <br></br>
        <br></br>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <br></br>
        <br></br>
        <FancyButton variant="fancy" as="a">
          Fancy Button
        </FancyButton>
        <br></br>
        <br></br>
        <SubmitButton>Submit Button</SubmitButton>
        <br></br>
        <br></br>
        <DarkButton>Dark Theme Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
