import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const Affairs: React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback}) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter("all")
    } // need to fix
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={s.filterBtn} onClick={setAll}>All</button>
            <button className={s.filterBtn} onClick={setHigh}>High</button>
            <button className={s.filterBtn} onClick={setMiddle}>Middle</button>
            <button className={s.filterBtn} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
