import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { formatDate } from '../components/FormateDate';
import { AppContext } from '../context/Context';
import Popup from '../components/Popup';
import { fetchWithCache } from '../utils/SuspenseCache';
import Loading from '../components/Loading';
import Animation from '../utils/Animation';

const API_KEY = 'AIzaSyC-lScemTC3wraw7twyx7J1xiNetBUb-v0';
const PLAYLIST_IDS = ['PLtlw27LFl0AAqdzSWlCIeaUDM4z9OLolt', 'PLtlw27LFl0AAEnOB3U-qiQhhJx4yfW4k-', 'PLtlw27LFl0AAErBbDl6hfN375pCD4Zf_L', 'PLtlw27LFl0ACkxR5FujUm0WNB4DGLRk51'];

const fetchVideos = async () => {
  const getRandomPlaylistId = () => {
    const randomIndex = Math.floor(Math.random() * PLAYLIST_IDS.length);
    return PLAYLIST_IDS[randomIndex];
  };

  const playlistId = getRandomPlaylistId();
  const response = await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=9`
  );
  return response.data.items;

};

const Portfolio = () => {
  const { openPopup, open } = AppContext();
  const videos = fetchWithCache('videos', fetchVideos);
  const [selectedVideo, setSelectedVideo] = useState({ id: '', title: '' });

  const handleOpenPopup = (videoId, videoTitle) => {
    setSelectedVideo({ id: videoId, title: videoTitle });
    openPopup();
  };

  return (
    <div className="section-portfolio">
      <h2 className="section-title">Portfolio<span></span></h2>
      <div className="item-container">
        {videos.map((video) => (
          <div className="blog-card" key={video.id} onClick={() => handleOpenPopup(video.snippet.resourceId.videoId, video.snippet.title)}>
            <div className="card-head">
              <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title} />
              <span className="video-icon">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199" stroke="#fff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
            <div className="card-body">
              <div className="section-author">
                <div className="author">
                  <div className="avatar">
                    <img src={process.env.PUBLIC_URL + "/images/amit.jpg"} alt="amit" />
                  </div>
                  <div className="author-name">{video.snippet.videoOwnerChannelTitle}</div>
                </div>
                <div className="date">{formatDate(video.snippet.publishedAt)}</div>
              </div>
              <div className="card-title">
                <h3>{video.snippet.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <Popup videoId={selectedVideo.id} videoTitle={selectedVideo.title} />
      )}
    </div>
  );
};

const PortfolioWithSuspense = () => (
  <>
    <Animation />
    <Suspense fallback={<Loading title="Portfolio" repeateItem="9" />}>
      <Portfolio />
    </Suspense>
  </>

);

export default PortfolioWithSuspense;