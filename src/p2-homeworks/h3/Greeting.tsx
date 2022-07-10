import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.inputClass + ' ' + s.error : s.inputClass // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <span className={s.textError}>{error}</span>
            </div>
            <button className={s.btn} onClick={addUser}>add</button>
            <span className={s.value}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
