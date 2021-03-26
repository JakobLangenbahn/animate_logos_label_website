// Connect to database
const db = firebase.firestore();
const storage = firebase.storage()
const storageRef = storage.ref();

// onResolve function
function onResolve(foundURL) {
        document.getElementById("logo").src = foundURL;
}

// onReject function
function onReject(error) {
    random_logo(min, max)
}

// function for loading next image
function random_logo(min, max) {
    number = Math.floor(Math.random() * (max - min + 1) + min);
    animation_file = 'animation/Animation_' + number + '.svg';
    storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);

}

// update highscore function
function update_highscore_load_new_image(alias) {

    // Delete animation file
    var childRef = storageRef.child(animation_file);
    childRef.delete()

    // update score
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    // get new image
    random_logo(min, max)

}

// add label functions
function no_logo() {
    random_logo(min, max)
}

// add label functions
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

// Initiate random image
let min = 0;
let max = 8;
let number = Math.floor(Math.random() * (max - min + 1) + min);
let animation_file = 'animation/Animation_' + number + '.svg'

// show initial animation
storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);

