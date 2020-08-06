import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import './VideoFooter.css'

export default function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h4>@{channel}</h4>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="await">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src="./music.png"
                alt="spinTheRecord"
                className="videoFooter_record" />
        </div>
    )
}
