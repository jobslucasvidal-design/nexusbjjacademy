import '../src/styles/global.css';
import { About, Aulas, Contact, Footer, Header, Hero, Horarios } from './features/home';
import Divider from "./components/divider/Divider.jsx";
import img1 from "../src/assets/images/bg-intro.png"

function App() {
  return <>
  <Header/>
  <Hero/>
  <Divider image={img1}/>
  <Aulas/>
  <Horarios/>
  <Divider image={img1}/>
  <About/>
  <Contact/>
  <Footer/>
  </>;
}

export default App;