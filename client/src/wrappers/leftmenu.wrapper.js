import React, { useCallback, useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hooks'
import { CampainList } from '../components/CampainList'
import { connect } from 'react-redux'
import { changeUrlParametr } from '../redux/actions/links.actions'

const CampainListWrapper = (props) => {

    const [state, setState] = useState(null);
    const { request } = useHttp();
    const getCampaing = useCallback(async () => {
        const response = await request('/api/getdata', 'GET');
        setState(response.data);
    }, [request, setState]);

    useEffect(() => {
        getCampaing();
    }, []);
    return (
        <CampainList
            state={state}
            {...props}
            />
    )
}


const mapStateToProps = (state /*, ownProps*/) => ({
        urlQueryParametrs: state.urlQueryParametrs
})
const mapDispatchToProps = dispatch => ({
        addUrl: (text) => dispatch(changeUrlParametr(text)),
})

export const LeftMenu = connect(mapStateToProps,mapDispatchToProps)(CampainListWrapper)