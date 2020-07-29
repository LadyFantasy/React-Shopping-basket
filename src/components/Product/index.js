import React from "react"
import "./index.scss"

class Product extends React.Component{
    render(){
        const {qty, img, price, title, oldPrice} = this.props
        return(
            <div className="product">
                <img className="product-img" src={img} alt="product image"/>
                <div className="product-content">
                    <p className="product-title">{title}</p>
                    <span className="product-price">${price}</span>
                    <span className="product-old-price">${oldPrice}</span>
                    <div className="counter">
                        <span className="counter-sign">-</span>
                        <span className="counter-qty">{qty}</span>
                        <span className="counter-sign">+</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product