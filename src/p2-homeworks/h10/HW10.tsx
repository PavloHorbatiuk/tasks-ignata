import React from 'react'
import { useDispatch } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { useAppSelector } from './bll/store';

function HW10() {
    const { isLoading } = useAppSelector(state => state.loading)
    const dispatch = useDispatch()
    // useSelector, useDispatch


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 1500)
        // dispatch
        // setTimeout
        console.log('loading...')
    };


    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
