import React from "react";


const ImgInMessage = ({attachments}) => {
   
    const lengthImgAttachments = attachments.length;
    
    return (
        lengthImgAttachments > 1 ? 
            attachments.map(item => (
            <div className="message__attachment--item" key={item.url}>
                <img src={item.url} alt={item.filename}/>
            </div>
            )
            )
            : <div className="message__attachment--item--one" key={attachments[0].url}>
                    <img src={attachments[0].url} alt={attachments[0].filename}/>
            </div>
            )
}


export default ImgInMessage;