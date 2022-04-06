import React from "react";
import './Message.scss';
import className from 'classnames';

import { ImgInMessage, TimeMessage, Typing, IsReadeMessage} from "../index";


const Message = ({avatar, user, text, date, isMe, isReded, attachments, isTyping}) => {
   

    return (
        <div className={className('message', {
            'message__me': isMe, 
            "message__is--typing": isTyping
        })}>
            <div className="message__avatar">
                <img src={avatar} alt="user_avatar" />
            </div>
            <div className="message__content">

                {text || isTyping ?
                <div className="message__bubble">
                {
                    text && (<p className="message__text">{text}</p>  )
                }
                {
                    isTyping && (<Typing />)
                }
                </div>
                : ''
                }
                
                <div className="message__check__info">
                    <div className="message__check">
                    <IsReadeMessage isMe={isMe} isReded={isReded}/>
                    </div>
                    <div className="message__attachments">
                    {attachments ? <ImgInMessage attachments={attachments}/> : ''}
                    </div>
                    {date && TimeMessage}
                </div>                
            </div>
        </div>
    )
};



export default Message;