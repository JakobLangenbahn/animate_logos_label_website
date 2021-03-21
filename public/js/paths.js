// Connect to database
const db = firebase.firestore();
const storage = firebase.storage();

// Initiate random image
let number = 1;
let logo_file_path_full = 'logo_' + number + "_path_full.svg";
let logo_file_path_1 = 'logo_' + number + "_path_1.svg";
let logo_file_path_2 = 'logo_' + number + "_path_2.svg";
let logo_file_path_3 = 'logo_' + number + "_path_3.svg";
let logo_file_path_4 = 'logo_' + number + "_path_4.svg";
let logo_file_path_5 = 'logo_' + number + "_path_5.svg";
let logo_file_path_6 = 'logo_' + number + "_path_6.svg";
let logo_file_path_7 = 'logo_' + number + "_path_7.svg";
let logo_file_path_8 = 'logo_' + number + "_path_8.svg";


storage.ref(logo_file_path_full).getDownloadURL()
    .then((url) => {
        document.getElementById("logo_full").src = url;
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

storage.ref(logo_file_path_8).getDownloadURL()
    .then((url_path_8) => {
        document.getElementById("image_path_8").src = url_path_8;
    });


// Initiate variables
let animate_logo_1 = false;
let animate_logo_2 = false;
let animate_logo_3 = false;
let animate_logo_4 = false;
let animate_logo_5 = false;
let animate_logo_6 = false;
let animate_logo_7 = false;
let animate_logo_8 = false;

// Change values
function add_label_path1() {
    animate_logo_1 = true;
    document.getElementById("path1").classList.toggle("btn_pathselection_active");
}

function add_label_path2() {
    animate_logo_2 = true;
}

function add_label_path3() {
    animate_logo_3 = true;
}

function add_label_path4() {
    animate_logo_4 = true;
}

function add_label_path5() {
    animate_logo_5 = true;
}

function add_label_path6() {
    animate_logo_6 = true;
}

function add_label_path7() {
    animate_logo_7 = true;
}

function add_label_path8() {
    animate_logo_8 = true;
}


// send button
function send_data() {
    var alias = document.getElementById("alias").value;
    db.collection("labelpath").doc().set({
        logo: logo_file_path_full,
        path_1: animate_logo_1,
        path_2: animate_logo_2,
        path_3: animate_logo_3,
        path_4: animate_logo_4,
        path_5: animate_logo_5,
        path_6: animate_logo_6,
        path_7: animate_logo_7,
        path_8: animate_logo_8,
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
    number++;
    logo_file_path_full = 'logo_' + number + "_path_full.svg";
    logo_file_path_1 = 'logo_' + number + "_path_1.svg";
    logo_file_path_2 = 'logo_' + number + "_path_2.svg";
    logo_file_path_3 = 'logo_' + number + "_path_3.svg";
    logo_file_path_4 = 'logo_' + number + "_path_4.svg";
    logo_file_path_5 = 'logo_' + number + "_path_5.svg";
    logo_file_path_6 = 'logo_' + number + "_path_6.svg";
    logo_file_path_7 = 'logo_' + number + "_path_7.svg";
    logo_file_path_8 = 'logo_' + number + "_path_8.svg";


    storage.ref(logo_file_path_full).getDownloadURL()
        .then((url) => {
            document.getElementById("logo_full").src = url;
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
    storage.ref(logo_file_path_8).getDownloadURL()
        .then((url_path_8) => {
            document.getElementById("image_path_8").src = url_path_8;
        })


// Reset variables
    animate_logo_1 = false;
    animate_logo_2 = false;
    animate_logo_3 = false;
    animate_logo_4 = false;
    animate_logo_5 = false;
    animate_logo_6 = false;
    animate_logo_7 = false;
    animate_logo_8 = false;
}

// Keep buttons active


