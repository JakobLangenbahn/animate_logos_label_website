// Connect to database
const db = firebase.firestore();
const storage = firebase.storage()
const storageRef = storage.ref();

// function that gets random firestore document and deletes it
function get_random_logo() {
    db.collection("animatedlogos").orderBy("animation_id", "desc").limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            // get information
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

            console.log(animation_file_data)


            // show logo
            storageRef.child(animation_file_data).getDownloadURL().then(function onResolve(foundURL) {
                    document.getElementById("logo_full_2").src = foundURL;
                }
            )


            // hide paths not animated
            // do not show paths that are not animated
            if (!path_0_show) {
                let div_0 = document.getElementById("path_0_animation_buttons")
                div_0.style.visibility = 'hidden';
                let img_0 = document.getElementById("path_0_image")
                img_0.style.visibility = 'hidden';
            }
            if (!path_1_show) {
                let div_1 = document.getElementById("path_1_animation_buttons")
                div_1.style.visibility = 'hidden';
                let img_1 = document.getElementById("path_1_image")
                img_1.style.visibility = 'hidden';
            }
            if (!path_2_show) {
                let div_2 = document.getElementById("path_2_animation_buttons")
                div_2.style.visibility = 'hidden';
                let img_2 = document.getElementById("path_2_image")
                img_2.style.visibility = 'hidden';
            }
            if (!path_3_show) {
                let div_3 = document.getElementById("path_3_animation_buttons")
                div_3.style.visibility = 'hidden';
                let img_3 = document.getElementById("path_3_image")
                img_3.style.visibility = 'hidden';
            }
            if (!path_4_show) {
                let div_4 = document.getElementById("path_4_animation_buttons")
                div_4.style.visibility = 'hidden';
                let img_4 = document.getElementById("path_4_image")
                img_4.style.visibility = 'hidden';
            }
            if (!path_5_show) {
                let div_5 = document.getElementById("path_5_animation_buttons")
                div_5.style.visibility = 'hidden';
                let img_5 = document.getElementById("path_5_image")
                img_5.style.visibility = 'hidden';
            }
            if (!path_6_show) {
                let div_6 = document.getElementById("path_6_animation_buttons")
                div_6.style.visibility = 'hidden';
                let img_6 = document.getElementById("path_6_image")
                img_6.style.visibility = 'hidden';
            }
            if (!path_7_show) {
                let div_7 = document.getElementById("path_7_animation_buttons")
                div_7.style.visibility = 'hidden';
                let img_7 = document.getElementById("path_7_image")
                img_7.style.visibility = 'hidden';
            }
            // show paths
            let i;
            for (i = 0; i < 8; i++) {
                let path_file = 'path/logo_' + logo_id_data + "_path_" + i + ".svg";
                let element_id = "image_path_" + i + "_animation"
                storage.ref(path_file).getDownloadURL()
                    .then((url_path) => {
                        document.getElementById(element_id).src = url_path;
                    });
            }
        })
    })


    // initiate ratings
    path_0_rating_data = "no_rating";
    path_1_rating_data = "no_rating";
    path_2_rating_data = "no_rating";
    path_3_rating_data = "no_rating";
    path_4_rating_data = "no_rating";
    path_5_rating_data = "no_rating";
    path_6_rating_data = "no_rating";
    path_7_rating_data = "no_rating";


    // delete document
    // doc.ref.delete();
}


// functions to add labels
function add_label_path_0(label) {
    path_0_rating_data = label;
}

function add_label_path_1(label) {
    path_1_rating_data = label;
}

function add_label_path_2(label) {
    path_2_rating_data = label;
}

function add_label_path_3(label) {
    path_3_rating_data = label;
}

function add_label_path_4(label) {
    path_4_rating_data = label;
}

function add_label_path_5(label) {
    path_5_rating_data = label;
}

function add_label_path_6(label) {
    path_6_rating_data = label;
}

function add_label_path_7(label) {
    path_7_rating_data = label;
}

// function that writes firestore document with rating
function save_animation_label() {

    // get alias
    alias = document.getElementById("alias-2").value;

    // create new document
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


// function to update score
function update_highscore() {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});
}

// update highscore function
function next_animation() {

    // save label
    save_animation_label()

    // update highscore
    update_highscore()

    // get new logo
    get_random_logo()

}


// initiate variables
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
let alias;

// initiate random logo
get_random_logo()




