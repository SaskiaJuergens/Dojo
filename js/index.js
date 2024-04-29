//Wenn Name=Rainer und Passwort=Kenjutsu, dann auf normale html Seiten
var id = document.createElementbyId(Name);
var code = document.createElementbyId(passwort);

if(id == "Rainer" & code == "Kyujutsu"){
    function goBackToPage() {
        window.location.href = "Startseite.html";
    }
    var ChangeBackBtn = document.getElementById("AnmeldeBtn");
    ChangeBackBtn.addEventListener("click", goBackToPage);
} else { 
    //else error
    alert("Falscher Benutzertname oder falsches Passwort")
}


//Wenn als Gast weiter nur Daten anschaubar und nicht bearbeitbar. Extre html codieren maybe
function goBackToGastPage() {
    //window.location.href = "Startseite.html";
}
var ChangeBtn = document.getElementById("GastBtn");
ChangeBtn.addEventListener("click", goBackToGastPage);