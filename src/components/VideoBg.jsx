import React, { useEffect } from 'react';
import "../Styles/Style.css";

const VideoBg = () => {


    useEffect(() => {
        const video = document.getElementById('video-bg');
        const playVideo = () => {
          video.play();
        };
        document.addEventListener('click', playVideo);
        return () => {
          document.removeEventListener('click', playVideo);
        };
      }, []);
    
    return ( 
        <>
        
        <div className="video-background">
        <video id="video-bg" autoPlay loop muted playsInline preload="auto">
          <source src='../images/background_.mp4' type="video/mp4" />
        </video>
        </div>

        </>
     );
}
 
export default VideoBg;