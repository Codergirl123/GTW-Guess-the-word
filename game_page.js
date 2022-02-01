user1=localStorage.getItem("p1");
user2=localStorage.getItem("p2");
player1score=0;
player2score=0;
document.getElementById("player1").innerHTML="player 1: "+ user1;
document.getElementById("player2").innerHTML="player 2: "+ user2;
document.getElementById("player1score").innerHTML = player1score ;
document.getElementById("player2score").innerHTML = player2score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + user1 ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + user2 ;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    char1 = word.charAt(1);
    length_divide_2 = Math.floor(word.length/2);
    char2=word.charAt(length_divide_2);
    length_minus_1 = word.length-1
    char3 = word.charAt(length_minus_1)
    console.log(char3);
    remove_1 = word.replace(char1,"_");
    remove_2 = remove_1.replace(char2,"_");
    remove_3 = remove_2.replace(char3,"_");
    console.log(remove_3)
    question_word="<h4 id='word_display'>"+remove_3+"</h4>";
    input_box= "<br> Answer: <input type = 'text' id='input_check_box'>";

    checkbuton="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button> "
    row=question_word+input_box+checkbuton;
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
    


}
question_turn="player1";
answer_turn="player2";

function check() {
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
if (word==answer) {
    if (answer_turn=="player1") {
        player1score=player1score+1
        document.getElementById("player1score").innerHTML = player1score ;
    }
    else {
        player2score=player2score+1
        document.getElementById("player2score").innerHTML = player2score ;   
    }
}
if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + user2 ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + user1 ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + user2 ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + user1 ;
	}

    document.getElementById("output").innerHTML = "";
}