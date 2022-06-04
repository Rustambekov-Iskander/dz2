import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/services";
import {Link} from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        ( async () => {
            const resp = await getAllUsers();
            setUsers(resp)
        })()
    }, []);

    return (
        <div>
            {users.map(user => (
                <Link to={`users/${user.id}`} key={user.id}>{user.username} <br/></Link>
            ))}
        </div>
    );
}

export default Home;
