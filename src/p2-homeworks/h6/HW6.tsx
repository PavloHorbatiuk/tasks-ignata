import React, { useEffect, useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { restoreState, saveState } from './localStorage/localStorage'
import s from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'
import pencil from './../../asssets/whitePencil.svg'
function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        saveState<string>('editable-span-value', "")
        setValue(restoreState('editable-span-value', value))
    }


    return (
        <div>
            <hr />
            homeworks 6

            {/*should work (должно работать)*/}
            <div  >
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ children: value ? undefined : ' enter text...' }}
                />
                <img className={s.svg} src={pencil} alt='pencil' />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr />
        </div>
    )
}

export default HW6
