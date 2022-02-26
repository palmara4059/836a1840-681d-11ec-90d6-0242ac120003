firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../.././logout.html")
    }else{
        document.getElementById("Pseudo").innerHTML = user.username;
        document.getElementById("nameUser").innerHTML = user.username;
        document.getElementById("userId").innerHTML = user.uid;
        document.getElementById("userMail").innerHTML = user.email;
    }
})

function logout(){
    firebase.auth().signOut()
}