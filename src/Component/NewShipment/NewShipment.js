import React from 'react'
import { Dropdown } from 'react-bootstrap';
import './NewShipment.css'
const NewShipment = () => {
    return (
        <section className="new-shipment">
            <div className="ship-title">Ship</div>
            <div className="right-section">
            <button className="new-ship-btn">CREATE NEW SHIPMENT &nbsp; &nbsp; &nbsp; &nbsp;+</button>
            <Dropdown><span className="new-Printer">Printer : &nbsp; &nbsp;</span>
                <Dropdown.Toggle className="new-pronter-drop" variant="secondary" id="dropdown-basic">
                    (Print Via Browser)
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
        </section>
    )
}

export default NewShipment
