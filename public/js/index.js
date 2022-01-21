/* Define storage and firestore references for easy use in functions */
const db = firebase.firestore();
const storage = firebase.storage()
const storageRef = storage.ref();


/* Display a random Logo for the user to label */
function random_logo(validation_id) {
    if (validation_id < max_validation) {
        db.collection("validation_animation").where("order_id", "==", validation_id)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    file_id = doc.data().file_id;
                    animation_file = 'animation_validation/' + file_id;
                    storageRef.child(animation_file).getDownloadURL().then(onResolve, onReject);
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error)
            });
    }
}


/* Display the Logo if it could be found in firebase storage */
function onResolve(foundURL) {
    document.getElementById("logo").src = foundURL;
}


/* Choose another random Logo if it could not be found in firebase storage */
function onReject() {
    random_logo(validation_id)
}


/* Update highscore of the user and load a new Logo */
function update_highscore_load_new_image(alias) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    validation_id++;
    localStorage.setItem('validation_id_local_storage', validation_id);
    random_logo(validation_id)

    document.getElementById("animations_left").textContent = max_validation-validation_id;

    /* Reset timer so that the user is able to rate the timing of the animation */
    let timeleft = 6;
    let time = setInterval(function () {
        timeleft--;
        document.getElementById("timer").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(time);
    }, 1000);

}


/* Add the label "Very Bad" in the database for this animation */
function add_label_very_bad(file_id, validation_id) {
    if (validation_id < max_validation) {
        let alias = document.getElementById("alias").value;
        db.collection("validation_label").doc().set({
            logo: file_id,
            rating: "Very Bad",
            alias: alias,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        update_highscore_load_new_image(alias)
    }
}


/* Add the label "Bad" in the database for this animation */
function add_label_bad(file_id, validation_id) {
    if (validation_id < max_validation) {
        let alias = document.getElementById("alias").value;
        db.collection("validation_label").doc().set({
            logo: file_id,
            rating: "Bad",
            alias: alias,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        update_highscore_load_new_image(alias)
    }
}


/* Add the label "Okay" in the database for this animation */
function add_label_okay(file_id, validation_id) {
    if (validation_id < max_validation) {
        let alias = document.getElementById("alias").value;
        db.collection("validation_label").doc().set({
            logo: file_id,
            rating: "Okay",
            alias: alias,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        update_highscore_load_new_image(alias)
    }
}

/* Add the label "Good" in the database for this animation */
function add_label_good(file_id, validation_id) {
    if (validation_id < max_validation) {
        let alias = document.getElementById("alias").value;
        db.collection("validation_label").doc().set({
            logo: file_id,
            rating: "Good",
            alias: alias,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        update_highscore_load_new_image(alias)
    }
}


/* Add the label "Very Good" in the database for this animation */
function add_label_very_good(file_id, validation_id) {
    if (validation_id < max_validation) {
        let alias = document.getElementById("alias").value;
        db.collection("validation_label").doc().set({
            logo: file_id,
            rating: "Very Good",
            alias: alias,
            time: firebase.firestore.FieldValue.serverTimestamp()
        })
        update_highscore_load_new_image(alias)
    }
}


/* Initialize the first random animation */
let validation_id = Number(localStorage.getItem('validation_id_local_storage'));
let animation_file;
let file_id;
let max_validation = 258;

var cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [];
    }

if (!validation_id) {
    validation_id = 0;
}

random_logo(validation_id)

/* Set timer so that the user is able to rate the timing of the animation */
let timeleft = 5;
let time = setInterval(function () {
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if (timeleft <= 0)
        clearInterval(time);
}, 1000);


