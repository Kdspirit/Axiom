import React from 'react'
import RefreshIcon from '@material-ui/icons/Refresh';
import './Container2.css'
import EditIcon from '@material-ui/icons/Edit';
import { Dropdown } from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';

const Container2 = () => {
    return (
        <div >
            <div className="container2">
                <div style={{display:'flex',justifyContent:'space-evenly', borderBottom:'1px solid lightgrey'}}>
                    <p style={{display:'flex'}}>LOCATEINV 5549475 &nbsp; <RefreshIcon style={{color:'skyblue'}}/></p>
                    <span>
                        <p style={{fontWeight:'bold'}}>SHIP DATE</p>
                        <p className="ship-date">7/20/21</p>
                    </span>
                    <span>
                        <p style={{fontWeight:'bold'}}>REFRENCE</p>
                        <p className="ship-date">176123</p>
                    </span>
                </div>
                <section className="sen-rev">
                    <section>
                        <div className="sender-section">
                            <p style={{display:'flex',fontWeight:'bold'}}>Sender <EditIcon/></p>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p>Deepak Sharma
                            <br/>
                            2nd Foundation
                            <br/>
                            3012 E Aelaxendar Rd 1002
                            <br/>
                            North Las Vegas, NV 89-30
                            <br/>
                            UNITED STATES
                            <br/>
                            70241552263
                        </p>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1"> Return address is different <br/> from sender address</label><br/>
                    </section>
                    <section>
                        <div className="sender-section">
                            <p style={{display:'flex',fontWeight:'bold'}}>Receiver <EditIcon/></p>
                            <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <p> @Ferya -for KAI
                            <br/>
                            <i style={{color:'gray'}}>company</i>
                            <br/>
                            89-921 Miapoula Place
                            <br/>
                            Waiane,HI 96792
                            <br/>
                            UNITED STATES
                            <br/>
                            <i style={{color:'gray'}}>phone</i>
                        </p>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">  &nbsp;Residential</label><br/>
                    </section>
                </section>
                <div className="Tabs">
                    <p style={{color:'blue',width:'10vw',height:'5vh'}}>Select Service</p>
                    <p style={{color:'blue',width:'10vw',height:'5vh'}}>Package</p>
                    <p className="detailsss" style={{color:'white',background:'blue',width:'10vw', borderRadius:'15px',height:'5vh'}}>Details</p>
                </div>

                <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'2vh'}}>
                    <div>
                        <p style={{marginBottom:'1vh'}}>units</p>
                    <Dropdown >
                        <Dropdown.Toggle style={{background:'white', color:'black'}}  variant="success" id="dropdown-basic">
                            In/lb/oz
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Scale</p>
                    <Dropdown>
                        <Dropdown.Toggle style={{background:'white', color:'black'}} variant="success" id="dropdown-basic">
                            Station
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                    <p style={{marginBottom:'1vh'}}>Scale Reading<SettingsIcon style={{color:'skyblue'}}/></p>
                    <input className="scaleReading" type="text" placeholder="---" style={{height:'5vh',borderRadius:'5px'}}/>
                    </div>
                </div>

                <div style={{display:'flex',marginTop:'2vh',justifyContent:'space-evenly'}}>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Custom Package Type</p>
                    <Dropdown>
                        <Dropdown.Toggle className="Pm-large" style={{background:'white', color:'black'}} variant="success" id="dropdown-basic">
                            PM Large Box
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>length</p>
                        <input className="len-wid" style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="12    &nbsp; &nbsp; in"/>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Width</p>
                        <input className="len-wid"  style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="9.25 &nbsp; &nbsp;  in"/>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>height</p>
                        <input  className="len-wid"  style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="7.5  &nbsp; &nbsp;   in"/>
                    </div>
                </div>

                <section style={{display:'flex', justifyContent:'space-evenly',marginTop:'2vh'}}>
                <div>
                        <p style={{marginBottom:'1vh'}}>Weight</p>
                        <input className="weight" style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="1.481 &nbsp; &nbsp; lb"/>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Ounces</p>
                        <input className="weight"  style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="     &nbsp; &nbsp;   oz"/>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Insurance Amt</p>
                        <input className="weight"  style={{width:'5vw',height:'5.5vh',borderRadius:'5px'}} type="text" placeholder="$20.00  &nbsp; &nbsp;   in"/>
                    </div>
                    <div>
                        <p></p>
                    <button className="Con-butyon"> +</button>
                    </div>
                </section>

                <section style={{display:'flex', justifyContent:'space-evenly',marginTop:'4vh'}}>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Total Quantity</p>
                        <p>5</p>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Total Weight</p>
                        <p>1.481 lb</p>
                    </div>
                    <div>
                        <p style={{marginBottom:'1vh'}}>Ounces</p>
                        <p>0 OZ</p>
                    </div>
                </section>

                <section style={{display:'flex', justifyContent:'space-evenly',marginTop:'2vh'}}>
                    <div>
                            <p style={{marginBottom:'1vh'}}>Content Description 180/250</p>
                        <Dropdown>
                            <Dropdown.Toggle className="stra" style={{background:'white', color:'black',fontSize:'inherit'}} variant="success" id="dropdown-basic">
                                Brust Blizzard
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div>
                        <p style={{marginBottom:'1vh'}}>Signature</p>
                        <Dropdown>
                            <Dropdown.Toggle  className="stra" style={{background:'white', color:'black',fontSize:'inherit'}} variant="success" id="dropdown-basic">
                                No Signature Requir
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                </section>
                <div>
                        <p className="Dangerous" style={{marginBottom:'1vh'}}>Dangerous Goods</p>
                        <Dropdown>
                            <Dropdown.Toggle className="Dangeros-drop" style={{background:'white', color:'black',fontSize:'inherit',width:'10vw'}} variant="success" id="dropdown-basic">
                            ---
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                
                    <section style={{display:'flex', justifyContent:'space-evenly',marginTop:'2vh'}}>
                        <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">  &nbsp;Dangerous Good</label><br/>
                        </div>
                        <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">  &nbsp;Contains Live bees </label><br/>
                        </div>

                    </section>
                    <div  style={{marginTop:'2vh',marginBottom:'2vh'}}>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1">  &nbsp;Send notification email </label><br/>
                        </div>

            </div>
            <div className="save-button">
                <button>Save Shipment Form</button>
            </div>
        </div>
    )
}

export default Container2
