import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faPhoneAlt, faUser, faHome, faCity, faGlobeAmericas, faMailBulk} from '@fortawesome/free-solid-svg-icons'
import "./index.scss"


class Form extends React.Component{
    render() {
        return(
            <div className="form">

                    <h3 className="contact-info-title">Contact information</h3>

                    <label htmlFor="mail">E-mail</label>
                    <div className="input-container">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <input type="email" name="mail" id="mail" placeholder="Enter your email..."/>
                    </div>

                    <label htmlFor="phone">Phone</label>
                    <div className="input-container">
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                    <input type="tel" name="phone" id="phone" placeholder="Enter your phone..."/>
                    </div>

                    <label htmlFor="name">Full Name</label>
                    <div className="input-container">
                    <FontAwesomeIcon icon={faUser}/>
                    <input type="text" name="name" id="name" placeholder="Your name..."/>
                    </div>

                    <label htmlFor="address">Address</label>
                    <div className="input-container">
                    <FontAwesomeIcon icon={faHome}/>
                    <input type="text" name="address" id="address" placeholder="Your address"/>
                    </div>

                    <label htmlFor="city">City</label>
                    <div className="input-container">
                    <FontAwesomeIcon icon={faCity}/>
                    <input type="text" name="city" id="city" placeholder="Your city..."/>
                    </div>

                    <div className="country-pc">
                      <div className="country">
                        <label htmlFor="country">Country</label>
                        <div className="input-container">
                        <FontAwesomeIcon icon={faGlobeAmericas}/>
                        <select name="country" id="country" >
                            <option className="select-placeholder" value="" disabled selected >Your country...</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                            <option value="Brasil">Brasil</option>
                            <option value="España">España</option>
                        </select>
                        </div>
                        </div>

                        <div className="pc">
                        <label htmlFor="postalcode">Postal code</label>
                        <div className="input-container">
                        <FontAwesomeIcon icon={faMailBulk}/>
                        <input type="text" name="postalcode" id="postalcode" placeholder="Your postal code..."/>
                        </div>
                        </div>
                    </div>

                    <div className="checkbox">                
                      <input type="checkbox" name="saveinfo" id="saveinfo"/>
                      <label htmlFor="saveinfo"> Save this information for next time</label>
                    </div>

                <button className="form-button">Continue</button>
            </div>
        )
    }
}



export default Form