import icon from "../assets/images/icon.svg"
function Polityka () {
    return(
        <>
        <center>
            <main className="main-polityka">
                <div className="logo">
                    <img src={icon} alt="iconzk" />
                    <p className="btext">Developement</p>
                </div>
                <div>
                    <p className="pnag">1.Administrator danych</p>
                    <p className="text">Administratorem danych jest ZK DEV.</p>
                    <p className="text">Kontakt: <a href="mailto:contactus.zk.business@gmail.com">contactus.zk.business@gmail.com</a></p>

                    <p className="pnag">2.Zakres zbieranych danych</p>
                    <p className="text">Za pośrednictwem formularza kontaktowego zbierane są:</p>
                    <p className="text"> - Imię oraz Nazwisko</p>
                    <p className="text"> - Adres E-Mail</p>
                    <p className="text"> - Treść wiadomośći</p>
                    <p className="text">Podanie danych jest dobrowolne, ale niezbędne do wysłania formularza.</p>

                    <p className="pnag">3.Cel przetwarzania danych</p>
                    <p className="text">Dane są przetwarzane wyłącznie w celu:</p>
                    <p className="text"> - udzielenia odpowiedzi na przesłaną wiadomość</p>
                    <p className="text"> - prowadzenia kontaktu w sprawie zapytania</p>
                    <p className="text"> - Dane nie są wykorzystywane w celach marketingowych.</p>
                    
                    <p className="pnag">4.Udostępnianie danych</p>
                    <p className="text">Dane nie są sprzedawane ani udostępniane osobom trzecim.</p>
                    <p className="text">Mogą być przekazywane wyłącznie podmiotom technicznie obsługującym formularz lub hosting, w zakresie niezbędnym do jego działania.</p>
                
                    <p className="pnag">5.Okres przechowywania danych</p>
                    <p className="text">Dane są przechowywane przez czas niezbędny do udzielenia odpowiedzi oraz prowadzenia korespondencji.</p>

                    <p className="pnag">6. Prawa użytkownika</p>
                    <p className="text">Osoba, której dane dotyczą, ma prawo do:</p>
                    <p className="text"> - dostępu do swoich danych</p>
                    <p className="text"> - ich poprawienia</p>
                    <p className="text"> - żądania usunięcia danych</p>
                    <p className="text"> - ograniczenia przetwarzania</p>
                    <br />
                    <p className="textsr">W sprawach związanych z danymi osobowymi należy kontaktować się pod wskazanym adresem e-mail.</p>
                
                </div>

            </main>
        </center>

        </>

    );
}
export default Polityka;