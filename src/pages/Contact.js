import React from 'react'

const Contact = () => {
    return (
        <div className="section-contact">
            <h2 className="section-title">Contact<span></span></h2>
            <div className="item-container">
                <h4>I'm Always Open To Discussing Produuct</h4>
                <h3>design work or partnerships.</h3>
                <form>
                    <div className="input-container">
                        <label htmlFor="name">Name*</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="message">Message*</label>
                        <textarea name="message"/>
                    </div>
                    <button type="submit" value="Submit" className="form-submit">Submit</button>
                </form>
            </div>            
        </div>
    )
}

export default Contact