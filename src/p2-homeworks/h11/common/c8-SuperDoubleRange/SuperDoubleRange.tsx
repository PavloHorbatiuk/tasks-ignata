import React, { ChangeEvent } from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const minValue = value ? value[0] : []
    const maxValue = value ? value[1] : []
    const onChangeRangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value

        onChangeRange([+value, +value])
    }
    // сделать самому, можно подключать библиотеки

    return (
        <>
            DoubleRange
            <input
                name={'first'}
                value={value?.[0]}
                type={'range'}
                onChange={onChangeRangeCallback}

            />
            <input
                name={'two'}
                value={value?.[1]}
                type={'range'}
                onChange={onChangeRangeCallback}

            />
        </>
    )
}

export default SuperDoubleRange
