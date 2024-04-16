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
    window.location.href = "index.html";
}
var ChangeBackBtn = document.getElementById("backBtn");
ChangeBackBtn.addEventListener("click", goBackToPage);