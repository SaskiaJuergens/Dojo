// Die Funktion zum Wechseln der Seite
function goToNewPage() {
    // Hier ersetzen Sie "neue_seite.html" durch den Dateinamen Ihrer Zielseite
    window.location.href = "FinalTable.html";
}
// Den Button auswählen
var pageChangeBtn = document.getElementById("FinalTableBtn");
// Den Eventlistener hinzufügen, um auf Klicks zu reagieren
pageChangeBtn.addEventListener("click", goToNewPage);


// Die Funktion zum Wechseln der Seite
function goBackToPage() {
    window.location.href = "Startseite.html";
}
var ChangeBackBtn = document.getElementById("backBtn");
ChangeBackBtn.addEventListener("click", goBackToPage);

//Zum Regelwerk
function toRegelwerkPage() {
    var urlParams = new URLSearchParams(window.location.search);
    var tableName = urlParams.get('tableName');
    var selectedNummer = urlParams.get('tableName');
    if(tableName) {
        window.location.href = 'Regelwerk.html?source=Tabelle&tableName=' + encodeURIComponent(tableName) + encodeURIComponent(selectedNummer);
    } else {
        console.error("tableName ist null");
    }
}

var ChangeToRegeln = document.getElementById("RegelnBtn");
if (ChangeToRegeln) {
    ChangeToRegeln.addEventListener("click", toRegelwerkPage);
} else {
    console.error("Button nicht gefunden!");
}