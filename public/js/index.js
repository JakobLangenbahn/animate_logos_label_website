/* Define storage and firestore references for easy use in functions */
const db = firebase.firestore();
const storage = firebase.storage()
const storageRef = storage.ref();


/* Display a random Logo for the user to label */
function random_logo(min_logo, max_logo, min_animation, max_animation) {
    number_logo = Math.floor(Math.random() * (max_logo - min_logo + 1) + min_logo);
    number_animation = Math.floor(Math.random() * (max_animation - min_animation + 1) + min_animation);
    animation_file = 'animation/logo_' + number_logo + '_animation_' + number_animation + '.svg'
    storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);
}


/* Display the Logo if it could be found in firebase storage */
function onResolve(foundURL) {
    document.getElementById("logo").src = foundURL;
}


/* Choose another random Logo if it could not be found in firebase storage */
function onReject() {
    random_logo(min_logo, max_logo, min_animation, max_animation)
}


/* Update highscore of the user and load a new Logo */
function update_highscore_load_new_image(alias) {
    let childRef = storageRef.child(animation_file);
    childRef.delete()

    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    random_logo(min_logo, max_logo, min_animation, max_animation)

    /* Reset timer so that the user is able to rate the timing of the animation */
    let timeleft = 5;
    let time = setInterval(function () {
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(time);
    }, 1000);

}


/* Add the label "Very Bad" in the database for this animation */
function add_label_very_bad(animation_file) {
    let alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Bad",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Add the label "Bad" in the database for this animation */
function add_label_bad(animation_file) {
    let alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Bad",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Add the label "Okay" in the database for this animation */
function add_label_okay(animation_file) {
    let alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Okay",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Add the label "Good" in the database for this animation */
function add_label_good(animation_file) {
    let alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Good",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Add the label "Very Good" in the database for this animation */
function add_label_very_good(animation_file) {
    let alias = document.getElementById("alias").value;
    db.collection("label").doc().set({
        logo: animation_file,
        rating: "Very Good",
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Initialize the first random animation */
let min_logo = 0;
let max_logo = 191;
let number_logo = Math.floor(Math.random() * (max_logo - min_logo + 1) + min_logo);
let min_animation = 0;
let max_animation = 49;
let number_animation = Math.floor(Math.random() * (max_animation - min_animation + 1) + min_animation);
let animation_file = 'animation/logo_' + number_logo + '_animation_' + number_animation + '.svg'
storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);


/* Set timer so that the user is able to rate the timing of the animation */
let timeleft = 5;
let time = setInterval(function () {
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if (timeleft <= 0)
        clearInterval(time);
}, 1000);




