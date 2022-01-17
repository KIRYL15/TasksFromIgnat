import React from 'react'
import style from './Message.module.css'


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={style.messageStyle}>
            <div className={style.imgBlock}>
                <img className={style.gomer} src={props.avatar} alt={'avatar'}/>

                <div className={style.window}>
                    <div className={style.name}> {props.name}</div>
                    <div className={style.message}> {props.message}</div>
                    <div className={style.time}> {props.time}</div>
                </div>
            </div>
        </div>
    )
}

