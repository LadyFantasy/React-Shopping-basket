import React from "react"
import "./index.scss"
import Product from "../Product"

class Basket extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            products : [],
            totalPrice : 0,
            shipping: 19
        }
    }

componentDidMount(){
    // traerlo de local storage
    const producstLS = {...localStorage}
    const itemsArray = Object.values(producstLS)
    const parsedArray = []

    let totalPrice = 0

    itemsArray.map(item => {
        const parsedItem = JSON.parse(item)
        parsedArray.push(parsedItem)
        totalPrice = totalPrice + parsedItem[0].price
    })


    this.setState({
        products : parsedArray,
        totalPrice : totalPrice
    })


}


    handleCallback(action, price) {
        
        const {totalPrice} = this.state
        const newTotalPrice = action == "less" ? totalPrice - price : totalPrice + price

        this.setState({
            totalPrice: newTotalPrice
          })
    }



    render() {
        const {products, totalPrice, shipping} = this.state
        
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
                    <p className="shipping">${shipping}</p>
                </div>
                <div className="total-container">
                    <p className="total-text">Total</p>
                    <p className="totalPrice">$ {Math.floor(totalPrice + shipping)}</p>
                </div>
            </div>
        )
    }
}


export default Basket