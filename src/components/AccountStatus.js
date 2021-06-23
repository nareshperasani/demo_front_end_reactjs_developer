import React from 'react'
import {useSelector} from 'react-redux'

function AccountStatus() {
    const isSavingAccount = useSelector(state => state.banking.isSavingAccount)
    return (
        <div>
            <h1>{isSavingAccount ? "Saving Account" : "Checking Account"}</h1>
        </div>
    )
}

export default AccountStatus
