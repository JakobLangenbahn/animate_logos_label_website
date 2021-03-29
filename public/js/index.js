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
    random_logo(min_logo, max_logo,min_animation,max_animation)
}

// function for loading next image
function random_logo(min_logo, max_logo,min_animation,max_animation) {

    number_logo = Math.floor(Math.random() * (max_logo - min_logo + 1) + min_logo);
    number_animation = Math.floor(Math.random() * (max_animation - min_animation + 1) + min_animation);
    animation_file = 'animation/logo_' + number_logo + '_animation_' + number_animation + '.svg'
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
    random_logo(min_logo, max_logo,min_animation,max_animation)

    // reset timer
    var timeleft = 5;
    var time = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(time);
    },1000);

}

// add label functions
function no_logo() {
    random_logo(min_logo, max_logo,min_animation,max_animation)
}

// add label functions
function add_label_very_bad(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Bad",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}

function add_label_bad(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Bad",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}

function add_label_okay(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Okay",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}

function add_label_good(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Good",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}

function add_label_very_good(animation_file) {
    var alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Good",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}

// Initiate random image
let min_logo = 0;
let max_logo = 191;
let number_logo = Math.floor(Math.random() * (max_logo - min_logo + 1) + min_logo);
let min_animation = 0;
let max_animation = 49;
let number_animation = Math.floor(Math.random() * (max_animation - min_animation + 1) + min_animation);
let animation_file = 'animation/logo_' + number_logo + '_animation_' + number_animation + '.svg'

// show initial animation
storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);




