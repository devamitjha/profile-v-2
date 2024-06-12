import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PortfolioSlider = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    };
    const [videos, setVideos] = useState([]);
    const API_KEY = 'AIzaSyC-lScemTC3wraw7twyx7J1xiNetBUb-v0';
    const PLAYLIST_IDS = ['PLtlw27LFl0AAqdzSWlCIeaUDM4z9OLolt', 'PLtlw27LFl0AAEnOB3U-qiQhhJx4yfW4k-', 'PLtlw27LFl0AAErBbDl6hfN375pCD4Zf_L', 'PLtlw27LFl0ACkxR5FujUm0WNB4DGLRk51'];
  
    useEffect(() => {
        const getRandomPlaylistId = () => {
            const randomIndex = Math.floor(Math.random() * PLAYLIST_IDS.length);
            return PLAYLIST_IDS[randomIndex];
        };

        const fetchVideos = async () => {
            try {
                const playlistId = getRandomPlaylistId();
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=15`
                );
                setVideos(response.data.items);
                console.log(response);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
  
      fetchVideos();
    }, []);
    return (
        <div className="slider-container">
            <h2 className="section-title">Recent Work</h2>
            <Slider {...settings}>
                {videos.map((video) => (
                    <div className="video-card" key={video.id}>
                        <div className="card-head">
                            <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title} />
                            {/* <span className="video-icon">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default PortfolioSlider