var db = firebase.firestore();
db.collection('highscore').orderBy("score", "desc").limit(10).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#table_highscore');

function renderAccount(doc) {
    let tr = document.createElement('tr');
    let td_alias = document.createElement('td');
    let td_score = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    td_alias.textContent = doc.data().alias;
    td_score.textContent = doc.data().score;

    tr.appendChild(td_alias);
    tr.appendChild(td_score);

    accountList.appendChild(tr);

}