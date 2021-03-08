function updateHighscore(items) {
    var table = document.getElementById('highscores');
    // Delete old entries
    var tableHeaderRowCount = 1;
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    // insert rows with new entries
    items.forEach((item) => {
    let row = table.insertRow();
    let name = row.insertCell(0);
    name.innerHTML = item.name;
    let score = row.insertCell(1);
    score.innerHTML = item.score;
    });
    // sort table according to score
    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[1];
            y = rows[i + 1].getElementsByTagName("td")[1];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
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

// Test data
const testdata = [
    { name: "Becci", score: 80 },
    { name: "Jani", score: 50 },
    { name: "Jakob", score: 80 },
    { name: "Jonathan", score: 30 },
    { name: "Sarah", score: 40 },
    { name: "Tim", score: 70 },
    ];