import React, {useEffect, useState} from 'react';
import axios from "axios";
import {getAllCaps} from "../../services/services";
import {Link} from "react-router-dom";

const Products = () => {
    const [caps, setCaps] = useState([]);


    useEffect( () => {
        ( async () => {
            const resp = await getAllCaps();
            setCaps(resp)
        })()
    }, [])

    return (
        <div>

            {
                caps.map( cap => (
                    <Link to={`${cap.id}`} key={cap.id}>{cap.id}. {cap.name} <br/></Link>
                ))
            }
        </div>
    );
};

export default Products;
