import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CreateCapmain } from '../pages/CreateCapmain'
import { Statistick } from '../pages/Statisitck'
import { CapmainConfig } from '../pages/CampainConfigs'
import { Help } from '../pages/Help'
import { MainPage } from '../pages/MainPage'
import { Login } from '../pages/Login.page'
// import { Reidreckt } from './Redireckt'



export const Content = () => {
    return (
        <div className="main-right-block  indigo lighten-5">
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>

                <Route path="/create-campaing">
                    <CreateCapmain />
                </Route>

                <Route path="/campaing-config">
                    <CapmainConfig />
                </Route>

                <Route path="/statistick">
                    <Statistick />
                </Route>

                <Route path="/help">
                    <Help />
                </Route>

                
                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/*">
                    <div> Страница не найдена</div>
                </Route>

              </Switch>
              <div id="modal-window-wrapper"></div>
        </div>
    )
}


