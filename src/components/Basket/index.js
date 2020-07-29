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
    // traerlo de local storage
    const producstLS = {...localStorage}
    const itemsArray = Object.values(producstLS)
    const parsedArray = []

    itemsArray.map(item => {
        parsedArray.push(JSON.parse(item))
    })

    this.setState({
        products : parsedArray
    })


    // sumar los precios totales

    let totalPrice = 0

    this.state.products.map((product) => {
      totalPrice = totalPrice + product[0].price
    })

    this.setState({
      totalPrice: totalPrice
    })


}


    handleCallback(action, price) {
        console.log("llegó el callback", action, price)
    
        const {totalPrice} = this.state
        const newTotalPrice = action == "less" ? totalPrice - price : totalPrice + price

        this.setState({
            totalPrice: Math.floor(newTotalPrice)
          })
    }



    render() {
        const {products, totalPrice} = this.state
        
        return(
            <div className="basket-container">
                <div className="products-container">
                    {products.map((product, key) => {
                    return (
                        <Product
                        id={product[0].id}
                        key={key}
                        qty={product[0].quantity}
                        img={product[0].img}
                        price={product[0].price}
                        title={product[0].title}
                        oldPrice={product[0].oldPrice}
                        handleCallback={(action, price) => this.handleCallback(action, price)}/>
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