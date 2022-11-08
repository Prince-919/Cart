
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// Pages import
import Home from "./pages/Home";
import About from "./pages/About";

function App()
{
    return(
        <Router>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>

            </Routes>
        </Router>
    )
}
export default App;