import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Dogs from "./Components/Dogs";
import DogsDecp from "./Components/DogsDecp";
import Form from './Components/Form'
import Cats from "./Components/Cats";
import About from "./Components/About";
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dogs" element={<Dogs/>}/>
        <Route path="/dogsDesc" element={<DogsDecp/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/cats" element={<Cats/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
