import React, {useEffect, useState} from 'react';
import {createUser} from "../../services/services";
import axios from "axios";

const SignUp = () => {
    const [user, setUser] = useState({});

    const formHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const signUp = async (e) => {
        e.preventDefault();
        await createUser(user);
        setUser({});
    }


    return (
        <form onSubmit={signUp}>
            <input type="text" name='username' placeholder='username' onChange={formHandler}/>
            <input type="text" name='email' placeholder='email' onChange={formHandler}/>
            <input type="password" name='password' placeholder='password' onChange={formHandler}/>
            <input type="password" name='password2' placeholder='password2' onChange={formHandler}/>
            <input type="text" name='first_name' placeholder='first_name' onChange={formHandler}/>
            <input type="text" name='last_name' placeholder='last_name' onChange={formHandler}/>
            <input type="text" name='phone' placeholder='phone' onChange={formHandler}/>

            <button>Зарегистрироваться</button>
        </form>
    );
};

export default SignUp;
