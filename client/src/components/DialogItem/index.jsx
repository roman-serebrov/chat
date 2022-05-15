import React from "react";
import {SetAvatar, UnreadMessages} from "../index";
import {getTime} from '../../utils/helpers'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import './DialogItem.scss';
import { fetchMessage } from "../../API/";
const DialogItem = ({_id, message, isMe, onSelect}) => {
    const { user } = message;
    isMe= true
    const dispatch = useDispatch();
    const { fetchMessages } = fetchMessage;

    return (
        <Link to={`message?id=${_id}`}>
        <div onClick={() => dispatch(fetchMessages(_id))} className={!user.isOnline ? "dialog__item" : "dialog__item--online"} >
            <SetAvatar user={user}/>
            <div className="dialog__item--user--info">
                <div className="dialog__item--top">
                    <div className="dialog__item--user--name">
                        <b>{user.firstName}</b>
                    </div>
                    <div className="dialog__item--time">
                        {/* {getTime(message.created_at)} */}
                    </div>
                </div> 
                <div className="dialog__item--list">
                    <div className="dialog__item--button">
                        <p className="clip">{message.text}</p>
                    </div>
                    <UnreadMessages noIsReadeMessage={message.noIsReadeMessage ? message.noIsReadeMessage : []}/>
                </div>
            </div>
        </div>
        </Link>
    )
};


export default DialogItem