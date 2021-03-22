// Connect to database
const db = firebase.firestore();
const storage = firebase.storage();

// Initiate random image
let number = 0;
let logo_file_path_full = 'path/logo_' + number + "_path_full.svg";
let logo_file_path_0 = 'path/logo_' + number + "_path_0.svg";
let logo_file_path_1 = 'path/logo_' + number + "_path_1.svg";
let logo_file_path_2 = 'path/logo_' + number + "_path_2.svg";
let logo_file_path_3 = 'path/logo_' + number + "_path_3.svg";
let logo_file_path_4 = 'path/logo_' + number + "_path_4.svg";
let logo_file_path_5 = 'path/logo_' + number + "_path_5.svg";
let logo_file_path_6 = 'path/logo_' + number + "_path_6.svg";
let logo_file_path_7 = 'path/logo_' + number + "_path_7.svg";


storage.ref(logo_file_path_full).getDownloadURL()
    .then((url) => {
        document.getElementById("logo_full").src = url;
    });

storage.ref(logo_file_path_0).getDownloadURL()
    .then((url_path_0) => {
        document.getElementById("image_path_0").src = url_path_0;
    });

storage.ref(logo_file_path_1).getDownloadURL()
    .then((url_path_1) => {
        document.getElementById("image_path_1").src = url_path_1;
    });

storage.ref(logo_file_path_2).getDownloadURL()
    .then((url_path_2) => {
        document.getElementById("image_path_2").src = url_path_2;
    });

storage.ref(logo_file_path_3).getDownloadURL()
    .then((url_path_3) => {
        document.getElementById("image_path_3").src = url_path_3;
    });

storage.ref(logo_file_path_4).getDownloadURL()
    .then((url_path_4) => {
        document.getElementById("image_path_4").src = url_path_4;
    });

storage.ref(logo_file_path_5).getDownloadURL()
    .then((url_path_5) => {
        document.getElementById("image_path_5").src = url_path_5;
    });

storage.ref(logo_file_path_6).getDownloadURL()
    .then((url_path_6) => {
        document.getElementById("image_path_6").src = url_path_6;
    });

storage.ref(logo_file_path_7).getDownloadURL()
    .then((url_path_7) => {
        document.getElementById("image_path_7").src = url_path_7;
    });



// Initiate variables
let animate_logo_0 = false;
let animate_logo_1 = false;
let animate_logo_2 = false;
let animate_logo_3 = false;
let animate_logo_4 = false;
let animate_logo_5 = false;
let animate_logo_6 = false;
let animate_logo_7 = false;

// Change values
function add_label_path_0() {
    animate_logo_0 = true;
    document.getElementById("path_0").style.border = "1px solid black";
    document.getElementById("path_0").onclick = delete_label_path_0;
}

function delete_label_path_0() {
    animate_logo_0 = false;
    document.getElementById("path_0").style.border = "none";
    document.getElementById("path_0").onclick = add_label_path_0;
}

function add_label_path_1() {
    animate_logo_1 = true;
    document.getElementById("path_1").style.border = "1px solid black";
    document.getElementById("path_1").onclick = delete_label_path_1;
}

function delete_label_path_1() {
    animate_logo_1 = false;
    document.getElementById("path_1").style.border = "none";
    document.getElementById("path_1").onclick = add_label_path_1;
}

function add_label_path_2() {
    animate_logo_2 = true;
    document.getElementById("path_2").style.border = "1px solid black";
    document.getElementById("path_2").onclick = delete_label_path_2;
}

function delete_label_path_2() {
    animate_logo_2 = false;
    document.getElementById("path_2").style.border = "none";
    document.getElementById("path_2").onclick = add_label_path_2;
}

function add_label_path_3() {
    animate_logo_3 = true;
    document.getElementById("path_3").style.border = "1px solid black";
    document.getElementById("path_3").onclick = delete_label_path_3;
}

function delete_label_path_3() {
    animate_logo_3 = false;
    document.getElementById("path_3").style.border = "none";
    document.getElementById("path_3").onclick = add_label_path_3;
}

function add_label_path_4() {
    animate_logo_4 = true;
    document.getElementById("path_4").style.border = "1px solid black";
    document.getElementById("path_4").onclick = delete_label_path_4;
}

function delete_label_path_4() {
    animate_logo_4 = false;
    document.getElementById("path_4").style.border = "none";
    document.getElementById("path_4").onclick = add_label_path_4;
}

function add_label_path_5() {
    animate_logo_5 = true;
    document.getElementById("path_5").style.border = "1px solid black";
    document.getElementById("path_5").onclick = delete_label_path_5;
}

function delete_label_path_5() {
    animate_logo_5 = false;
    document.getElementById("path_5").style.border = "none";
    document.getElementById("path_5").onclick = add_label_path_5;
}

function add_label_path_6() {
    animate_logo_6 = true;
    document.getElementById("path_6").style.border = "1px solid black";
    document.getElementById("path_6").onclick = delete_label_path_6;
}

function delete_label_path_6() {
    animate_logo_6 = false;
    document.getElementById("path_6").style.border = "none";
    document.getElementById("path_6").onclick = add_label_path_6;
}

function add_label_path_7() {
    animate_logo_7 = true;
    document.getElementById("path_7").style.border = "1px solid black";
    document.getElementById("path_7").onclick = delete_label_path_7;
}

function delete_label_path_7() {
    animate_logo_7 = false;
    document.getElementById("path_7").style.border = "none";
    document.getElementById("path_7").onclick = add_label_path_7;
}




// send button
function send_data() {
    let alias = document.getElementById("alias").value;
    db.collection("labelpath").doc().set({
        logo: logo_file_path_full,
        path_0: animate_logo_0,
        path_1: animate_logo_1,
        path_2: animate_logo_2,
        path_3: animate_logo_3,
        path_4: animate_logo_4,
        path_5: animate_logo_5,
        path_6: animate_logo_6,
        path_7: animate_logo_7,
        alias: alias
    })
    update_highscore_load_new_image(alias)
}


// update highscore
function update_highscore_load_new_image(alias) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscore').doc(alias);
    storyRef.set({score: increment, alias: alias}, {merge: true});

    // delete marker
    document.getElementById("path_0").style.border =  "none";
    document.getElementById("path_1").style.border =  "none";
    document.getElementById("path_2").style.border =  "none";
    document.getElementById("path_3").style.border =  "none";
    document.getElementById("path_4").style.border =  "none";
    document.getElementById("path_5").style.border =  "none";
    document.getElementById("path_6").style.border =  "none";
    document.getElementById("path_7").style.border =  "none";

    // add function
    document.getElementById("path_0").onclick = add_label_path_0;
    document.getElementById("path_1").onclick = add_label_path_1;
    document.getElementById("path_2").onclick = add_label_path_2;
    document.getElementById("path_3").onclick = add_label_path_3;
    document.getElementById("path_4").onclick = add_label_path_4;
    document.getElementById("path_5").onclick = add_label_path_5;
    document.getElementById("path_6").onclick = add_label_path_6;
    document.getElementById("path_7").onclick = add_label_path_7;



    // get new image
    // create random generator
    number++;
    logo_file_path_full = 'path/logo_' + number + "_path_full.svg";
    logo_file_path_0 = 'path/logo_' + number + "_path_0.svg";
    logo_file_path_1 = 'path/logo_' + number + "_path_1.svg";
    logo_file_path_2 = 'path/logo_' + number + "_path_2.svg";
    logo_file_path_3 = 'path/logo_' + number + "_path_3.svg";
    logo_file_path_4 = 'path/logo_' + number + "_path_4.svg";
    logo_file_path_5 = 'path/logo_' + number + "_path_5.svg";
    logo_file_path_6 = 'path/logo_' + number + "_path_6.svg";
    logo_file_path_7 = 'path/logo_' + number + "_path_7.svg";



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


// Reset variables
    animate_logo_0 = false;
    animate_logo_1 = false;
    animate_logo_2 = false;
    animate_logo_3 = false;
    animate_logo_4 = false;
    animate_logo_5 = false;
    animate_logo_6 = false;
    animate_logo_7 = false;

}



