import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hooks'


export const CreateCapmain = () => {
//constants
const url="http://localhost:5000/link/t"
//hooks
    const[state,setState] =  useState({
        "campaing-name":"",
        "campaing-link":"",
        "campaing-end-link":""
    })
    const {request} = useHttp()
//handlers
    const formHandler = (EO) => {
       EO.preventDefault()
       request("/api/getdata","POST",state)
    }



    const inputHandler = (EO)=>{
        setState({
            ...state,
            [EO.target.name]:EO.target.value
        })
    }

    return (
        <div className="campain"  >
            <div className="campain-wrapper-create_block">
                <form method="post">
                    <label>
                        название кампании
                        <input
                            type='text'
                            name="campaing-name"
                            onChange={inputHandler}
                            />
                    </label>
                    <label>
                        URL
                        <input
                            type='text'
                            name="campaing-link"
                            onChange={inputHandler}
                            />
                    </label>
                    <label>
                        Конечная ссылка
                        <input
                            type='text'
                            name="campaing-end-link"
                            onChange={inputHandler}
                            />
                    </label>
                        <input
                            type='submit'
                            value='сохранить кампанию'
                            onClick={formHandler}
                        />
                </form>
                </div>
            <div className="campain-wrapper-info_block">
                    <ul>
                        <li key="1">Название Кампании: {state["campaing-name"]}</li>
                        <li key="2">Ссылка кампании: {url +"/"+state["campaing-link"]}</li>
                        <li key="3">Конечная ссылка: {state["campaing-end-link"]}</li>
                    </ul>
            </div>
        </div>
    )
}