// Connect to database
const db = firebase.firestore();
const storage = firebase.storage();

// Initiate random image
let min = 0;
let max = 8;
let number = Math.floor(Math.random() * (max - min + 1) + min);
let animation_file = 'animation_' + number + '.svg'
storage.ref(animation_file).getDownloadURL()
    .then((url) => {
        document.getElementById("logo").src = url;
    })


function add_label_very_bad(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Bad",
        alias: alias
    })
    update_highscore_load_new_image(alias)
}

function add_label_bad(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Bad",
        alias: alias
    })
    update_highscore_load_new_image(alias)
}

function add_label_okay(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Okay",
        alias: alias
    })
    update_highscore_load_new_image(alias)
}

function add_label_good(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Good",
        alias: alias
    })
    update_highscore_load_new_image(alias)
}

function add_label_very_good(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Good",
        alias: alias
    })
    update_highscore_load_new_image(alias)
}

// update highscore
function update_highscore_load_new_image(alias) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    // get new image
    // create random generator
    let min = 0;
    let max = 8;
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    animation_file = 'animation_' + number + '.svg'
    storage.ref(animation_file).getDownloadURL()
        .then((url) => {
            document.getElementById("logo").src = url;
        })

}
