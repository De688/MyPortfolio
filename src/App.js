import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar.js'
import Pageroute from './Pages/pageroute';


function App() {
  return (
    <div className="App">
    <Router>
       <Navbar/>
        <Pageroute/>
    </Router>
    </div>
  );
}

export default App;
