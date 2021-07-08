import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) =>(
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Naresh React is back", 'Top news - 9999 readers')}
            {newsArticle("CoronaVirus: UK updates", "Top news-886 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto-8000 readers")}
            {newsArticle("Is Redux too good?", "Code- 123 readers")}
            {newsArticle("Naresh React launched?!", "Top news-6983 readers")}
        </div>
    )
}

export default Widgets
