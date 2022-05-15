import React, { useEffect, useState } from "react";
import className from 'classnames';
import { ImgInMessage, TimeMessage, Typing, IsReadeMessage, AudioMessage, MessageText} from "../index";
import SetAvatar from "../SetAvatar";
import './Message.scss';

const Message = ({ message, isMe, attachments, isTyping, audio=null, isRead}) => {
    console.log('msg', message)
    const [renderMessage, setRenderMessage] = useState([])

    useEffect(() => {
       setRenderMessage([{isTyping}, {audio}, {text: message.text}, {attachments: message.user.attachments}]);
    }, [message])

   const typeMessage = {
       isTyping: () => <Typing />,
       text: (text) => <MessageText key={text} text={text}/>,
       audio: (audio) => <AudioMessage key={'asd'}  audio={audio} />,
       attachments: (attachments) => <ImgInMessage key={attachments} attachments={attachments}/>
   };
   
    const message_type = (item) => {
        if(item.text && !item.isTyping) {
            console.log(item.text)
            return typeMessage.text(item.text);
        } 
        if(item.isTyping) {
            return typeMessage.isTyping(item.text); 
        }
        if(item.audio && !item.isTyping) {
            return typeMessage.audio(item.audio); 
        }  
        if(item.attachments && !item.isTyping) {
            return typeMessage.attachments(item.attachments); 
        }  
        return false;
    };
    return (
        <div className={className('message', {
            'message__me': isMe, 
            "message__is--typing": isTyping,
            "message__is--audio": audio
        })}>
            <div  className="message__avatar">
                <SetAvatar user={message.user} style="dialog__item--avatar--chat"/>
            </div>
            <div  className="message__content">
                <div  className="message__bubble">
                    <div className="message__type">
                        {isTyping 
                        ? 
                        <Typing /> 
                        :    
                        renderMessage.map(message_type)
                    }  
                    </div>
                </div>
                <div className="message__check__info">
                    <div className="message__time">
                        <TimeMessage date={new Date()} />
                    </div> 
                    <div className="message__check">
                        <IsReadeMessage isMe={isMe} isReded={isRead}/>
                    </div>  
                </div>  
                           
            </div> 
        </div>
    )
};



export default Message;