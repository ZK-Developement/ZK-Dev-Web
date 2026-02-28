import icon from "../assets/images/icon.svg"
import Message from "../assets/images/messageicon.svg"
import Offer from "../assets/images/offericon.svg"
import Onas from "../assets/images/monitor.png"
import Dartrans from "../assets/images/dartrans.png"
import StarSystem from "../assets/images/StarSystemlogo.svg"
import Placeholder from "../assets/images/placeholderlogo.svg"
import compPlac from "../assets/images/monitorplaceholder.svg"
import tabPlac from "../assets/images/tabletplaceholder.svg"
import webplace from "../assets/images/websiteplaaceholder.svg"

function MainS (setStatic)
{
    return(
        <>
        <br id="onas" />
            <center>
                <main>
                    <nav>
                    <div className="flex" >
                            <div className="onasdiv">
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

                        <div className="flex2">
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
            <br id="portfolio" />
            <center>
                <main className="main-portfolio" >
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
            <br id="oferty" />
            <center>
                <main className="main-oferty">
                    <p className="pnagl">Nasze Oferty : - wybierz to, co pasuje do Twojego biznesu.</p>
                        <hr className="liniaof" />
                        <div className="flex">
                            <div className="oferta">
                                <div className="of-gora">
                                <p className="nag">Standard</p>
                                <p className="nagl">100zł</p>
                                <p className="textl">✔ Do 2 podstron</p>
                                <p className="textl">✔ Podstawowy formularz kontaktowy</p>
                                <p className="textl">✔ Respoinsywność strony</p>
                                <p className="textl">✔ Czas realizacji do 5 dni</p>
                                </div>
                                <button className="btnof">Kontakt</button>
                            </div>
                            <div className="ofertarec">
                                <p className="recom">Najczęsciej Wybierane</p>
                                <div className="of-gora">
                                <p className="nag">Standard +</p>
                                <p className="nagl">240zł <span className="starac">300zł</span><span className="przec">-20%</span></p>
                                <p className="textl">✔ Do 5 podstron </p>
                                <p className="textl">✔ Responsywność </p>
                                <p className="textl">✔ Podpięcie pod domenę i hosting</p>
                                <p className="textl">✔ Czas realizacji do 7 dni</p>
                                </div>
                                <button className="btnof">Kontakt</button>

                            </div>
                            <div className="oferta">
                                <div className="of-gora">
                                <p className="nag">Premium</p>
                                <p className="nagl">999zł</p>
                                <p className="textl">✔ Customowy formularz</p>
                                <p className="textl">✔ Animacje i efekty UI</p>
                                <p className="textl">✔ Optymalizacja SEO</p>
                                <p className="textl">✔ Respoinsywność strony</p>
                                </div>
                                <button className="btnof">Kontakt</button>

                            </div>
                            <div className="oferta">
                                <div className="of-gora">
                                <p className="nag">Custom</p>
                                <p className="nagl">?zł</p>
                                <p className="textl">✔ Osobista wycena projektu</p>
                                <p className="textl">✔ 24/7 Kontakt</p>
                                <p className="textl">✔ Priorytetowa realizacja</p>
                                </div>
                                <div className="ofdol">
                                    <button className="btnof">Kontakt</button>
                                </div>
                                
                            </div>
                        </div>
                        <br id="projekty" />
                        <p className="pnagl">Gotowe Projekty : - wybierz to co pasuje do Twojego biznesu a my dostosujemy go do was.</p>
                        <hr className="liniagp" />
                        
                        <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Restauracji</p>
                                <p className="text">Strona internetowa dla restauracji </p>
                                <button className="btnof">Kontakt</button>
                                
                            </div>
                        </div>
                        <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Firmy</p>
                                <p className="text">Strona internetowa dla Firmy osobistej. </p>
                                <button className="btnof">Kontakt</button>
                                
                            </div>
                        </div>
                        <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Serwera</p>
                                <p className="text">Strona internetowa dla Serwera w grze. </p>
                                <button className="btnof">Kontakt</button>
                                
                            </div>
                        </div>
                </main>
            </center>
            <br id="opinie" />
            <br id="faq" />
            <br id="kontakt" />
            <p className="nag">Work in progres</p>
            <p className="text">Ta strona jest w trakcie tworzenia !</p>
        </>

    );
}
export default MainS;