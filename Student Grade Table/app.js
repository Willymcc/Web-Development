function avg(){
  
var table = document.getElementById("Grades");

var rowcount = 5;
var box = 0;
var sum = 0;


for ( var i = 1; i<=10; i++ ){
sum = 0;
box = 0;
var gradeavg = 0;


  for(var j = 2; j < 7; j++){

      box = Number(table.rows[i].cells[j].innerHTML);

      sum = sum + box;

    }


    gradeavg = Math.round(sum/rowcount);
    var x = document.getElementsByTagName("td");
    document.getElementById("Grades").rows[i].cells[7].innerHTML = "CA: " + Number(gradeavg) + "%";



    if(gradeavg < 40){
    document.getElementById("Grades").rows[i].cells[7].style.backgroundColor = "red";
  }

    else if(gradeavg > 40 && gradeavg <=70){
    document.getElementById("Grades").rows[i].cells[7].style.backgroundColor = "yellow";
  }

    else if(gradeavg > 70 && gradeavg <=100){
    document.getElementById("Grades").rows[i].cells[7].style.backgroundColor = "green";
  }

    else
    break;

}

}
