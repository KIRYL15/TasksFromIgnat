import React from 'react'
import App from "../../p1-main/m1-ui/u1-app/App";
import {Message} from "./Message";


const messageData = {
    avatar: 'https://stickers.wiki/static/stickers/homero_maximus10m/file_64991.webp',
    name: 'GOMER',
    message: 'npm start нажимал?',
    time: '22:00',
}


 function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}
export default HW1

