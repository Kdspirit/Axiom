import React from 'react'
import CubeImg from '../Assets/cube.png'
import Filter from '../Assets/filter.png'
import Refresh from '../Assets/refresh-arrow.png'
import RefreshIcon from '@material-ui/icons/Refresh';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import './Container.css'

const Container1 = () => {
    const Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return (
        <div className="container1">
            <div className="container1_wrapper">
                <img className="cube-image" src={CubeImg} alt=""/>
                <p className="num-of-order"> 80 Orders</p>
                <img className="filter-image" src={Filter} alt=""/>
                <img className="filter-image" src={Refresh} alt=""/>
            {/* <RefreshIcon/> */}
            </div>
            <section style={{paddingTop:'1vh'}}>
                <input className="search-box" type="search" placeholder="Search Orders..."/>
            </section>
            <div style={{height:'80vh',overflowY:'scroll'}}>
                {
                    Array && Array.map((element, index) =>{
                        return(
                            <div style={{borderBottom:'1px solid gray'}}>
                                <div className="name-date" >
                                    <p className="name">Roy Hofsetler</p>
                                    <p className="date">12/29/2021:44PM</p>
                                </div>
                                <div className="loc-hold">
                                    <p className="num-loc">1538284 
                                    <span style={{display:'flex',alignItems:'center'}}>
                                        <LocationOnIcon style={{color:'gray'}}/>
                                        <p style={{color:'skyblue'}}>us</p>
                                    </span>
                                    </p>
                                    <p className="holding">Maghma Holding</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Container1
