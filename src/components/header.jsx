import icon from "../assets/images/icon.svg"
function Header (setStatic){
    return (
        <>
        <center>
            <header className=" fade-in" style={{ transition: 10 , transitionDelay: "0.1s" }}>
                <a href="">
                <div className="companydiv">
                <img src={icon} alt="icon" />
                <p>Development</p>
                </div>
                </a>
                <div className="flex">
                    <ul className="navbar">
                        <a href="#onas" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.1s" }}><li>O Nas</li></a>
                        <a href="#portfolio" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.2s" }}><li>Portfolio</li></a>
                        <a href="#oferty" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.3s" }}><li>Oferty</li></a>
                        <a href="#projekty" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.4s" }}><li>Projekty</li></a>
                        <a href="#opinie" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.5s" }}><li>Opinie</li></a>
                        <a href="#faq" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.6s" }}><li>FAQ</li></a>
                        <a href="#kontakt" className=" fade-in" style={{ transition: 10 , transitionDelay: "0.7s" }}><li>Kontakt</li></a>
                    </ul>
                </div>
                <div className="StatusDiv fade-in" style={{ transition: 10 , transitionDelay: "0.7s" }}>
                    <p className="dot">●</p>
                    <p>Dostepni do Pracy</p>
                </div>
            </header>
            </center>
        </>
    );
}
export default Header;