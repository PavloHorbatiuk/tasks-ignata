import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import JuniorPlus from "./pages/Junior-plus";
import Junior from "./pages/Junior";


export enum PATH {
    PRE_JUNIOR = '/pre-junior',
    MAIN = '/',
    JUNIOR_PLUS = '/junior-plus',
    WRONG_PAGE = '/*',
    ERROR = '404',
    JUNIOR = "/junior"
    // add paths
}

function RoutesPages() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route index element={<PreJunior/>}/>
                <Route path={PATH.MAIN} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                < Route path={PATH.ERROR} element={<Error404/>}/>
                <Route path={PATH.WRONG_PAGE} element={< Navigate to={PATH.ERROR}/>}/>

            </Routes>
        </div>
    )
}

export default RoutesPages
