import React from 'react'
import {useSelector} from 'react-redux'

function Balance() {
    const balance = useSelector((store) => store.banking.balance)
    return (
        <div>
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance
