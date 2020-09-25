import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'

export default function Product(props) {
    return (
        <div>
            <div>
                <img src={props.imageSrc} alt={props.imageAlt}/>
            </div>
            <div>
                <Link to={props.href}>{props.title}</Link>
            </div>
            <div>
                <span>{props.price}</span>
                <span>{props.newPrice}</span>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}
