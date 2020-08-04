import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

export default function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h4>@rocktim</h4>
                <p>This is a description</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>Hello</p>
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
