import '../css/LoginPage.css'

function LoginPage() {

    return (
        <>
            <div id = "loginMain">
                <h1 id = "loginText">Log in</h1>
                <div id = "loginMarginDiv">
                    <div>
                        <input id="inputID" placeholder="Place Your ID Here"></input>
                    </div>
                    <div>
                        <input id="inputPassword" type="password" placeholder="Place Your Password Here"></input>
                    </div>
                </div>
                <button id="loginButton">Sign in</button>
            </div>
        </>
    )
}

export default LoginPage
