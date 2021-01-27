import React, { useEffect, useState } from 'react';
import Routes from "./routes";
import logo from "./SCL_Logo.png";
import { Link, useHistory } from "react-router-dom";
 
function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {
    
    if(window.location.pathname === "/contact"){
      setPath(window.location.pathname);
    }
  });


  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }


  useEffect(() => {
    checkPath();
  }, []);


  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to="/contact">Get in Contact</Link></li>)
  }


  return (
    <div className="App">
     <div className="container">
        <nav>
         
          <ul className="left_nav">
          <Link to="/"> <img src={logo} width="100" height="100"/></Link>
          </ul>
          <ul className="right_nav">
            {_contact}
          </ul>
        </nav>
        <Routes />
     </div>
    </div>
  );
}

export default App;
