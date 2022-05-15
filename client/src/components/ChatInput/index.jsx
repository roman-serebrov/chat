import React, { useEffect, useState } from "react";
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './ChatInput.scss'

export default () => {
    const [value, setValue] = useState('');
    const getValue = (e) => setValue(e.target.value);
    const stylesCmp = { fontSize: '26px', cursor: 'pointer'}
    return (
        <div className="chat__message--input">
                    <div className="chat__message--input--smile--btn">
                        <SmileOutlined  style={stylesCmp}/>
                    </div>
                    <div className="chat__message--input--block">
                        <Input onChange={getValue}  placeholder={"Введите сообщения"} />
                    </div>
                    <div className="chat__message--input--camera">
                        <CameraOutlined style={stylesCmp} />
                    </div>
                    {value ? 
                        <div className="chat__message--input--send">
                            <SendOutlined  style={stylesCmp}/> 
                        </div>
                        : <div className="chat__message--input--audio">
                        <AudioOutlined  style={stylesCmp}/> 
                    </div>
                    }
                    
        </div>
    )
}