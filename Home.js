import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <Hero>
        <Banner title="Saving Shipment" subtitle="Best Checking Shipment Service">
            <Link to="/shipments" className="Btn-primary"></Link>
        </Banner>
        </Hero>
    ); 
        
    
}
export default Home; 
