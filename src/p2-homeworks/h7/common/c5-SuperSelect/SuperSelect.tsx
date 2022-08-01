import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react'
import s from './../c5-SuperSelect/SuperSelect.module.css'
type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <option className={s.option} key={i}>{o}</option>
    )) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select className={s.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
