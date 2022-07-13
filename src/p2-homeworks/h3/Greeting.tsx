import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number
    handlerBlurCallback: () => void// need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, handlerBlurCallback} // деструктуризация пропсов
) => {
    const inputClass = error === '' ? s.inputClass : s.inputClass + ' ' + s.error   // need to fix with (?:)
    const disable = name.length < 2
    const handlerBlur = () => handlerBlurCallback()
    return (
        <div className={s.wrapper}>
            <div>
                <input onBlur={handlerBlur}
                       value={name}
                       onChange={setNameCallback}
                       className={inputClass}/>
                <span className={s.textError}>{error}</span>
            </div>
            <button disabled={disable} className={s.btn} onClick={addUser}>add</button>
            <span className={s.value}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
