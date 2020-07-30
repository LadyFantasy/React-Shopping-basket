import React from "react"
import Slider from "react-slick"
import "./index.scss"
import Products from "../../products.json"
import {Link} from "react-router-dom"

class Carrousel extends React.Component{
    constructor(props) {
        super(props);

        this.state={
          products: Products
        }

        this.settings = {
          slidesToShow :5,
          slidesToScroll: 2,
          arrows: true,
          infinite: true,
          variableWidth: true
        }
    }

    handleClick(e) {
      const {products} = this.state
      const {innerText} = e.target.parentNode.childNodes[1]
    
      const filtered = products.filter(product => {
        return(product.title === innerText)
        
      })

      localStorage.setItem(filtered[0].title, JSON.stringify(filtered))

      // se usa history.push en vez de englobarlo en <LINK> porque tiene que hacer otra función antes de redireccionar
      this.props.history.push("/checkout")
      
    }


    render() {
      const {products} = this.state
        return(
          <>
          <div className="carrousel-container">
              <Slider {...this.settings}>

                {products.map((product, key) => {

                  return(
                    
                      <div className="img-container" key={key} onClick={(e) => this.handleClick(e)}>
                        <img className="img" src={product.img}  />
                        <p className="img-text">{product.title}</p>
                        <p className="img-text">$ {product.price}</p>
                      </div>
                    
                  )
                })}
              </Slider>
            </div>
              <Link to="/checkout"><p className="link-carrito">Ir al carrito</p></Link>
          </>
        )
}
}

export default Carrousel


