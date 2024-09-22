// VideoSlideshow.js
import React, { useState } from 'react';
import './VideoSlideShow.css'; // Ensure you import your CSS file

const VideoSlideshow = () => {
    const videos = [
        "https://www.youtube.com/embed/bBC-nXj3Ng4",
        "https://www.youtube.com/embed/17QRFlml4pA",
        "https://www.youtube.com/embed/4dkl5O9LOKg",
        "https://www.youtube.com/embed/nHhAEkG1y2U",
        "https://www.youtube.com/embed/qOVAbKKSH10",
        "https://www.youtube.com/embed/jxLkbJozKbY",
        "https://www.youtube.com/embed/ZE2HxTmxfrI",
    ];

    const [currentVideo, setCurrentVideo] = useState(0);

    const nextVideo = () => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <div className="video-slideshow">
            <h2 className="text-center">Your Blockchain Guide</h2>
            <div className="video-container">
                <button className="nav-button left" onClick={prevVideo} disabled={currentVideo === 0}>
                    &lt; {/* Left arrow */}
                </button>
                <iframe
                    width="100%"
                    height="400"
                    src={videos[currentVideo]}
                    title={`Video ${currentVideo + 1}`}
                    frameBorder="0"
                    allowFullScreen
                />
                <button className="nav-button right" onClick={nextVideo} disabled={currentVideo === videos.length - 1}>
                    &gt; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
};

export default VideoSlideshow;
