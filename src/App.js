import  {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap"
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />        
        </Routes>
      </Container>
    </>

  );
}

export default App;
