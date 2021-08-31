import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id,title,pictureUrl,price}) => {
    return (
        <div className="item-detail-container">
            <img src={pictureUrl} alt="Imagen del item"/>
            <div className="detail-text-container">
                <h2> {title} </h2>
                <h3> {`$${price}`} </h3>
            </div>
        </div>  
    )
}

export default ItemDetail
