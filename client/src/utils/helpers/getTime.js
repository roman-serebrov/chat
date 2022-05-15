import { format,isToday } from 'date-fns'

export default (time) => {
    if(isToday(time)) return  format(time, 'HH:mm');
    return format(time, "mm/dd/yyyy");
};

