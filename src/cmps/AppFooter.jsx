import { FacebookIcon, PinterestIcon, TwitterIcon } from '../services/icon.service.jsx'



export function AppFooter() {


    return (
        <>
            <div className="footer-nav">
                <h2 className="logo">myteam</h2>

                <nav>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                    </ul>
                </nav>
            </div>

            <div className="contanct-info">
                <p>987 Hillcrest Lance</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us:<span>949-833-7432</span></p>
            </div>

            <div className="social-and-copyrights">
                <div className="social-icons"><FacebookIcon /> <PinterestIcon /> <TwitterIcon /> </div>
                <small>Copyright 2020. All Rights Reserved</small>
            </div>

        </>
    )
}