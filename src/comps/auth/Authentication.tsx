import LoginForm from './LoginForm'
import Logout from './Logout'
import Cookies from 'js-cookie'
import '../../styles/Auth.css'

const Authentication = () => {

    return (
        <div className="auth">
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
