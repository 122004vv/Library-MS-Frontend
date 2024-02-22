import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import AllBooks from './AllBooks';
import Addbook from './Addbook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}   ></Route>
          <Route path="/allbooks" element={<AllBooks/>}></Route>
          <Route path="/addbooks" element={<Addbook/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
