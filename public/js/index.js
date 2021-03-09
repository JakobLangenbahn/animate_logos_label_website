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
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Bad"
    })
    update_highscore_load_new_image()
}

function add_label_bad(animation_file ) {
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Bad"
    })
    update_highscore_load_new_image()
}

function add_label_okay(animation_file ) {
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Okay"
    })
    update_highscore_load_new_image()
}

function add_label_good(animation_file ) {
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Good"
    })
    update_highscore_load_new_image()
}

function add_label_very_good(animation_file ) {
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Good"
    })
    update_highscore_load_new_image()
}

// update highscore
function update_highscore_load_new_image() {
    var alias = document.getElementById("alias").value;
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
