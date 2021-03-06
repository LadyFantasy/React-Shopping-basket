import React from "react"
import "./index.scss"

class Product extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            qty: 1
        }
    }


      handleClick(action){
        const {qty} = this.state
        const {price, id, title} = this.props
        const newQty = action == "less" ? qty - 1 : qty + 1

        if (newQty > 0) {
            // CALLBACK!!!
            this.props.handleCallback(action, price)

            this.setState({
                qty: newQty
            })
        }else{
            this.props.deleteCallback(id)
            localStorage.removeItem(title)
        }



      }

    render(){
        const {id, qty, img, price, title, oldPrice} = this.props
        
        return(
            <div className="product">
                <img className="product-img" src={img} alt="product image"/>
                <div className="product-content">
                    <p className="product-title">{title}</p>
                    <span className="product-price">${Math.floor(price*this.state.qty)}</span>
                    <span className="product-old-price">${oldPrice}</span>

                    <div className="counter">
                        <button className="counter-sign" onClick={() => this.handleClick("less")}>-</button>
                        <span className="counter-qty">{Math.floor(this.state.qty)}</span>
                        <button className="counter-sign" onClick={() => this.handleClick("more")}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product