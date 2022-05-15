import React from "react";
import {Chat, ChatListMsg } from "../../containers";
// import aud from '../../assets/audio/audio_1.mp3';
// import data from '../../data';



const Home = () => {
    return (
         <div className="home">
             <Chat />
             <ChatListMsg />
        </div>
    )
};
export default Home;
