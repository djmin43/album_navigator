import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

interface UserAuth {
    email: string;
    password: string;
}


const LoginForm = () => {
    const [userAuth, setUserAuth] = useState<UserAuth>({
        email: '',
        password: ''
    })
    // Dummy email and password
       const userAuthInfo = {
        email: 'test@test.com',
        password: 'test'
    }

    // Login fail handler
    const [errorMessage, setErrorMessage] = useState<any>('')

    // Auth 
    const auth = () => {
        if (userAuthInfo.email === userAuth.email && userAuthInfo.password === userAuth.password) {
            setErrorMessage('log in successful')
            console.log('log in successful')
        } else formValidation()
    }

    // Form Validations
    const formValidation = () => {
    // Email Validation REGEX
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // Make sure if the fields are not empty
    if (userAuth.email == '') {
        setErrorMessage('your email is empty')
    } else if (!re.test(String(userAuth.email).toLowerCase())) {
        setErrorMessage('please write proper type of email')
    } else if (userAuth.password == '') {
        setErrorMessage('your password is empty')
    }else if (userAuth.email && userAuth.password !== ''){
        setErrorMessage('please check if your email and password are correct')
    }
    }

    // Submit Form Control
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserAuth({
            ...userAuth,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        auth()
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

                <button>Log in</button>
            </form>
            {errorMessage}
        </div>
    )
}




export default LoginForm
