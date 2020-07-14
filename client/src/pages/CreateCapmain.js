import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hooks'


export const CreateCapmain = () => {
//constants
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
        // console.log(state)
    }

    return (
        <div className="campain"  >
            кампании
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
    )
}