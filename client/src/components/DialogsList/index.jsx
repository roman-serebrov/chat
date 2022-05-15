import React from "react";
import {DialogItem} from "../index"
import orderBy from "loadsh/orderBy"
import './DialogsList.scss'
import { Empty } from 'antd';

const DialogsList = ({items, userId}) => {
    return (
        items.length ?
            <div className="dialogs__list">
                {orderBy(items, (item)  => item.message["created_at"], ["desc"]).map(item => createItem(item, userId))}
            </div>
        : <Empty style={{marginTop: "5px"}} description="Диалог не найден..."/>
    )
}


function createItem({message}, userId) {
   return (
        <DialogItem
            key={message.user._id} 
            message={message}
            isMe={message.user._id === userId}
            {...message}
        />
    );
};
export default DialogsList;