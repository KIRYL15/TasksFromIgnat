import React from 'react'
import {Header} from './Header'
import {RoutesApp} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                {/*в gh-pages лучше работает HashRouter*/}
                <Header/>
                <RoutesApp/>
            </HashRouter>
        </div>
    )
}

export default HW5
