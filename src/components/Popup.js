import React from 'react';
import { AppContext } from '../context/Context';

const Popup = ({ videoId, videoTitle }) => {
    const {closePopup, open} = AppContext();
    return (
        <>
        {
            open && (
                <>
                    <div className="backdrop" onClick={closePopup}></div>
                    <div className="video-container box-shadow">
                        <div className="btn-close" onClick={closePopup}>X</div>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={videoTitle}
                        ></iframe>
                    </div>
                </>
            )
        }
       
        </>
    )
}

export default Popup


