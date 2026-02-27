import icon from "../assets/images/icon.svg"
import emicon from "../assets/images/emailicon.png"

function Footer (setStatic)
{
    return(
        <>
            <center>
                <footer>
                    
                    <div className="companydivl">
                        <img src={icon} alt="icon" />
                        <p className="btext">Developement</p>
                    </div>
                    <div className="srodek">
                        <p className="mintext">©2026 ZK DEV. All rights reserved.</p>
                    </div>
                    <div className="companydivp">
                        
                        <img src={emicon} alt="icon" />
                        <p className="text">contactus.zk.business@gmail.com</p>
                      </div>
                </footer>
            </center>
        </>
    );
}
export default Footer;