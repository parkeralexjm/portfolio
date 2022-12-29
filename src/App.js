import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './themes/Theme'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Header/>
    <Hero/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </ThemeProvider>
  );
}

export default App;
