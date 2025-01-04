import '../css/LandingPage.css'
import LoginPage from './LoginPage.jsx';
import {useRef, useState} from "react";

function LandingPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();

    function clickLogin() {
        setModalOpen(true);
    }

    return (
        <>
            <div id="banner">
                <div id="header">
                    <label id="logo">Lumos</label>
                    <button id="login" onClick={clickLogin}>Log in</button>
                </div>
                <p id="desc">The way you communicate fast as a light!</p>
            </div>

            {
                modalOpen &&
                <div className = {'modal-container'} ref = {modalBackground} onClick = {e => {
                if(e.target === modalBackground.current) {
                    setModalOpen(false);
                 }}
                } style = {{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <LoginPage></LoginPage>
                </div>
            }
        </>
    )
}

export default LandingPage