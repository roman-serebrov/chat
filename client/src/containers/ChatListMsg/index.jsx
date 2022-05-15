import React, { useState } from "react";
import { Message, ChatInput  } from "../../components/index";
import {parseISO, addDays} from "date-fns";
import aud from '../../assets/audio/audio_1.mp3';
import { EllipsisOutlined  } from '@ant-design/icons';
import RenderMessages from "../RenderMessages";

import './ChatListMsg.scss'; 

const avatar1 = 'https://sun9-40.userapi.com/s/v1/ig2/4ELPcYIPiS6rM6M-s47OivEOs_bP_UakP_lpJ5sElri6wRLNwm4HVLxt61nsi5rdffSPh3C2G-FeaXg7VzHV6-yn.jpg?size=200x200&quality=96&crop=0,0,1439,1439&ava=1';

const ChatListMsg = () => {
    const [isOnline, setIsOnline] = useState(true)
    return (
        <div key={'10'} className="chat__list--message">
            <div className="chat__message--username">
                <h3 className={isOnline ? "chat__status--user--online" : "chat__status--user"}>Достаевский</h3>
                <div className="chat__massage--option--wrapper">
                    <div className="chat__massage--option">
                        <EllipsisOutlined style={{fontSize: "35px"}}/>
                    </div>
                </div>
            </div>
            <div className="chat__message--content">
                <RenderMessages />
                <ChatInput />
            </div>
        </div>
    )
};

export default ChatListMsg;