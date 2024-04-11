function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("TeilnehmerTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];
            if (columnIndex === 3) { // Wenn Geburtsdatum sortiert wird
                x = new Date(x.innerHTML);
                y = new Date(y.innerHTML);
            } else if (columnIndex === 4) { // Wenn Alter sortiert wird
                x = parseInt(x.innerHTML);
                y = parseInt(y.innerHTML);
            } else { // Standardfall für Textsortierung
                x = x.innerHTML.toLowerCase();
                y = y.innerHTML.toLowerCase();
            }
            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
