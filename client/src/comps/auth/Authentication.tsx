import LoginForm from './LoginForm'
import Logout from './Logout'
import Cookies from 'js-cookie'


const Authentication = () => {

    return (
        <div>
            {Cookies.get('member') === 'success' ? 
            <div>
                <h1>Welcome member!</h1>
                <Logout />
            </div>
            : <LoginForm />
            }
        </div>
    )
}

export default Authentication
