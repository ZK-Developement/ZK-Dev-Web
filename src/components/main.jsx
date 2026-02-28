import icon from "../assets/images/icon.svg"
import Message from "../assets/images/messageicon.svg"
import Offer from "../assets/images/offericon.svg"
import Onas from "../assets/images/kontact.png"
import Dartrans from "../assets/images/dartrans.png"
import StarSystem from "../assets/images/StarSystemlogo.svg"
import Placeholder from "../assets/images/placeholderlogo.svg"
import compPlac from "../assets/images/monitorplaceholder.svg"
import tabPlac from "../assets/images/tabletplaceholder.svg"
function MainS (setStatic)
{
    return(
        <>
            <center>
                <main>
                    <nav>
                    <div className="flex" id="onas">
                        <div className="lewo">
                            <img src={Onas} alt="" />
                        </div>
                            <div>
                                <div className="companydivb">
                                        <img src={icon} alt="icon" />
                                        <p className="pnag">Developement</p>
                                </div>
                            <p className="nag">Napiszemy twoją Strone od podstaw .</p>
                            <p className="text">Zajmujemy sie tworzeniem nowoczesnych stron internetowych oraz projektami designu strony.</p>
                            <div className="flexb">
                                <button className="btn">
                                    <img src={Message} alt="icon" />
                                    Zobacz Oferty
                                </button>
                                <button className="btn">
                                    <img src={Offer} alt="icon" />
                                    Napisz do nas
                                </button>
                            </div>
                        
                        </div>
                    </div>
                    <div className="div">
                        <p className="pnagl">Nasze usługi :</p>
                        <hr className="linia" />

                        <div className="flex">
                            <div className="uslugi">
                                <p className="pnag">Projektowanie Design/UI Strony</p>
                                <p className="text">Projektujemy nowoczesne oraz przejrzyste interfejsy strony.</p>
                            </div>
                            <div className="uslugi">
                                <p className="pnag">Profestionalna strona internetowa</p>
                                <p className="text">Używamy najnowszych technologii, zapewniając najwyższą jakość.</p>
                            </div>
                            <div className="uslugi">
                                <p className="pnag">Tworzenie Grafik dla Firm</p>
                                <p className="text">Możemy stworzyć dla twojej Firmy Logo lub czego tylko bedziesz potrzebować .</p>
                            </div>
                            <div className="uslugi">
                                <p className="pnag">Projektowanie Mobile Design/UI</p>
                                <p className="text">Projektujemy mobile style strony aby była kopmpatybilna z każdym urządzeniem.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="nag">Firmy które nam zaufały :</p>
                        <div className="zaufal">
                            <div className=" flexzauf">
                                <a href=""><img src={Placeholder} alt="dardtranslogo" /></a>
                                <a href=""> <img src={Placeholder} alt="starsystemlogo" /></a>
                            </div>
                        </div>
                        
                    </div>
                    </nav>
                </main>
            </center>
            <center>
                <main className="main-portfolio">
                    <div className="div1">
                        <p className="text">Dowiedz się jak</p>
                        <p className="nag">Tworzymy rozwiązania, które zwiększają Twoją widoczność w sieci</p>
                    </div>
                    <div className="companyad">
                        <div className="lewoc" >
                            <p className="text">Nazwa Firmy  <span className="category">Sklep internetowy</span> <span className="category">Firma osobista</span></p>
                            <p className="nag">Nowoczesny sklep internetowy “Nazwa Firmy”,<br /> pokochany przez klientów</p>
                            <div className="companyopis">
                            <hr className="companyline"></hr>
                            <p className="text">Klient przyszedł do nas z prośbą o odświeżenie ich sklepu internetowego.<br />
                                                Udało nam się w pełni sprostać jego wymaganiom,<br />
                                                co zaowocowało znacznym wzrostem konwersji i sprzedaży.</p>
                            </div>
                        </div>
                        <div className="prawoc">
                            <img src={compPlac} alt="companyview" />
                        </div>
                    </div>
                    <div className="companyad">
                        <div className="lewoc" >
                            <p className="text">Nazwa Firmy  <span className="category">Sklep internetowy</span> <span className="category">Firma osobista</span></p>
                            <p className="nag">Nowoczesny sklep internetowy “Nazwa Firmy”,<br /> pokochany przez klientów</p>
                            <div className="companyopis">
                            <hr className="companyline"></hr>
                            <p className="text">Klient przyszedł do nas z prośbą o odświeżenie ich sklepu internetowego.<br />
                                                Udało nam się w pełni sprostać jego wymaganiom,<br />
                                                co zaowocowało znacznym wzrostem konwersji i sprzedaży.</p>
                            </div>
                        </div>
                        <div className="prawoc">
                            <img src={tabPlac} alt="companyview" />
                        </div>
                    </div>
                    <div className="companyad">
                        <div className="lewoc" >
                            <p className="text">Nazwa Firmy  <span className="category">Sklep internetowy</span> <span className="category">Firma osobista</span></p>
                            <p className="nag">Nowoczesny sklep internetowy “Nazwa Firmy”,<br /> pokochany przez klientów</p>
                            <div className="companyopis">
                            <hr className="companyline"></hr>
                            <p className="text">Klient przyszedł do nas z prośbą o odświeżenie ich sklepu internetowego.<br />
                                                Udało nam się w pełni sprostać jego wymaganiom,<br />
                                                co zaowocowało znacznym wzrostem konwersji i sprzedaży.</p>
                            </div>
                        </div>
                        <div className="prawoc">
                            <img src={compPlac} alt="companyview" />
                        </div>
                    </div>
                    
                </main>
            </center>
        </>

    );
}
export default MainS;