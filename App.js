import topFive1 from './Components/topFive';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import totalProducts1 from './Components/totalProducts';
import Profile from './Components/Profile';

import Protected from './Components/Protected';

import { Login } from './Components/Login';

function App() {
  return(

    <Router>

      <nv>
<ul>
        <li><Link to="/">Total Products</Link></li>

        <li><Link to="/topFive1">Most Popular Top 5 Products</Link></li>
        <li><Link to="/Profile">CEO_Profile</Link></li>

        <li><Link to="/Login">Login</Link></li>
        </ul>
      </nv>

      <Routes>

        <Route path="/" element={<Protected Component={totalProducts1}/>}/>

        <Route path="/topFive" element={<Protected Component={topFive1}/>}/>
        <Route path="/Profile" element={<Protected Component={Profile}/>}/>

        <Route path="/Login" element={<Login/>}/>      

      </Routes>

    </Router>

  );
}

export default App;  