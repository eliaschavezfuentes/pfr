function addUser(){
    player1_name =  document.getElementById("player1_name_input"),value;
    player2_name =  document.getElementById("player2_name_input"),value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}
























function send (){
    get_wort = documet.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in Lower Case = "+ word);
    
    chartAt1 = word.chartAt(1);
    console.log (chartAt1);

    length_divide_2 = marth.floor(word.lengeth/2);
    chartAt2 = word.chartAt(length_divide_2);
    console.log(chartAt2);
    
    length_minus_1 = word.length-1;
    chartAt3 = word.chartAt(length_minus_1);
    console.log(chartAt3);
    
    remuve_chartAt1 = word.replace(chartAt1, "_");
    remove_chartAt2 = remuve_chartAt1.replace(chartAt2, "_");
    remove_chartAt3 = remuve_chartAt2.replace(chartAt3, "_");
    console.log(remove_chartAt3)

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
     input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>Comprobar</button>";;
       row = question_word +input_box+ckeck_button; 
       document.getElementById("output").innerHTML = row; 
       document.getElementById("word").value= "";
}

question_turn = "player1";
answer_turn = "player2";
function check(){
    et_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" +answer);

if(answer == word){
    if(answer_turn == "player1"){
        player1_score = player1_score+1
        document.getElementById("player_score").innerHTML = player1_score;
    }
    elase{
        player2_score = player2_score+1;
        document.getElementById("player2_score").inerHTML = player2_score;
}
if(question_turn == "player1"){
    question_turn == "player2"
    document.getElementById("player_question").inerHTML ="TURNO PARA PREGUNTAR - "+PLAYER1_NAME;
}
elase{
    question_turn ="player1" 
    document.getElementById("player_question").inerHTML = "turno para preguntar - "+player1_name;

}

}
document.getElementById("output").inenrHTML = "";
}