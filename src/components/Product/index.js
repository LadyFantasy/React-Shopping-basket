import React from "react"
import "./index.scss"

class Product extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            qty: 1
        }
    }



    // handleIncrement() {
    //     this.setState({
    //         qty : this.state.qty + 1
    //     },
    //         this.props.handleCallback(this.props.id, this.props.price * this.state.qty));

    // }


    // handleDecrement(){
    //     if (this.state.qty < 2) {
    //       this.setState({
    //         qty: 1
    //       });
    //     } else {
    //       this.setState({
    //         qty: this.state.qty - 1
    //       }, 
    //         this.props.handleCallback(this.props.id, this.props.price * this.state.qty));
    //       }
    //   };



      handleClick(action){
        const {qty} = this.state
        const {price} = this.props
        const newQty = action == "less" ? qty - 1 : qty + 1

        if (newQty > 0) {
            // CALLBACK!!!
            this.props.handleCallback(action, price)

            this.setState({
                qty: newQty
            })
        }



      }

    render(){
        console.log("id", this.props.id)
        const {id, qty, img, price, title, oldPrice} = this.props
        return(
            <div className="product">
                <img className="product-img" src={img} alt="product image"/>
                <div className="product-content">
                    <p className="product-title">{title}</p>
                    <span className="product-price">${Math.floor(price*this.state.qty)}</span>
                    <span className="product-old-price">${oldPrice}</span>

                    <div className="counter">
                        <span className="counter-sign" onClick={() => this.handleClick("less")}>-</span>
                        <span className="counter-qty">{this.state.qty}</span>
                        <span className="counter-sign" onClick={() => this.handleClick("more")}>+</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product