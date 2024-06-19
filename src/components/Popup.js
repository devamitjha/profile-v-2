import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../redux/PopupSlice';

const Popup = ({ videoId, videoTitle }) => {
    const isOpen = useSelector((state) => state.popup.isOpen);
    const dispatch = useDispatch();
    return (
        <>
            {
                isOpen && (
                    <>
                        <div className="backdrop" onClick={() => dispatch(closePopup())}></div>
                        <div className="video-container box-shadow">
                            <div className="btn-close" onClick={() => dispatch(closePopup())}>X</div>
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


