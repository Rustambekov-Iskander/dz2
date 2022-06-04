import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {getCapById} from "../../services/services";

const ProductPage = () => {
    const [cap, setCap] = useState();
    const params = useParams();

    useEffect(() => {
        ( async () => {
            const resp = await getCapById(params.id);
            setCap(resp);
        })();
    }, []);

    return (
        <div>
            {
                cap
                ? `${cap.id}. name: ${cap.name}. brand: ${cap.brand.name}. price: ${cap.price}`
                : 'загрузка...'
            }

            <br/>
            <Link to='/products'>назад</Link>
        </div>
    );
};

export default ProductPage;
