import React from 'react'
import Hero from "../Component/Hero";
import Banner from "../Component/Banner"; 
import { Link } from 'react-router-dom'
const Shipments = () => {
    return (
        <Hero hero="shipmentsHero">
            <Banner title="Best checked shipments">
                <Link to='/' className="Btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        
    )
}

export default Shipments;
