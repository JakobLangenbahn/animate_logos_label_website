var db = firebase.firestore();
db.collection('label').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#table_highscore');

function renderAccount(doc) {
    let tr = document.createElement('tr');
    let td_alias = document.createElement('td');
    let td_logo = document.createElement('td');
    let td_rating = document.createElement('td');
    let td_time = document.createElement('td');

    tr.setAttribute('data-id', doc.id);

    td_alias.textContent = doc.data().alias;
    td_logo.textContent = doc.data().logo;
    td_rating.textContent = doc.data().rating;
    td_time.textContent = doc.data().time;


    tr.appendChild(td_alias);
    tr.appendChild(td_logo);
    tr.appendChild(td_rating);
    tr.appendChild(td_time);

    accountList.appendChild(tr);

}

// Quick and simple export target #table_id into a csv
function download_table_as_csv(table_id, separator = ',') {
    // Select rows from table_id
    var rows = document.querySelectorAll('table#' + table_id + ' tr');
    // Construct csv
    var csv = [];
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll('td, th');
        for (var j = 0; j < cols.length; j++) {
            // Clean innertext to remove multiple spaces and jumpline (break csv)
            var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
            // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
            data = data.replace(/"/g, '""');
            // Push escaped string
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }
    var csv_string = csv.join('\n');
    // Download it
    var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


