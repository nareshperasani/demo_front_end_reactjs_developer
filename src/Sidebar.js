import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
import { selectUser } from './userSlice'

function Sidebar() {

    const user = useSelector(selectUser);
    const recentItem = (topic)=>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,555</p>
                </div>
                <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">2,444</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
