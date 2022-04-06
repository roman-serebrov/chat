import React from "react";
import classNames from "classnames";
import './DialogItem.scss';
import {TimeMessage, IsReadeMessage} from "../index";

const setAvatar = ({avatar, firstName}) => {
    console.log(avatar, firstName)
    if(avatar) return avatar;
    return firstName.charAt(0).toUpperCase();
}

const DialogItem = ({user, message}) => {
    console.log(user.avatar, message)
    const getAvatar = setAvatar(user);
    return (
        <div className={!user.isOnline ? "dialog__item" : "dialog__item--online"}>
            <div className="dialog__item--avatar">
                {getAvatar.length > 1 
                            ? 
                            <img src={user.avatar} alt={user.firstName}/>
                            : 
                            <span className="dialog__avatar--name">
                                {getAvatar}
                            </span>
            }
                
            </div>
            <div className="dialog__item--user--info">
                <div className="dialog__item--top">
                    <div className="dialog__item--user--name">
                        <b>{user.firstName}</b>
                    </div>
                    <div className="dialog__item--time">
                        <TimeMessage />
                    </div>
                </div> 
                <div className="dialog__item--list">
                    <div className="dialog__item--button">
                        <p className="clip">{message.text}</p>
                    </div>
                    <div className="dialog__item--count">
                        {message.noIsReadeMessage.length ? <span>{message.noIsReadeMessage.length}</span> : ''}
                    </div>
                    <IsReadeMessage isMe={true} isReded={true} count={message.noIsReadeMessage.length}/>
                </div>
            </div>
        </div>
    )
};


export default DialogItem