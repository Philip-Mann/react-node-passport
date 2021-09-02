import './google-button.css';

const GoogleButton = () => {

    return (
        <div className="login-button google">
                <a href="/auth/google">
                    <i className="fab fa-google"></i>
                    Google
                </a>
        </div>
    )
}

export default GoogleButton;