import './App.scss';
import AppRouter from "./components/AppRouter";
import {Link} from "react-router-dom";
import React, {useState} from "react";

function App() {
    const [phone, setPhone] = useState('88005553535');

    return (
    <div className="App">
        <nav>
            <Link to={'/'}>Home | </Link>
            <Link to={'/about'}>about | </Link>
            <Link to={'/contact'}>contact | </Link>
            <Link to={'/products'}>products | </Link>
            <Link to={'/users/signup'}>signup | </Link>
            <Link to={'/users/signIn'}>signIn</Link>
        </nav>
        <br/>

      <AppRouter phoneNumber={phone}/>
    </div>
  );
}

export default App;