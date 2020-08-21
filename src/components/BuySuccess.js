import React, { useContext } from 'react'
import { Result } from 'antd'
import { withRouter } from 'react-router-dom';
import { SearchContext } from '../contexts/SearchContext'


function BuySuccess(props) {
    let {test} = useContext(SearchContext)
    const allFn = () => {
        props.history.push('/')
        test = true
    }
    setTimeout(allFn, 3000);
    return (
        <div>
            <Result
                status="success"
                title="Successfully Purchased!"
                subTitle="thank you for Purchased You are always welcomes"
            />
        </div>
    )
}

export default withRouter(BuySuccess)
