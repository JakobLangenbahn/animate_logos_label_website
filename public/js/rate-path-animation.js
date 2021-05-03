/* Define firestore and firebase storage references for easy use in functions */
const db = firebase.firestore();
const storage = firebase.storage()
const storageRef = storage.ref();


/* Load a random animation of the paths of a random Logo and then delete it from the database */
function get_random_logo() {
    db.collection("animatedlogos").limit(1).orderBy("animation_id").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            logo_id_data = doc.data().logo_id;
            animation_id_data = doc.data().animation_id;
            animation_file_data = doc.data().animation_file;
            path_0_show = doc.data().path_0;
            path_1_show = doc.data().path_1;
            path_2_show = doc.data().path_2;
            path_3_show = doc.data().path_3;
            path_4_show = doc.data().path_4;
            path_5_show = doc.data().path_5;
            path_6_show = doc.data().path_6;
            path_7_show = doc.data().path_7;

            storageRef.child(animation_file_data).getDownloadURL().then(function onResolve(foundURL) {
                    document.getElementById("logo_full_2").src = foundURL;
                }
            )

            if (!path_0_show) {
                let div_0 = document.getElementById("path_0_animation_buttons")
                div_0.style.visibility = 'hidden';
                let img_0 = document.getElementById("path_0_image")
                img_0.style.visibility = 'hidden';
            } else {
                let div_0 = document.getElementById("path_0_animation_buttons")
                div_0.style.visibility = 'visible';
                let img_0 = document.getElementById("path_0_image")
                img_0.style.visibility = 'visible';
            }
            if (!path_1_show) {
                let div_1 = document.getElementById("path_1_animation_buttons")
                div_1.style.visibility = 'hidden';
                let img_1 = document.getElementById("path_1_image")
                img_1.style.visibility = 'hidden';
            } else {
                let div_1 = document.getElementById("path_1_animation_buttons")
                div_1.style.visibility = 'visible';
                let img_1 = document.getElementById("path_1_image")
                img_1.style.visibility = 'visible';
            }
            if (!path_2_show) {
                let div_2 = document.getElementById("path_2_animation_buttons")
                div_2.style.visibility = 'hidden';
                let img_2 = document.getElementById("path_2_image")
                img_2.style.visibility = 'hidden';
            } else {
                let div_2 = document.getElementById("path_2_animation_buttons")
                div_2.style.visibility = 'visible';
                let img_2 = document.getElementById("path_2_image")
                img_2.style.visibility = 'visible';
            }
            if (!path_3_show) {
                let div_3 = document.getElementById("path_3_animation_buttons")
                div_3.style.visibility = 'hidden';
                let img_3 = document.getElementById("path_3_image")
                img_3.style.visibility = 'hidden';
            } else {
                let div_3 = document.getElementById("path_3_animation_buttons")
                div_3.style.visibility = 'visible';
                let img_3 = document.getElementById("path_3_image")
                img_3.style.visibility = 'visible';
            }
            if (!path_4_show) {
                let div_4 = document.getElementById("path_4_animation_buttons")
                div_4.style.visibility = 'hidden';
                let img_4 = document.getElementById("path_4_image")
                img_4.style.visibility = 'hidden';
            } else {
                let div_4 = document.getElementById("path_4_animation_buttons")
                div_4.style.visibility = 'visible';
                let img_4 = document.getElementById("path_4_image")
                img_4.style.visibility = 'visible';
            }
            if (!path_5_show) {
                let div_5 = document.getElementById("path_5_animation_buttons")
                div_5.style.visibility = 'hidden';
                let img_5 = document.getElementById("path_5_image")
                img_5.style.visibility = 'hidden';
            } else {
                let div_5 = document.getElementById("path_5_animation_buttons")
                div_5.style.visibility = 'visible';
                let img_5 = document.getElementById("path_5_image")
                img_5.style.visibility = 'visible';
            }
            if (!path_6_show) {
                let div_6 = document.getElementById("path_6_animation_buttons")
                div_6.style.visibility = 'hidden';
                let img_6 = document.getElementById("path_6_image")
                img_6.style.visibility = 'hidden';
            } else {
                let div_6 = document.getElementById("path_6_animation_buttons")
                div_6.style.visibility = 'visible';
                let img_6 = document.getElementById("path_6_image")
                img_6.style.visibility = 'visible';
            }
            if (!path_7_show) {
                let div_7 = document.getElementById("path_7_animation_buttons")
                div_7.style.visibility = 'hidden';
                let img_7 = document.getElementById("path_7_image")
                img_7.style.visibility = 'hidden';
            } else {
                let div_7 = document.getElementById("path_7_animation_buttons")
                div_7.style.visibility = 'visible';
                let img_7 = document.getElementById("path_7_image")
                img_7.style.visibility = 'visible';
            }

            let i;
            for (i = 0; i < 8; i++) {
                let path_file = 'animation_path/logo_' + logo_id_data + "_path_" + i + ".png";
                let element_id = "image_path_" + i + "_animation"
                storage.ref(path_file).getDownloadURL()
                    .then((url_path) => {
                        document.getElementById(element_id).src = url_path;
                    });
            }
            // delete document
            doc.ref.delete();
        })
    })

    path_0_rating_data = "no_rating";
    path_1_rating_data = "no_rating";
    path_2_rating_data = "no_rating";
    path_3_rating_data = "no_rating";
    path_4_rating_data = "no_rating";
    path_5_rating_data = "no_rating";
    path_6_rating_data = "no_rating";
    path_7_rating_data = "no_rating";

}


/* Set the label for path 0 */
function add_label_path_0(label) {
    path_0_rating_data = label;
}


/* Set the label for path 1 */
function add_label_path_1(label) {
    path_1_rating_data = label;
}


/* Set the label for path 2 */
function add_label_path_2(label) {
    path_2_rating_data = label;
}


/* Set the label for path 3 */
function add_label_path_3(label) {
    path_3_rating_data = label;
}


/* Set the label for path 4 */
function add_label_path_4(label) {
    path_4_rating_data = label;
}


/* Set the label for path 5 */
function add_label_path_5(label) {
    path_5_rating_data = label;
}


/* Set the label for path 6 */
function add_label_path_6(label) {
    path_6_rating_data = label;
}


/* Set the label for path 7 */
function add_label_path_7(label) {
    path_7_rating_data = label;
}


/* Reload the animations so that the user can view them again */
function repeat_animation() {
    document.getElementById("logo_full_2").src = "images/load.svg";
    storageRef.child(animation_file_data).getDownloadURL().then(function onResolve(foundURL) {
            number = Math.random();
            document.getElementById("logo_full_2").src = foundURL + "?" + number;
        }
    )
}


/* Write label for the path animations in the database */
function save_animation_label() {
    alias = document.getElementById("alias-2").value;
    db.collection("label_animation_path").doc().set({
        animation_file: animation_file_data,
        logo_id: logo_id_data,
        animation_id: animation_id_data,
        path_0_rating: path_0_rating_data,
        path_1_rating: path_1_rating_data,
        path_2_rating: path_2_rating_data,
        path_3_rating: path_3_rating_data,
        path_4_rating: path_4_rating_data,
        path_5_rating: path_5_rating_data,
        path_6_rating: path_6_rating_data,
        path_7_rating: path_7_rating_data,
        alias: alias,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
}


/* Update the highscore in the database */
function update_highscore() {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});
}


/* Send data to the database and get new random path animations of the Logo */
function next_animation() {
    save_animation_label()
    update_highscore()
    get_random_logo()
}


/* Initialize variables globally */
let logo_id_data;
let animation_id_data;
let animation_file_data;
let path_0_rating_data;
let path_1_rating_data;
let path_2_rating_data;
let path_3_rating_data;
let path_4_rating_data;
let path_5_rating_data;
let path_6_rating_data;
let path_7_rating_data;
let path_0_show;
let path_1_show;
let path_2_show;
let path_3_show;
let path_4_show;
let path_5_show;
let path_6_show;
let path_7_show;

let alias;

/* Initialize 8 path animation of a random Logo */
get_random_logo()




