import React from "react";


const ImgInMessage = ({attachments}) => { 
    return (
            attachments.map(item => (
            <div key={item.url} className="message__attachment--item" >
                <img src={item.url} alt={item.filename}/>
            </div>
            ))
        )
}


export default ImgInMessage;