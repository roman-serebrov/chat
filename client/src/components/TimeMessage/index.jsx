import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ru } from 'date-fns/locale';

const TimeMessage = ({date}) => (
    <span className="message__date">
        {formatDistanceToNow(date, { addSuffix: true, locale: ru })}
    </span>
)


export default TimeMessage;