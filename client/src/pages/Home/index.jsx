import React from "react";
import {Message} from "../../components/";
const avatar1 = "https://sun9-71.userapi.com/s/v1/if1/G7TQPiF2plZb-9DfNK75ZtyMCZF_7MbTC9Bqa-eJDtB_jfGUncHx9QKkuqayHkeOcykmmcVH.jpg?size=100x100&quality=96&crop=252,11,583,583&ava=1";
const avatar2 = "https://sun9-40.userapi.com/s/v1/ig2/BY-IBHjXtE3aI94B1PkJFdzVr28npI9_Ga02sm8EjBd1jiCBCCHIFb_oXTILVeMXS2_e0QUUr82gve-3dK_M8fIQ.jpg?size=100x100&quality=96&crop=0,0,1439,1439&ava=1";

const user1 = {
    firstName: 'Сергей'
}
const user2 = {
    firstName: 'Гена'
}
const Home = () => {
    return (
        <div className="home">
            <Message avatar={avatar1} 
                user={user2} 
                text="loHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello" 
                date={new Date().toString()} 
                attachments={
                    [
                        {
                            filename: 'image.jpg',
                            url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                        },
                        {
                            filename: 'image.jpg',
                            url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
                        },
                        {
                            filename: 'image.jpg',
                            url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
                        }
                    ]
                }
            />
            <Message 
            avatar={avatar2} 
            user={user1} 
            text="Hnot go workHello Gena i am not go work"
            date={new Date().toString()} 
            isMe={true}
            isReded={false}
            />
            <Message 
            avatar={avatar1} 
            user={user2} 
            text={null}
            date={null} 
            isMe={false}
            isReded={false}
            isTyping={true}
            />
            <Message 
            avatar={avatar2} 
            user={user1} 
            attachments={
                [
                    {
                        filename: 'image.jpg',
                        url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
                    }
                ]
            }
            text={null}
            isMe={true}
            isReded={false}
            />
        </div>
    )
};

export default Home;

