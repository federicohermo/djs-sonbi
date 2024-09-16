/* eslint-disable */
import React from "react"
import "../styles/App.css"


export default function Foot(){
    return(
        <div  className="footer flex-column" id="app-footer" style={{}}>
            <div className="flex-row">
                <a className="appLinks" href="https://open.spotify.com/intl-es/artist/2ZP9h4JExGjfJ4UxDePwqo" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=11116&format=png&color=000000" alt="Spotify" className="darkModeIcon"/>
                </a>
                <a className="appLinks" href="https://www.youtube.com/@djssonbi/" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=37326&format=png&color=000000" alt="Youtube" className="darkModeIcon"/>
                </a>
                <a className="appLinks" href="https://www.instagram.com/djssonbi/" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000" alt="Instagram" className="darkModeIcon"/>
                </a>
                <a className="appLinks" href="https://www.tiktok.com/@djssonbi/" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=118638&format=png&color=000000" alt="Tiktok" className="darkModeIcon"/>
                </a>
            </div>
            <p style={{marginTop: "0.5rem"}}>DJs Sonbi</p>
        </div>
        )
}