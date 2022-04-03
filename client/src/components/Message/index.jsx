import React from "react";
import './Message.scss';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from 'date-fns/locale';
import className from 'classnames';
import readed from '../../assets/img/readed.svg'
import noreaded from '../../assets/img/noreaded.svg'
import { Typing } from "../index";
const Message = ({avatar,user, text, date, isMe, isReded, attachments, isTyping}) => {
    const checkingMsg = () => {
        if(isMe === undefined) {
            return '';
        }
        if(isMe && isReded) {
            return readed;
        }
        return noreaded;
    }
    const resChicking =  checkingMsg();

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
                        {resChicking ? <img src={resChicking} alt="check"/> : ''}
                    </div>
                    <div className="message__attachments">
                    {attachments ? attachments.map(item => (
                        <div className="message__attachment--item" key={item.url}>
                            <img src={item.url} alt={item.filename}/>
                        </div>
                    )) : ''}
                    </div>
                    {date && 
                        (   <span className="message__date">
                                {formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true, locale: ru })}
                            </span>
                        )
                    }
                </div>                
            </div>
        </div>
    )
};



export default Message;