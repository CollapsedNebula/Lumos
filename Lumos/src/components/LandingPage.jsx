import '../css/LandingPage.css'

function LandingPage() {

    function clickSignUp() {
        alert('click');
    }

    return (
        <>
            <div id="banner">
                <div id="header">
                    <label id="logo">Lumos</label>
                    <button id="signup" onClick={clickSignUp}>Sign up</button>
                </div>
                <p id="desc">The way you communicate fast as a light!</p>
            </div>
        </>
    )
}

export default LandingPage
