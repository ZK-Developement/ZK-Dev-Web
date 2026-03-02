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
import man from "../assets/images/man.jpg"
import { useState, useEffect } from "react";




function MainS (){
    const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("✔ Wiadomość wysłana.");
      e.target.reset();
    } else {
      setStatus("Błąd wysyłania.");
    }
  };

  // ⬇️ TU to wklejasz
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

    return(
        <>
        <br id="onas" />
            <center>
                <main className="main-glowna">
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
                                <a href="#oferty"><button className="btn">
                                    <img src={Message} alt="icon" />
                                    Zobacz Oferty
                                </button></a>
                                <a href="#kontakt"><button className="btn">
                                    <img src={Offer} alt="icon" />
                                    Napisz do nas
                                </button></a>
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
                                <a href=""><img src={Dartrans} alt="dardtranslogo" /></a>
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
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
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
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>

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
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>

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
                                    <a href="#kontakt"><button className="btnof">Kontakt</button></a>
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
                                <p className="pnag">250zł</p>
                                <p className="text">Strona internetowa dla restauracji </p>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
                                
                            </div>
                        </div>
                        <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Firmy</p>
                                <p className="pnag">250zł</p>
                                <p className="text">Strona internetowa dla Firmy osobistej. </p>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
                                
                            </div>
                        </div>
                        <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Serwera</p>
                                <p className="pnag">250zł</p>
                                <p className="text">Strona internetowa dla Serwera w grze. </p>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
                                
                            </div>
                        </div>
                </main>
            </center>
            <br id="opinie" />
            <center>
                <main className="main-opinie"> 
                    <div className="opinia">
                        <div className="lewoop"> <img src={man} alt="osoba" /></div>
                        <div className="prawoop">
                            <p className="nag">Grzegorz Armani</p>
                            <p className="pnag">Własciciel serwera minecraft</p>
                            <hr className="companylineop"></hr>
                            <p className="text">Współpraca z Firmą ZK Developement była bardzo przyjemna oraz szybka ,
                                 nie napotkałem zadnych problemow . polecam w 100% .</p>
                        </div>

                    </div>
                    <div className="opinia">
                        <div className="lewoop"> <img src={man} alt="osoba" /></div>
                        <div className="prawoop">
                            <p className="nag">Grzegorz Armani</p>
                            <p className="pnag">Własciciel serwera minecraft</p>
                            <hr className="companylineop"></hr>
                            <p className="text">Współpraca z Firmą ZK Developement była bardzo przyjemna oraz szybka ,
                                 nie napotkałem zadnych problemow . polecam w 100% .</p>
                        </div>
                        

                    </div>

                </main>
            </center>
            <br id="faq" />
            <center>
                <main className="main-faq">
                    <p className="nag">Najczęsciej zadawane pytania:</p>
                    <div class="faq-container">

                        <div class="faq-item">
                            <input type="checkbox" id="q1" />
                            <label for="q1" class="faq-question">
                            <p className="pnag">Czy pomagasz w zakupie domeny i hostingu?</p>
                            </label>
                            <div class="faq-answer">
                            <p className="textl">Tak. Dobiorę domenę i hosting, skonfiguruję wszystko i podłączę. Nie musisz się o nic martwić.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="q2" />
                            <label for="q2" class="faq-question">
                            <p className="pnag">Ile trwa wykonanie strony?</p>
                            </label>
                            <div class="faq-answer">
                            <p className="textl">W zależnosci od wybranego planu lub twojego własnego projektu , ale średnia realizacja może wynossić od 5 dni do 1 miesiąca.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <input type="checkbox" id="q3" />
                            <label for="q3" class="faq-question">
                            <p className="pnag">Czy strona będzie dostosowana do telefonów?</p>
                            </label>
                            <div class="faq-answer">
                            <p className="textl">Tak. Każdy projekt ktory tworzymy chcemy aby był uniwersalny pod każde urządzenie.</p>
                            </div>
                        </div><div class="faq-item">
                            <input type="checkbox" id="q4" />
                            <label for="q4" class="faq-question">
                            <p className="pnag">Czy oferujesz wsparcie po wdrożeniu?</p>
                            </label>
                            <div class="faq-answer">
                            <p className="textl">Tak. Po opublikowaniu strony dalej jest ze mną kontakt, wiec jeśli bedziesz miał coś do poprawy lub do dodania w późniejszym czasie wystarczy napisać.</p>
                            </div>
                        </div>
                        <div class="faq-item">
                            <input type="checkbox" id="q5" />
                            <label for="q5" class="faq-question">
                            <p className="pnag">Czy mogę zmienić wygląd strony później?</p>
                            </label>
                            <div class="faq-answer">
                            <p className="textl">Jeśli chcesz coś poprawić lub dodać treści, wystarczy, że dasz mi znać, a ja to wprowadzę.</p>
                            </div>
                        </div>
                        

                    </div>

                </main>
            </center>
            <br id="kontakt" />
            <center>
                <main className="main-kontakt">
                    <p className="nag">Napisz do nas w celu dobrania oferty pasującej do ciebie</p>
                    <div className="kontactdiv">
                    <form onSubmit={handleSubmit} >
                        <input  type="hidden" name="access_key" value="b01fcb68-e093-43b6-950d-e292eb2932e6" />
                        <input className="inputkontakt" type="text"name="name"placeholder="Wprowadź Imię i Nazwisko"  required/><br />
                        <input className="inputkontakt" type="email" name="email"placeholder="example@gmail.com"  required/><br />
                        <textarea className="textkontakt" name="message"placeholder="Wprowadź treść" required></textarea><br />
                        <button className="btnkontakt"type="submit">Wyślij</button>
                    </form>
                    {status && <p className="pnag">{status}</p>}
                    </div>
                </main>
            </center>
            
        </>

    );
}
export default MainS;