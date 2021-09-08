import React from 'react'
import Container1 from './Container1'
import './Axiom.css'
import Container2 from './Container2'
import NavBar from './Navbar/NavBar'
import SideBar from './SideBar/SideBar'
import Container3 from './Container3'
import NewShipment from './NewShipment/NewShipment'

const Axiom = () => {
    return (
        <div id="axiom-main-wrapper">
            <NavBar/>
            <div  style={{display:'flex'}}>
                <section>
                    <SideBar/>
                </section>
                <div className="dashboard">
                    <NewShipment/>
                    <div className="Containerss" style={{display:'flex',justifyContent:'space-evenly',padding:'1rem'}}>
                    <Container1/>
                    <Container2/>
                    <Container3/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Axiom
