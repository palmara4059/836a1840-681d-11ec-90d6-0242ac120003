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

document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
    e.preventDefault();

    const timestamp = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const chatTitre = document.getElementById("chat-titre");
    const chatTxt = document.getElementById("chat-txt");
    const chatName = document.getElementById("username");
    const titre = chatTitre.value;
    const message = chatTxt.value;
    const username = chatName.value;

    chatTxt.value = "";
    db.ref("messages/" + timestamp).set({
        usr: username,
        date: `${timestamp.toLocaleDateString(undefined, options)}`,
        titre: titre,
        msg: message,
    });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();

    const msg = `<div class="comment-box"><div class="comment-head"><div class="comment-info"><div class="comment-name">Par <span id="staffCm">${messages.usr}</span></div><span>${messages.date}</span></div></div><div class="comment-content"><div class="comment-title">${messages.titre} :</div>${messages.msg}</div></div>`;
    document.getElementById("messages").innerHTML += msg;
});