import React from "react";

const UnreadMessages = ({noIsReadeMessage}) => {
    return (
        <div className="dialog__item--count">
                {noIsReadeMessage.length ? <span>{noIsReadeMessage.length}</span> : ''}
        </div>
    )
}

export default UnreadMessages;