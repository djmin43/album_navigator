import React from 'react'
import Cookies from 'js-cookie'

const Logout = () => {

    const logOut = () => {
        Cookies.remove('member')
        window.location.reload()
    }

    return (
        <div>
            <button onClick={() => logOut()}>Log out</button>
        </div>
    )
}

export default Logout
