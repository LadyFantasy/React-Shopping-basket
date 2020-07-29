import React from "react"
import "./index.scss"
import Product from "../Product"

class Basket extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            products : [],
            totalPrice : 0
        }
    }

componentDidMount(){
    const producstLS = {...localStorage}

    const itemsArray = Object.values(producstLS)

    const parsedArray = []

    itemsArray.map(item => {
        parsedArray.push(JSON.parse(item))
    })

    console.log("parsedArray", parsedArray)
    this.setState({
        products : parsedArray
    })

}


    // handleCallback() {
    //     this.setState({
    //     totalPrice: this.state.totalPrice + 1
    //     })
    // }

    render() {
        const {products, totalPrice} = this.state
        
        return(
            <div className="basket-container">
                <div className="products-container">
                    {products.map((product, key) => {
                    return (
                        <Product id={product.id} handleCallback={() => this.handleCallback()} key={key} qty={product[0].quantity} img={product[0].img} price={product[0].price} title={product[0].title} oldPrice={product[0].oldPrice}/>
                    )
                    })}

                </div>
                <div className="shipping-container">
                    <p className="shipping-text">Shipping</p>
                    <p className="shipping">$19</p>
                </div>
                <div className="total-container">
                    <p className="total-text">Total</p>
                    <p className="totalPrice">$ {totalPrice}</p>
                </div>
            </div>
        )
    }
}


export default Basket