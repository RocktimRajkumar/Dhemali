import React from 'react'
import './VideoFooter.css'

export default function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h4>@rocktim</h4>
                <p>This is a description</p>
            </div>
            <img src="./music.png"
                alt="spinTheRecord"
                className="videoFooter_record" />
        </div>
    )
}
