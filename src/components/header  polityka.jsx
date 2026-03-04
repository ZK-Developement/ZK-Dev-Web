import icon from "../assets/images/icon.svg"
function Headerpolityka ({setPage}){
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
                        <a><li  className="backtomain" onClick={() => setPage("home")}>Powrót na stronę</li></a>
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
export default Headerpolityka;