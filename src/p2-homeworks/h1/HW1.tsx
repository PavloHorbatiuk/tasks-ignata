import React, {useEffect} from 'react'
import Message from "./Message";
import AddMessageForm from "./AddMessageForm";
import {v1} from "uuid";


export interface messageDataType {
    id: string
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const messageData = {
    id: v1(),
    avatar: 'https://i.pravatar.cc/300',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}


function HW1() {
    const [post, setPost] = React.useState<messageDataType[]>([])
    const [time, setTime] = React.useState <string>("");
    useEffect(() => {
        setTime(getCurrentTime())
    }, [])
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }
    const addMessage = (text: string) => {
        setTime(getCurrentTime());
        setPost([...post, {...messageData, message: text, time: time, id: v1()}])
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, text: string) => {
        if (e.charCode === 13) addMessage(text)
    }


    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)
            {post.map(m =>
                <Message
                    key={m.id}
                    avatar={m.avatar}
                    name={m.name}
                    message={m.message}
                    time={m.time}
                />)
            }
            <AddMessageForm
                handleKeyDown={handleKeyDown}
                addMessage={addMessage}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
