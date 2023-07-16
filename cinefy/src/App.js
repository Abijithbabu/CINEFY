import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Routes from './routes/routes';
import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css'
import './Components/home/style.css'
const GlobalStyle = createGlobalStyle`
  body {
    font-family:"Cabin",-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
  }
  h1 {
    fontSize: 34,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  h2 {
    fontSize: 28,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  h3 {
    fontSize: 24,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  h4 {
    fontSize: 22,
    lineHeight: 1.4,
    fontWeight: 700,
  },
  h5 {
    fontSize: 17,
    lineHeight: 1.4,
    fontWeight: 600,
  },
  h6 {
    fontSize: 15,
    lineHeight: 1.4,
    fontWeight: 600,
  },
`;

function App() {
  return (
  <>
  <GlobalStyle/>
  <ReactNotifications />
  <Routes/>
  </>
  ) 
} 

export default App;  
 