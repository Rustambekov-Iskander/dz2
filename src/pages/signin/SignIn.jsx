import React, {useState} from 'react';
import {signInUser} from "../../services/services";

const SignIn = () => {
    const [user, setUser] = useState({});

    const formHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
        console.log(user)
    }

    const signIn = async (e) => {
        e.preventDefault();
        await signInUser(user);
    }


    return (
        <form onSubmit={signIn}>
            <input type="text" name='username' placeholder='username' onChange={formHandler}/>
            <input type="password" name='password' placeholder='password' onChange={formHandler}/>
            <button>Login</button>
        </form>
    );
};

export default SignIn;
