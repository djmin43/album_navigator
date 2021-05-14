import React from 'react'
import LoginForm from './LoginForm'
import Logout from './Logout'
import Cookies from 'js-cookie'


const Authentication = () => {


    return (
        <div>
            {Cookies.get('member') === 'success' ? <Logout /> : <LoginForm />

}
        </div>
    )
}

export default Authentication
