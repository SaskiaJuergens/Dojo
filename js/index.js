//Wenn Name=Rainer und Passwort=Kenjutsu, dann auf normale html Seiten
// Definieren Sie die erwarteten Anmeldeinformationen
const correctName = "Rainer";
const correctPassword = "Kyujutsu";

// Funktion zum Überprüfen der Anmeldeinformationen und Weiterleitung bei Erfolg
function handleLogin() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("passwort").value;

    if (name === correctName && password === correctPassword) {
        window.location.href = "Startseite.html";
    } else {
        alert("Falscher Benutzername oder falsches Passwort");
    }
}
// Event Listener für die Anmeldeschaltfläche
document.getElementById("AnmeldeBtn").addEventListener("click", handleLogin);



//Wenn als Gast weiter nur Daten anschaubar und nicht bearbeitbar. Extre html codieren maybe
function goToGastPage() {
    //window.location.href = "Startseite.html";
}
// Event Listener für die Gastschaltfläche
document.getElementById("GastBtn").addEventListener("click", goToGuestPage);