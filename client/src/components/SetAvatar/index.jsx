import React from "react";
import { setAvatar } from "../../utils/helpers";


const SetAvatar = ({user, style}) => {
    const getAvatar = setAvatar(user);
    const styleAvatar = ({lighten, lighten2}) => {
        if(lighten === undefined && lighten2 === undefined) return;
        return {background: `linear-gradient(180deg, ${lighten}, ${lighten2})`};
    }
    return (
        <div style={styleAvatar(getAvatar[0])} className={`dialog__item--avatar ${style ? style : ''}`}>
            {getAvatar.length > 1 && !Array.isArray(getAvatar)
                        ? 
                        <img src={getAvatar} alt={user.firstName}/>
                        : 
                        <span className={`dialog__item--avatar--name`} >
                            {getAvatar[1]}
                        </span>
            }
    </div>
    )   
}

export default SetAvatar;