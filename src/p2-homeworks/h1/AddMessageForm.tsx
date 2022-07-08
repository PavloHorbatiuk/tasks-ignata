import React, {ChangeEvent} from 'react'
import s from './Message.module.css'

interface AddMessageFormPropsType {
    addMessage: (message: string) => void
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>, text: string) => void
}

const AddMessageForm: React.FC<AddMessageFormPropsType> = ({addMessage, handleKeyDown}) => {
    const [message, setMessage] = React.useState('')
    const handlerChange = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)
    const handlerClick = () => {
        addMessage(message)
        setMessage('')
    }
    const handleEnterDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        handleKeyDown(e, message)
    }
    return (
        <div className={s.input}>
            <textarea onKeyPress={handleEnterDown} className={s.textarea} value={message}
                      onChange={handlerChange}/>
            <button disabled={message.length === 0} onClick={handlerClick} className={s.button}>Send</button>
        </div>
    )
}


export default AddMessageForm;
