import React, {useEffect} from 'react'
import Message from "./Message";
import AddMessageForm from "./AddMessageForm";

export interface messageDataType {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

const messageData = {
    avatar: 'https://i.pravatar.cc/300',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}


function HW1() {
    const [post, setPost] = React.useState<messageDataType[]>([])
    const [time, setTime] = React.useState < string | null > (null);
    useEffect(() => {
        let time = getCurrentTime();
        setTime(time);
    }, []);
    const getCurrentTime = () => {
        let today = new Date();
        let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
        let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }
    const addMessage = (text: string) => setPost([...post, {...messageData, message: text}])
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>, text: string) => {
        if (e.charCode === 13) {
            addMessage(text)
        }
    }
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)
            {post.map(m =>
                <Message
                    avatar={m.avatar}
                    name={m.name}
                    message={m.message}
                    time={time}
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
