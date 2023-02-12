// import React from 'react';
// //import { BrowserRoter as Router, Routes,Link,Route} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter, Routes} 
//         from "react-router-dom";
// import About from './About';
// import { Contact } from './Contact';
// import { Home } from './Home';


// // React Router is a powerfull react router library built in a top react that help you add new screen 
// //flow to your application incrdible quicly all while keeping the url synced with whatsbin display on the page


// // first we need to install react-router-dom
// // we need to impoert
// //import { BrowserRoter as Router, Routes,Link,Route} from 'react-router-dom'

// // In the parent compoeent we need to render BrwoserRouter and then Routes and then Route



// export default function App() {
//   return (
//     <Router>
//     <div className="App">
//      <ul className="App-header">
//        <li>
//          <Link to="/">Home</Link>
//        </li>
//        <li>
//          <Link to="/about">About Us</Link>
//        </li>
//        <li>
//          <Link to="/contact">Contact Us</Link>
//        </li>
//      </ul>
//     <Routes>
//           <Route exact path='/' element={< Home />}></Route>
//           <Route exact path='/about' element={< About />}></Route>
//           <Route exact path='/contact' element={< Contact />}></Route>
//    </Routes>
//    </div>
// </Router>
  
//     )

// }


import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import {Home} from './Home';
import {Contact} from './Contact';
import {About} from './About';



function App() {
  return (
    <div>
      <h1>Hello Ji This is Krishna</h1>
      <Router>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        
        <Routes>
          <Route excat path="/home" element={<Home />}></Route>
          <Route excat path="/contact" element={<Contact />}></Route>
          <Route excat path="/About" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
