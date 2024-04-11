// Die Funktion zum Wechseln der Seite
function goToNewPage() {
    // Hier ersetzen Sie "neue_seite.html" durch den Dateinamen Ihrer Zielseite
    window.location.href = "FinalTable.html";
}
// Den Button auswählen
var pageChangeBtn = document.getElementById("backBtn");
// Den Eventlistener hinzufügen, um auf Klicks zu reagieren
pageChangeBtn.addEventListener("click", goToNewPage);
