import React from 'react'
import {useParams} from 'react-router-dom'

export default function ContanctMethod() {
    let { method } = useParams();
    return (
        <div>
            <h3> Method id : {method}</h3>
        </div>
    )
}
