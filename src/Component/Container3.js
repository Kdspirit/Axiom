import React from 'react'
import USPS from '../Assets/usps.gif'
import './Container3.css'
import HelpIcon from '@material-ui/icons/Help';
import { Button } from 'react-bootstrap';

const Container3 = () => {
    return (
        <div className="container3">
            <div className="container3-wrapper">
                <div>
                    <p style={{marginBottom:'0vh'}}>USPS</p>
                    <p>Priority (1-3 Days)</p>
                </div>
                <img className="usps-img" src={USPS} alt="brokenimage"/>
            </div>
            <div className="flat-rate">
                <p  style={{marginBottom:'0vh'}}>Fadded Flat</p>
                <p>Rate Envelope</p>
            </div>
            <p className="sig-req">Adult Signature Required </p>
            <div className="base-rate">
                <p style={{marginLeft:'2vw'}}>Base Rate</p>
                <p className="Price" style={{marginRight:'1vw'}}>$8.00</p>
            </div>
            <div className="base-rate" style={{borderBottom:'1px solid lightgrey'}}>
                <p style={{marginLeft:'2vw'}}>Adult Signature</p>
                <p className="Price" style={{marginRight:'1vw'}}>$8.00</p>
            </div>
            <div className="Total-rate">
                <p style={{marginLeft:'2vw'}}>Total</p>
                <p className="Price" style={{marginRight:'1vw'}}>$20.00</p>
            </div>
            <div style={{color:'skyblue',textAlign:'start',marginLeft:'2vw'}}>
                <p style={{marginBottom:'0vh'}}>Quoted Weight/Types(s)</p>
                <p>1.481 ib/actual</p>
            </div>

            <div style={{textAlign:'start',marginLeft:'2vw'}}>
                <p style={{marginBottom:'0.5vh',color:'gray'}}>Estimated Arrival Date</p>
                <p>Tuesday, 8/10/21 5.00PM</p>
            </div>

            <section className="help-sec">
                <p><HelpIcon/> Did You Mean? </p>
                <p style={{color:'gray'}}>89-921 MAIAPOULA PL <br/> WAIANE, HI <br/> 96792-3912</p>
                <Button className="Button-last" style={{fontSize:'small',width:'14vw'}} variant="secondary">Use USPS Verified <br/> Address</Button>{' '}
            </section>

            <Button className="Button-last" style={{fontSize:'small',marginTop:'2vh',width:'14vw'}} variant="success">Ship USPS Priority <br/> 1-3(Days)</Button>{' '}
            
        </div>
    )
}

export default Container3
