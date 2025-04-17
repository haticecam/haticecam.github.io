var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}

	var highestScore = Number.MIN_VALUE;
	var highestName = " ";

	for (var j = 0; j<scores.length; j++ ){
		if (scores[j] > highestScore){
			highestScore = scores[j];
			highestName = names[j];
		}
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> " + "High score: " +highestName+ " with a score of " +highestScore+  "<br \> "; 


}

function addScore(){
	document.getElementById("results").innerHTML = "";
	var name = $("name").value.trim();
    var score = parseInt($("score").value, 10);

   	if (name === "" || !/^[A-Za-z]+$/.test($("name").value.trim()) || isNaN(score) || score < 0 || score > 100) {
        document.getElementById("results").innerHTML="Invalid name or score.";
        return;
    }

    names.push(name);
    scores.push(score);

    $("name").value = "";
    $("score").value = "";
    $("name").focus();
}

function displayScores(){
	var output = "<h2>Scores</h2>";
    output += "<table><tr><th>Name</th><th>Score</th></tr>";

    for (var i = 0; i < scores.length; i++) {
        output += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }

    output += "</table>";
    $("scores_table").innerHTML = output;
}




