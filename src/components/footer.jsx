import icon from "../assets/images/icon.svg"
import emicon from "../assets/images/emailicon.png"



function Footer ({setPage})
{
    return(
        <>
            <center>
                <footer>
                    
                    <div className="companydivl">
                        <img src={icon} alt="icon" />
                        <p className="btext">Development</p>
                    </div>
                    <div className="srodek">
                        <a href="#toppol"><p onClick={() => setPage("polityka")} className="polityka">Polityka Prywatnośći</p></a>
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