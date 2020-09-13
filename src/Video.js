import React, { useRef, useState } from 'react';
import './Video.css';
import "./first.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(play){
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                src={url}
                onClick={onVideoPress}
                //loop
                ref={videoRef}>

                </video>

            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    )
}

export default Video
