import React, { useState, useRef, useEffect } from "react";
import wave from "../../assets/img/wave.svg"
import play from "../../assets/img/play.svg"
import pause from "../../assets/img/pause.svg"
import { convertCurrentTime } from "../../utils/helpers/index";
import './AudioMessage.scss';



const AudioMessage = ({audio}) => {
    const audioRef = useRef(null);
    const progressBar = useRef(null);
    const [isPlay, setIsPlay] = useState(false)
    const [widthProgressBar, setWidthProgressBar] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const styleProgressBar = () => progressBar.current.style.width = `${widthProgressBar}%`;
    
    function endProgressState () {
        setCurrentTime(0);
        setWidthProgressBar(0);
        progressBar.current.style.width = `${0}%`
        setIsPlay(false);
    }

    function progressState() {
            const width = parseInt(100 / audioRef.current.duration * audioRef.current.currentTime);
            setCurrentTime(audioRef.current.currentTime);
            setWidthProgressBar(width);
            styleProgressBar()
    }

    useEffect(() => {
        audioRef.current.addEventListener('playing', () => {
            setIsPlay(true);
        })
        audioRef.current.addEventListener('timeupdate', progressState);
        audioRef.current.addEventListener('ended', endProgressState)
    }, [widthProgressBar])
    
    const toggleAudio = (vol="0.02") => {
        if(!isPlay) {
            audioRef.current.volume = vol;
            audioRef.current.play()
            setIsPlay(true);
        } else {
            audioRef.current.pause()
            setIsPlay(false);
        }  

    }
   
    return (
        <div className="message--audio">
            <audio ref={audioRef} src={audio} preload={"true"}/>
            <div ref={progressBar}   id="progress__bar" className="message--audio__progress"></div>
            <div className="message--audio__info">
                <div className="message--audio__btn">
                    <button onClick={() => toggleAudio("0.02")}>
                        <img className={!isPlay ? 
                            "message--audio__play" 
                            : 
                            "message--audio__pause"} 
                            src={!isPlay ? play: pause}  
                            alt="play_message" 
                            />
                    </button>
                </div>
                <div className="message--audio__wave">
                    <img src={wave} alt="wave" />
                </div>
                <div className="message--audio__time">
                    {convertCurrentTime(currentTime)}
                </div>
            </div>
        </div>
    )
}

export default AudioMessage;


