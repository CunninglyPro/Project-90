function addUser() {
    var player_1 = document.getElementById("playerlogin1").value;
    var player_2 = document.getElementById("playerlogin2").value;

    localStorage.setItem("player1login", player_1);
    localStorage.setItem("player2login", player_2);

    window.location = "quiz_game_page.html";
}   