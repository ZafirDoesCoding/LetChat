function addUser(){
    username = document.getElementById("username").value;
    localStorage.setItem("Username",username);
    window.location="kwitter-room.html";
}