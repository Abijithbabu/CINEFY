import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Routes from "./routes/routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "./Components/home/style.css";
const GlobalStyle = createGlobalStyle`
  body {
    font-family:"Cabin",-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
  }
`;
const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ReactNotifications />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
