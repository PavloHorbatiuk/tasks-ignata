import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

const Affair: React.FC<AffairPropsType> = ({affair, deleteAffairCallback}) => {
    const deleteCallback = () => {
        deleteAffairCallback(affair._id)
    }// need to fix
    const priorityClass = s.block + ' ' + s[affair.priority]
    return (
        <div className={s.wrapper}>
            <div className={s.title}>{affair.name}</div>
            <div className={priorityClass}>[{affair.priority}]</div>
            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
