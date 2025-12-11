import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Home.css';

// Mock data for videos. These paths would correspond to videos uploaded to your server.
// I've added a few more videos to demonstrate the scrolling and snapping behavior.


const Home = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/food", { withCredentials: true })
            .then(response => {

                console.log(response.data);

                setVideos(response.data.foodItems)
            })
            .catch(() => { /* noop: optionally handle error */ })
    }, [])
    return (
        <div className="reels-page">
            <div className="reels-feed" role="list">
                {videos.map((video) => (
                    <section key={video.id} className="reel" role="listitem">
                        <video className="reel-video" src={video.src} autoPlay loop muted playsInline preload="metadata" />
                        <div className="reel-overlay">
                            <div className="reel-overlay-gradient" aria-hidden="true" />
                            <div className="reel-content">
                                <p className="reel-description" title={video.description}>{video.description}</p>
                                <button className="reel-btn">Visit Store</button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Home;
     