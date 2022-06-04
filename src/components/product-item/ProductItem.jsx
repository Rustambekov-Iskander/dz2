import React from 'react';
import {Link} from "react-router-dom";

const ProductItem = ({cap}) => {
    return (
        <Link to={cap.id}>
            {cap.id}. {cap.name}
            <br/>
        </Link>
    );
};

export default ProductItem;
