import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const handlerBlurCallback = () => name.length <= 1 ? setError('name is require') : setError("")
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value)
        if (name.length <= 1) {
            setError("name is require")
        } else {
            setError("")
        }// need to fix
    }
    const addUser = () => {
        alert(`Hello ${name} !`)
        addUserCallback(name)
        // need to fix
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            handlerBlurCallback={handlerBlurCallback}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
