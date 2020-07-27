import React, { useCallback, useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hooks'
import { CampainList } from '../components/CampainList'
import { connect } from 'react-redux'
import { changeUrlParametr } from '../redux/actions/links.actions'

const CampainListWrapper = (props:any) => {

    const [state, setState] = useState(null);
    const { request } = useHttp();
    const getCampaing = useCallback(async () => {
        const response:any = await request('/api/getdata', 'GET');
        console.log("response:",response)
        if (response) {setState(response.data)}
    }, [request, setState]);

    useEffect(() => {
        getCampaing();
    }, []);
    return (<CampainList state={state} {...props} />)
}

interface if_State{
    urlQueryParametrs:string;
}

const mapStateToProps = (state:if_State) => ({
        urlQueryParametrs: state.urlQueryParametrs
})
const mapDispatchToProps = (dispatch:any) => ({
        addUrl: (text:string) => dispatch(changeUrlParametr(text)),
})

export const LeftMenu = connect(mapStateToProps,mapDispatchToProps)(CampainListWrapper)