import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from './../c5-SuperSelect/SuperSelect.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={s.label} key={name + '-' + i}>
            <input
                className={s.radio}
                value={o}
                {...restProps}
                type={'radio'}
                onChange={onChangeCallback}
                checked={value === o}
                name={'radio'}
            // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
