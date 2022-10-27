import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import Header from './components/Header';

function App() {
  return (
<Router>
<div className="App">
  <Header/>
     <ToastContainer position='top-center'/>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/add' element={<AddEdit/>} />
      <Route exact path='/update/:id' element={<AddEdit/>} />
      <Route exact path='/view/:id' element={<View/>} />
      <Route exact path='/about' element={<About/>} />

     </Routes>    
    </div>
</Router>


    
  );
}

export default App;
