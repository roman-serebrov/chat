import React  from "react";
import readed from '../../assets/img/readed.svg'
import noreaded from '../../assets/img/noreaded.svg'


const IsReadeMessage = ({isMe, isReded, count}) => {

    const checkingMsg = () => {
        if(count > 1) {
            return ''
        }
        
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
        <div className="message__check">
                        {resChicking ? <img src={resChicking} alt="check"/> : ''}
        </div>
    )
};



export default IsReadeMessage;