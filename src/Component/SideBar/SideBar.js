import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AlarmIcon from '@material-ui/icons/Alarm';
import SettingsIcon from '@material-ui/icons/Settings';
import './SideBar.css'
const SideBar = () => {
    return (
        <section className="sidebar-container">
            <div className="sidebar-items"><DashboardIcon/> &nbsp;&nbsp; Dashboard</div>
            <div className="sidebar-items"><LocalShippingIcon/> &nbsp;&nbsp; Ship</div>
            <div className="sidebar-items"><CalendarTodayIcon/> &nbsp;&nbsp; Booking</div>
            <div className="sidebar-items"><AlarmIcon/> &nbsp;&nbsp; History</div>
            <div className="sidebar-items"><SettingsIcon/> &nbsp;&nbsp; Setting</div>
        </section>
    )
}

export default SideBar
