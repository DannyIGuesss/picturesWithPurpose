import {Link} from 'react-router-dom'

import '../css_files/mainPage.css'
const MainPage = (props) => {
    return (
        <div>
            <nav>
            <div className = 'title'>
                <h1>Pictures With Purpose</h1>
                <h2>hi</h2>
            </div>
            <div className="headerLinks">
                <ul>
                    <li className="hlinks">Discord</li>
                    <li className="hlinks">Instagram</li>
                    <li className="hlinks">Twitter</li>
                    <li className="hlinks">Twitch</li>
                    <li className="hlinks">About Me</li>
                    <li className="hlinks"><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default MainPage