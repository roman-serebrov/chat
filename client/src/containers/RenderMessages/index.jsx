import { Empty } from "antd";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Message } from "../../components";

const RenderMessages = () => {
    const items = useSelector(state => state.message.items);
    // console.log('items', items)
    const messages = useMemo(() => {
        return [...items]
    }, [items])
    console.log(messages)
    const flag = true
    return (
        flag ?
        messages.map(item => 
        <Message {...item}/>)
        : <Empty description="Начните общение..." />
    )
};

export default RenderMessages;