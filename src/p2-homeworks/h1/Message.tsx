import React from 'react'
import s from './Message.module.css'

interface MessageType {
    avatar: string,
    name: string,
    message: string,
    time: string | null,
}

const Message: React.FC<MessageType> = ({avatar, name, message, time}) => {

    return (
        <div className={s.message}>
            <img className={s.avatar} src={avatar} alt='avatar'/>
            <div className={s.angle}></div>
            <div className={s.content}>
                <h1 className={s.name}>{name}</h1>
                <div className={s.text}>{message}</div>
                <div className={s.time}> {time} </div>
            </div>
        </div>
    )
}

export default Message
