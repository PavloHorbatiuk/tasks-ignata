import React from 'react'
import Header from './Header'
import RoutesPages from './RoutesPages'
import {BrowserRouter} from "react-router-dom";

function HW5() {
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            <BrowserRouter>

                <Header/>

                <RoutesPages/>

            </BrowserRouter>
        </>
    )
}

export default HW5
