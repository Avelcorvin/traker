import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateCapmain from '../pages/CreateCapmain.page'
import  Statistick  from '../pages/Statisitck.page'
import CampainConfigs from '../pages/CampainConfigs.page'
import Help from '../pages/Help.page'
import  MainPage  from '../pages/MainPage.page'
import { Login } from '../pages/Login.page'



export const Content = ():JSX.Element => {
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
                <CampainConfigs/>
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


