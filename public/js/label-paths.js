/* Define firestore reference for easy use in functions */
const db = firebase.firestore();
const storage = firebase.storage();


/* Update highscore and load the paths images of the next Logo  */
function update_highscore_load_new_image(alias) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    document.getElementById("path_0").style.border = "none";
    document.getElementById("path_1").style.border = "none";
    document.getElementById("path_2").style.border = "none";
    document.getElementById("path_3").style.border = "none";
    document.getElementById("path_4").style.border = "none";
    document.getElementById("path_5").style.border = "none";
    document.getElementById("path_6").style.border = "none";
    document.getElementById("path_7").style.border = "none";

    document.getElementById("path_0").onclick = add_label_path_0;
    document.getElementById("path_1").onclick = add_label_path_1;
    document.getElementById("path_2").onclick = add_label_path_2;
    document.getElementById("path_3").onclick = add_label_path_3;
    document.getElementById("path_4").onclick = add_label_path_4;
    document.getElementById("path_5").onclick = add_label_path_5;
    document.getElementById("path_6").onclick = add_label_path_6;
    document.getElementById("path_7").onclick = add_label_path_7;

    /* Increase the number so that every Logo is displayed in order based on their number */
    order_id++;
    db.collection("animation_example").where("order_id", "==", order_id)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                logo_id_data = doc.data().logo_id;
                logo_file_path_full = 'logos_example/logo_' + logo_id_data + ".svg";
                logo_file_path_0 = 'animation_path_example/logo_' + logo_id_data + "_0.svg";
                logo_file_path_1 = 'animation_path_example/logo_' + logo_id_data + "_1.svg";
                logo_file_path_2 = 'animation_path_example/logo_' + logo_id_data + "_2.svg";
                logo_file_path_3 = 'animation_path_example/logo_' + logo_id_data + "_3.svg";
                logo_file_path_4 = 'animation_path_example/logo_' + logo_id_data + "_4.svg";
                logo_file_path_5 = 'animation_path_example/logo_' + logo_id_data + "_5.svg";
                logo_file_path_6 = 'animation_path_example/logo_' + logo_id_data + "_6.svg";
                logo_file_path_7 = 'animation_path_example/logo_' + logo_id_data + "_7.svg";


                storage.ref(logo_file_path_full).getDownloadURL()
                    .then((url) => {
                        document.getElementById("logo_full").src = url;
                    })

                storage.ref(logo_file_path_0).getDownloadURL()
                    .then((url_path_0) => {
                        document.getElementById("image_path_0").src = url_path_0;
                    })

                storage.ref(logo_file_path_1).getDownloadURL()
                    .then((url_path_1) => {
                        document.getElementById("image_path_1").src = url_path_1;
                    })

                storage.ref(logo_file_path_2).getDownloadURL()
                    .then((url_path_2) => {
                        document.getElementById("image_path_2").src = url_path_2;
                    })

                storage.ref(logo_file_path_3).getDownloadURL()
                    .then((url_path_3) => {
                        document.getElementById("image_path_3").src = url_path_3;
                    })

                storage.ref(logo_file_path_4).getDownloadURL()
                    .then((url_path_4) => {
                        document.getElementById("image_path_4").src = url_path_4;
                    })

                storage.ref(logo_file_path_5).getDownloadURL()
                    .then((url_path_5) => {
                        document.getElementById("image_path_5").src = url_path_5;
                    })

                storage.ref(logo_file_path_6).getDownloadURL()
                    .then((url_path_6) => {
                        document.getElementById("image_path_6").src = url_path_6;
                    })

                storage.ref(logo_file_path_7).getDownloadURL()
                    .then((url_path_7) => {
                        document.getElementById("image_path_7").src = url_path_7;
                    })

                animate_logo_0 = false;
                animate_logo_1 = false;
                animate_logo_2 = false;
                animate_logo_3 = false;
                animate_logo_4 = false;
                animate_logo_5 = false;
                animate_logo_6 = false;
                animate_logo_7 = false;

            })
        })

}

/* Add the label "true" in the database for path 0 */
function add_label_path_0() {
    animate_logo_0 = true;
    document.getElementById("path_0").style.border = "1px solid black";
    document.getElementById("path_0").onclick = delete_label_path_0;
}


/* Add the label "false" in the database for path 0 */
function delete_label_path_0() {
    animate_logo_0 = false;
    document.getElementById("path_0").style.border = "none";
    document.getElementById("path_0").onclick = add_label_path_0;
}


/* Add the label "true" in the database for path 1 */
function add_label_path_1() {
    animate_logo_1 = true;
    document.getElementById("path_1").style.border = "1px solid black";
    document.getElementById("path_1").onclick = delete_label_path_1;
}


/* Add the label "false" in the database for path 1 */
function delete_label_path_1() {
    animate_logo_1 = false;
    document.getElementById("path_1").style.border = "none";
    document.getElementById("path_1").onclick = add_label_path_1;
}


/* Add the label "true" in the database for path 2 */
function add_label_path_2() {
    animate_logo_2 = true;
    document.getElementById("path_2").style.border = "1px solid black";
    document.getElementById("path_2").onclick = delete_label_path_2;
}


/* Add the label "false" in the database for path 2 */
function delete_label_path_2() {
    animate_logo_2 = false;
    document.getElementById("path_2").style.border = "none";
    document.getElementById("path_2").onclick = add_label_path_2;
}


/* Add the label "true" in the database for path 3 */
function add_label_path_3() {
    animate_logo_3 = true;
    document.getElementById("path_3").style.border = "1px solid black";
    document.getElementById("path_3").onclick = delete_label_path_3;
}


/* Add the label "false" in the database for path 3 */
function delete_label_path_3() {
    animate_logo_3 = false;
    document.getElementById("path_3").style.border = "none";
    document.getElementById("path_3").onclick = add_label_path_3;
}


/* Add the label "true" in the database for path 4 */
function add_label_path_4() {
    animate_logo_4 = true;
    document.getElementById("path_4").style.border = "1px solid black";
    document.getElementById("path_4").onclick = delete_label_path_4;
}


/* Add the label "false" in the database for path 4 */
function delete_label_path_4() {
    animate_logo_4 = false;
    document.getElementById("path_4").style.border = "none";
    document.getElementById("path_4").onclick = add_label_path_4;
}


/* Add the label "true" in the database for path 5 */
function add_label_path_5() {
    animate_logo_5 = true;
    document.getElementById("path_5").style.border = "1px solid black";
    document.getElementById("path_5").onclick = delete_label_path_5;
}


/* Add the label "false" in the database for path 5 */
function delete_label_path_5() {
    animate_logo_5 = false;
    document.getElementById("path_5").style.border = "none";
    document.getElementById("path_5").onclick = add_label_path_5;
}


/* Add the label "true" in the database for path 6 */
function add_label_path_6() {
    animate_logo_6 = true;
    document.getElementById("path_6").style.border = "1px solid black";
    document.getElementById("path_6").onclick = delete_label_path_6;
}


/* Add the label "false" in the database for path 6 */
function delete_label_path_6() {
    animate_logo_6 = false;
    document.getElementById("path_6").style.border = "none";
    document.getElementById("path_6").onclick = add_label_path_6;
}


/* Add the label "true" in the database for path 7 */
function add_label_path_7() {
    animate_logo_7 = true;
    document.getElementById("path_7").style.border = "1px solid black";
    document.getElementById("path_7").onclick = delete_label_path_7;
}


/* Add the label "false" in the database for path 7 */
function delete_label_path_7() {
    animate_logo_7 = false;
    document.getElementById("path_7").style.border = "none";
    document.getElementById("path_7").onclick = add_label_path_7;
}


/* Send data to database and execute function update_highscore_load_new_image */
function send_data() {
    let alias = document.getElementById("alias").value;
    db.collection("labelpath").doc().set({
        alias: alias,
        logo: logo_file_path_full,
        path_0: animate_logo_0,
        path_1: animate_logo_1,
        path_2: animate_logo_2,
        path_3: animate_logo_3,
        path_4: animate_logo_4,
        path_5: animate_logo_5,
        path_6: animate_logo_6,
        path_7: animate_logo_7,
        time: firebase.firestore.FieldValue.serverTimestamp()
    })
    update_highscore_load_new_image(alias)
}


/* Initialize the first 8 paths of the Logo with number 192 */
let order_id = 0;

db.collection("animation_example").where("order_id", "==", order_id)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            logo_id_data = doc.data().logo_id;
            logo_file_path_full = 'logos_example/logo_' + logo_id_data + ".svg";
            logo_file_path_0 = 'animation_path_example/logo_' + logo_id_data + "_0.svg";
            logo_file_path_1 = 'animation_path_example/logo_' + logo_id_data + "_1.svg";
            logo_file_path_2 = 'animation_path_example/logo_' + logo_id_data + "_2.svg";
            logo_file_path_3 = 'animation_path_example/logo_' + logo_id_data + "_3.svg";
            logo_file_path_4 = 'animation_path_example/logo_' + logo_id_data + "_4.svg";
            logo_file_path_5 = 'animation_path_example/logo_' + logo_id_data + "_5.svg";
            logo_file_path_6 = 'animation_path_example/logo_' + logo_id_data + "_6.svg";
            logo_file_path_7 = 'animation_path_example/logo_' + logo_id_data + "_7.svg";

            storage.ref(logo_file_path_full).getDownloadURL()
                .then((url) => {
                    document.getElementById("logo_full").src = url;
                })

            storage.ref(logo_file_path_0).getDownloadURL()
                .then((url_path_0) => {
                    document.getElementById("image_path_0").src = url_path_0;
                })

            storage.ref(logo_file_path_1).getDownloadURL()
                .then((url_path_1) => {
                    document.getElementById("image_path_1").src = url_path_1;
                })

            storage.ref(logo_file_path_2).getDownloadURL()
                .then((url_path_2) => {
                    document.getElementById("image_path_2").src = url_path_2;
                })

            storage.ref(logo_file_path_3).getDownloadURL()
                .then((url_path_3) => {
                    document.getElementById("image_path_3").src = url_path_3;
                })

            storage.ref(logo_file_path_4).getDownloadURL()
                .then((url_path_4) => {
                    document.getElementById("image_path_4").src = url_path_4;
                })

            storage.ref(logo_file_path_5).getDownloadURL()
                .then((url_path_5) => {
                    document.getElementById("image_path_5").src = url_path_5;
                })

            storage.ref(logo_file_path_6).getDownloadURL()
                .then((url_path_6) => {
                    document.getElementById("image_path_6").src = url_path_6;
                })

            storage.ref(logo_file_path_7).getDownloadURL()
                .then((url_path_7) => {
                    document.getElementById("image_path_7").src = url_path_7;
                })

            animate_logo_0 = false;
            animate_logo_1 = false;
            animate_logo_2 = false;
            animate_logo_3 = false;
            animate_logo_4 = false;
            animate_logo_5 = false;
            animate_logo_6 = false;
            animate_logo_7 = false;

        })
    })


let animate_logo_0 = false;
let animate_logo_1 = false;
let animate_logo_2 = false;
let animate_logo_3 = false;
let animate_logo_4 = false;
let animate_logo_5 = false;
let animate_logo_6 = false;
let animate_logo_7 = false;


