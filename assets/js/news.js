const firebaseConfig = {
    apiKey: "AIzaSyC18tNBDGbpqZXN9soUUPsdjZ2lkv5nzUc",
    authDomain: "hyderium-69.firebaseapp.com",
    databaseURL: "https://hyderium-69-default-rtdb.firebaseio.com",
    projectId: "hyderium-69",
    storageBucket: "hyderium-69.appspot.com",
    messagingSenderId: "668101176548",
    appId: "1:668101176548:web:7b7a9cd921b176d4cf10f1",
    measurementId: "G-NWKR09TWV7"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();

    const msg = `<div class="comment-box"><div class="comment-head"><div class="comment-info"><div class="comment-name">Par <span id="staffCm">${messages.usr}</span></div><span>${messages.date}</span></div></div><div class="comment-content"><div class="comment-title">${messages.titre} :</div>${messages.msg}</div></div>`;
    document.getElementById("messages").innerHTML += msg;
});
