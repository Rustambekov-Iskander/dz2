import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getUserById} from "../../services/services";

const UserProfile = () => {
    const params = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        ( async () => {
            const resp = await getUserById(params.id);
            setUser(resp)
        })()
    }, []);

    return (
        <div>
            {user
                ?
                <>
                имя: {user.username} <br/>
                email: {user.email}<br/>
                дата регистрации: {user.date_joined}<br/>
                <Link to='/'> Назад < /Link>
                </>
                :'загрузка...'
            }
        </div>
    );
};

export default UserProfile;
