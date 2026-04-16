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
import opinph from"../assets/images/opiniaplaceholder.svg"
import mondartrans from "../assets/images/monitordartrans.svg"
import { useEffect, useState } from "react";





function MainS() {
  const [status, setStatus] = useState("");
  const [isBrutto, setIsBrutto] = useState(false);

  const values = [200, 400, 900,300];

  const licz = (val) => {
  const wynik = isBrutto ? val * 1.23 : val;

  return wynik % 1 === 0
    ? wynik
    : wynik.toFixed(2);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setStatus("✔ Wiadomość wysłana");
      e.target.reset();
    } else {
      setStatus("Błąd wysyłania");
    }
  };

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
        <>
        <br id="onas" />
            <center>
                <main className="main-glowna">
                    <nav>
                    <div className="flex" >
                            <div className="onasdiv">
                                <div className="companydivb">
                                        <img src={icon} alt="icon" />
                                        <p className="pnag">Development</p>
                                </div>
                            <p className="nag fade-in" style={{ transitionDelay: "0s" }}>Napiszemy twoją Strone od podstaw .</p>
                            <p className="text fade-in" style={{ transitionDelay: "0.2s" }}>Zajmujemy sie tworzeniem nowoczesnych stron internetowych oraz projektami designu strony.</p>
                            <div className="flexb fade-in" style={{ transitionDelay: "0.4s" }}>
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
                            <div className="uslugi fade-in" style={{ transitionDelay: "0s" }}>
                                <p className="pnag">Projektowanie Design/UI Strony</p>
                                <p className="text">Projektujemy nowoczesne oraz przejrzyste interfejsy strony.</p>
                            </div>
                            <div className="uslugi fade-in" style={{ transitionDelay: "0.1s" }}>
                                <p className="pnag">Profestionalna strona internetowa</p>
                                <p className="text">Używamy najnowszych technologii, zapewniając najwyższą jakość.</p>
                            </div>
                            <div className="uslugi fade-in" style={{ transitionDelay: "0.2s" }}>
                                <p className="pnag">Tworzenie Grafik dla Firm</p>
                                <p className="text">Możemy stworzyć dla twojej Firmy Logo lub czego tylko bedziesz potrzebować.</p>
                            </div>
                            <div className="uslugi fade-in" style={{ transitionDelay: "0.3s" }}>
                                <p className="pnag">Projektowanie Mobile Design/UI</p>
                                <p className="text">Projektujemy mobile style strony aby była kopmpatybilna z każdym urządzeniem.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="nag">Firmy które nam zaufały:</p>
                        <div className="zaufal">
                            <div className=" flexzauf">
                                <a href="https://dar-trans.eu/" target="_blank" rel="noopener noreferrer"><img src={Dartrans} alt="dardtranslogo" /></a>
                                <a href=""> <img src={Placeholder} alt="partnerplaceholder" /></a>
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
                            <p className="text">Dar-Trans<span className="category">Firma Usługa</span> <span className="category">Firma prywatna</span></p>
                            <p className="nag">Odświeżona strona internetowa dla firmy <br />“DAR-TRANS”, pokochanej przez klientów</p>
                            <div className="companyopis">
                            <hr className="companyline"></hr>
                            <p className="text">Właściciel napisał do nas z prośbą o odświeżenie ich strony firmowej.<br />
                                                Udało nam się w pełni sprostać jego wymaganiom,<br /> 
                                                co zaowocowało znacznym wzrostem konwersji i zleceń.</p>
                            </div>
                        </div>
                        <div className="prawoc">
                            <a href="https://dar-trans.vercel.app/" target="_blank" rel="noopener noreferrer"><img src={mondartrans} alt="companyview" /></a>
                        </div>
                    </div>
                    <div className="companyad">
                        <div className="lewoc" >
                            <p className="text">Nazwa Firmy  <span className="category">Kategoria</span> <span className="category">Kategoria</span></p>
                            <p className="nag">Nowoczesn sklep internetowy “Nazwa Firmy”,<br /> pokochany przez klientów</p>
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
                            <p className="text">Nazwa Firmy  <span className="category">Kategoriay</span> <span className="category">Kategoria</span></p>
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
                    <div className="ofertydivflex">
                    <p className="pnagl">Nasze Oferty: wybierz to, co pasuje do Twojego biznesu.</p>
                    <label className="switch">
                        <input type="checkbox" id="vatToggle" checked={isBrutto} onChange={() => setIsBrutto(!isBrutto)}/>
                        <span className="slider"></span>
                        <p className="slidertxt">
                        <span className={!isBrutto ? "nett active" : "nett"}> netto</span> <span className={isBrutto ? "brutt active" : "brutt"}>brutto</span></p>
                    </label>
                    </div>
                    
                        <hr className="liniaof" />
                        <div className="flex">
                            <div className="oferta fade-in" style={{ transitionDelay: "0s" }}>
                                <div className="of-gora">
                                <p className="nag">Standard</p>
                                <p className="nagl" id="v1">{licz(values[0])}zł</p>
                                <p className="textl">✔ Do 2 podstron</p>
                                <p className="textl">✔ Podstawowy formularz kontaktowy</p>
                                <p className="textl">✔ Responsywność strony</p>
                                <p className="textl">✔ Czas realizacji ok.5 dni</p>
                                </div>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
                            </div>
                            <div className="ofertarec fade-in" style={{ transitionDelay: "0.2s" }}>
                                <p className="recom">Najczęsciej Wybierane</p>
                                <div className="of-gora">
                                <p className="nag">Standard +</p>
                                <p className="nagl" id="v2">{licz(values[1])}zł <span className="starac">500zł</span><span className="przec">-20%</span></p>
                                <p className="textl">✔ Do 5 podstron </p>
                                <p className="textl">✔ Responsywność </p>
                                <p className="textl">✔ Podpięcie pod domenę i hosting</p>
                                <p className="textl">✔ Czas realizacji ok.7 dni</p>
                                </div>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>

                            </div>
                            <div className="oferta fade-in" style={{ transitionDelay: "0.4s" }}>
                                <div className="of-gora">
                                <p className="nag">Premium</p>
                                <p className="nagl" id="v3">{licz(values[2])}zł</p>
                                <p className="textl">✔ Customowy formularz</p>
                                <p className="textl">✔ Animacje i efekty UI</p>
                                <p className="textl">✔ Optymalizacja SEO</p>
                                <p className="textl">✔ Respoinsywność strony</p>
                                </div>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>

                            </div>
                            <div className="oferta fade-in" style={{ transitionDelay: "0.6s"}} >
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
                        <p className="mintext">*Przy kazdym zleceniu wystawiamy fakturę VAT*</p>
                        <br id="projekty" />
                        <p className="pnagl">Gotowe Projekty: wybierz gotowy projekt, a my dostosujemy go do ciebie.</p>
                        <hr className="liniagp" />
                        
                         <div className="projekt">
                            <div className="plewo">
                                <img src={webplace} alt="" />
                            </div>
                            <div className="pprawo">
                                <p className="nag">Strona Restauracji</p>
                                <p className="pnag">{licz(values[3])}zł</p>
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
                                <p className="pnag">{licz(values[3])}zł</p>
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
                                <p className="pnag">{licz(values[3])}zł</p>
                                <p className="text">Strona internetowa dla Serwera w grze. </p>
                                <a href="#kontakt"><button className="btnof">Kontakt</button></a>
                                
                            </div>
                        </div>
                        
                </main>
            </center>
            <br id="opinie" />
            
            <br id="faq" />
            <center>
                <main className="main-faq">
                    <p className="nag">Najczęsciej zadawane pytania:</p>
                    <div className="faq-container">

                        <div className="faq-item fade-in" style={{ transition: 10 , transitionDelay: "0.1s" }}>
                            <input type="checkbox" id="q1" />
                            <label htmlFor="q1" className="faq-question">
                            <p className="pnag">Czy pomagasz w zakupie domeny i hostingu?</p>
                            </label>
                            <div className="faq-answer">
                            <p className="textl">Tak. Dobiorę domenę i hosting, skonfiguruję wszystko i podłączę. Nie musisz się o nic martwić.</p>
                            </div>
                        </div>

                        <div className="faq-item fade-in" style={{ transition: 10 , transitionDelay: "0.2s" }}>
                            <input type="checkbox" id="q2" />
                            <label htmlFor="q2" className="faq-question">
                            <p className="pnag">Ile trwa wykonanie strony?</p>
                            </label>
                            <div className="faq-answer">
                            <p className="textl">W zależnosci od wybranego planu lub twojego własnego projektu , ale średnia realizacja może wynossić od 5 dni do 1 miesiąca.</p>
                            </div>
                        </div>
                        <div className="faq-item fade-in" style={{ transition: 10 , transitionDelay: "0.3s" }}>
                            <input type="checkbox" id="q3" />
                            <label htmlFor="q3" className="faq-question">
                            <p className="pnag">Czy strona będzie dostosowana do telefonów?</p>
                            </label>
                            <div className="faq-answer">
                            <p className="textl">Tak. Każdy projekt ktory tworzymy chcemy aby był uniwersalny pod każde urządzenie.</p>
                            </div>
                        </div><div className="faq-item fade-in" style={{ transition: 10 , transitionDelay: "0.4s" }}>
                            <input type="checkbox" id="q4" />
                            <label htmlFor="q4" className="faq-question">
                            <p className="pnag">Czy oferujesz wsparcie po wdrożeniu?</p>
                            </label>
                            <div className="faq-answer">
                            <p className="textl">Tak. Po opublikowaniu strony dalej jest ze mną kontakt, wiec jeśli bedziesz miał coś do poprawy lub do dodania w późniejszym czasie wystarczy napisać.</p>
                            </div>
                        </div>
                        <div className="faq-item fade-in" style={{ transition: 10 , transitionDelay: "0.5s" }}>
                            <input type="checkbox" id="q5" />
                            <label htmlFor="q5" className="faq-question">
                            <p className="pnag">Czy mogę zmienić wygląd strony później?</p>
                            </label>
                            <div className="faq-answer">
                            <p className="textl">Jeśli chcesz coś poprawić lub dodać treści, wystarczy, że dasz mi znać, a ja to wprowadzę.</p>
                            </div>
                        </div>
                        

                    </div>

                </main>
            </center>
            <br id="kontakt" />
            <center>
                <main className="main-kontakt">
                    <p className="nag fade-in" style={{ transition: 10 , transitionDelay: "0.1s" }}>Napisz do nas w celu dobrania oferty pasującej do ciebie</p>
                    <div className="kontactdiv">
                    <form onSubmit={handleSubmit} >
                        <input  type="hidden" name="access_key" value="b01fcb68-e093-43b6-950d-e292eb2932e6" />
                        <input className="inputkontakt fade-in" style={{ transition: 10 , transitionDelay: "0.2s" }} type="text"name="name"placeholder="Wprowadź Imię i Nazwisko"  required/><br />
                        <input className="inputkontakt fade-in" style={{ transition: 10 , transitionDelay: "0.3s" }} type="email" name="email"placeholder="example@gmail.com"  required/><br />
                        <textarea className="textkontakt fade-in" style={{ transition: 10 , transitionDelay: "0.4s" }} name="message"placeholder="Wprowadź treść" required></textarea><br />
                        <button className="btnkontakt fade-in" style={{ transition: 10 , transitionDelay: "0.5s" }}type="submit">Wyślij</button>
                    </form>
                    {status && <p className="pnag">{status}</p>}
                    </div>
                </main>
            </center>
            
        </>

    );
}
export default MainS;