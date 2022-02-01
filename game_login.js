function login(){
user1=document.getElementById("user1").value;
user2=document.getElementById("user2").value;
localStorage.setItem("p1", user1);
localStorage.setItem("p2", user2);
window.location="game_page.html";
}