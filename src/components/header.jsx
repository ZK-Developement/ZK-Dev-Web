import icon from "../assets/images/icon.svg"
function Header (setStatic){
    return (
        <>
        <center>
            <header>
                <a href="">
                <div className="companydiv">
                <img src={icon} alt="icon" />
                <p>Developement</p>
                </div>
                </a>
                <div className="flex">
                    <ul className="navbar">
                        <a href="#onas" ><li>O Nas</li></a>
                        <a href="#portfolio" ><li>Portfolio</li></a>
                        <a href="#oferty" ><li>Oferty</li></a>
                        <a href="#projekty" ><li>Projekty</li></a>
                        <a href="#opinie" ><li>Opinie</li></a>
                        <a href="#faq" ><li>FAQ</li></a>
                        <a href="#kontakt" ><li>Kontakt</li></a>
                    </ul>
                </div>
                <div className="StatusDiv">
                    <p className="dot">●</p>
                    <p>Dostepni do Pracy</p>
                </div>
            </header>
            </center>
        </>
    );
}
export default Header;