import React, { useState } from 'react'
import Cookies from 'js-cookie'

interface UserAuth {
    email: string;
    password: string;
}


const Authentication = () => {
    const [userAuth, setUserAuth] = useState<UserAuth>({
        email: '',
        password: ''
    })

    // Login fail handler
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit =(e: any) => {
        e.preventDefault()
        if (userAuth.email == userAuthInfo.email && userAuth.password == userAuthInfo.password) {
            console.log('success')
        }  else {
            setErrorMessage('Please check your email and password')
        }
    }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserAuth({
            ...userAuth,
            [e.target.name]: e.target.value
        })
    }

    // Dummy email and password
    const userAuthInfo = {
        email: 'test@test.com',
        password: 'test'
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input name="email" type="text" value={userAuth.email} onChange={handleChange}></input>
                </label>

                <label>Password:
                    <input name="password" type="password" value={userAuth.password} onChange={handleChange}></input>
                </label>

                <button>Hello</button>
            </form>
            {errorMessage}
        </div>
    )
}

export default Authentication
