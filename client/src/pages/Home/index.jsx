import React from "react";
import {Message, DialogItem} from "../../components/";
const avatar1 = 'https://sun9-40.userapi.com/s/v1/ig2/4ELPcYIPiS6rM6M-s47OivEOs_bP_UakP_lpJ5sElri6wRLNwm4HVLxt61nsi5rdffSPh3C2G-FeaXg7VzHV6-yn.jpg?size=200x200&quality=96&crop=0,0,1439,1439&ava=1'
const user1 = {
    user: {
        firstName: 'Достоевский',
        avatar: avatar1,
        isOnline: true
    },
    message: {
        text: 'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михаил, Федор, Варвара, Анна',
        isReded: false,
        created_at: new Date(),
        noIsReadeMessage: ['hello', 'whery', 'whery','whery'] 
    }
}
const user3 = {...user1, user: {...user1.user, isOnline: false}}
const user2 = {
    user: {
        firstName: 'Гена',
        avatar: null,
    },
    message: {
        text: 'Здарова',
        isReded: false,
        created_at: new Date()
    }
}
const Home = () => {
    return (
        // <div className="home">
        //     <Message avatar={avatar1} 
        //         user={user2} 
        //         text="loHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello" 
        //         date={new Date().toString()} 
        //         attachments={
        //             [
        //                 {
        //                     filename: 'image.jpg',
        //                     url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
        //                 },
        //                 {
        //                     filename: 'image.jpg',
        //                     url: 'https://source.unsplash.com/100x100/?random=2&nature,water'
        //                 },
        //                 {
        //                     filename: 'image.jpg',
        //                     url: 'https://source.unsplash.com/100x100/?random=3&nature,water'
        //                 }
        //             ]
        //         }
        //     />
        //     <Message 
        //     avatar={avatar1} 
        //     user={user1} 
        //     attachments={
        //         [
        //             {
        //                 filename: 'image.jpg',
        //                 url: 'https://source.unsplash.com/100x100/?random=1&nature,water'
        //             }
        //         ]
        //     }
        //     text={null}
        //     isReded={false}
        //     />
        //     <Message 
        //     avatar={avatar1} 
        //     user={user2} 
        //     text={null}
        //     date={null} 
        //     isReded={false}
        //     isTyping={true}
        //     />
        //      <Message 
        //     avatar={avatar2} 
        //     user={user2} 
        //     text={"hello"}
        //     date={null} 
        //     isReded={false}
        //     isTyping={false}
        //     isMe={true}
        //     isReded={false}
        //     />
        // </div>
        // <Dialogs item={[
        //     user1
        // ]}/>
        <div>
        <DialogItem {...user3}/>
        <DialogItem {...user1}/>
        <DialogItem {...user1}/>
        </div>
    )
};

export default Home;

