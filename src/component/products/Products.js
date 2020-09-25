import React,{ useEffect, useState} from 'react'

import axios from 'axios'
import Product from './product/Product'

export default function Products() {
    const [productList, setProductList] = useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(result=>{
            console.log(result);
        });
    })
    return (
        <div>
            
        </div>
    )
}
