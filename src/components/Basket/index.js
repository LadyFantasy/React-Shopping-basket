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
        totalPrice = totalPrice + parsedItem.price
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


    deleteCallback(id) {
        const {products, totalPrice} = this.state
        let newTotalPrice = totalPrice

        const filteredProducts = products.filter( product => {
            if(product.id==id) {
                newTotalPrice = newTotalPrice - product.price
            }
            return product.id !== id
        })


        this.setState({
            products: filteredProducts,
            totalPrice : newTotalPrice
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
                        id={product.id}
                        key={key}
                        qty={product.quantity}
                        img={product.img}
                        price={product.price}
                        title={product.title}
                        oldPrice={product.oldPrice}
                        handleCallback={(action, price) => this.handleCallback(action, price)}
                        deleteCallback={(id)=>this.deleteCallback(id)}/>
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