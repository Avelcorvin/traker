// const { useEffect, useState, useCallback } = require("react");





export const useHttp = () => {
    const request = async (URI:string,meth:string="GET",BODY={},HEAD={}) => {
    let fetchBody:any={};
    try {
        if(BODY){
            BODY=JSON.stringify(BODY)
            HEAD={
                ...HEAD,
                "content-type": "application/json; charset=utf-8"
            }
        }
        if(meth==='GET'){
            fetchBody.method=meth;
            console.log("fetchBody",fetchBody)
        }
        if(meth==='POST'){
            fetchBody.method=meth;
            fetchBody.body=BODY;
            fetchBody.headers=HEAD;
        }
        const response = await fetch(URI,fetchBody )
        // console.log(response)
        const data = await response.json()
        // console.log(data)
        return data;
    } catch (error) {
    }
        }
    return{ request }
}