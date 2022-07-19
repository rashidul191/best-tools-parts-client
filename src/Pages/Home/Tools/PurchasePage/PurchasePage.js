import React from 'react';
import {useParams} from "react-router-dom"

const PurchasePage = () => {
    const {id} = useParams()
    return (
        <div>
            <h2 className='text-2xl'>Purchase Page: {id}</h2>
        </div>
    );
};

export default PurchasePage;