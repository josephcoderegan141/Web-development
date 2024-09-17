
var notsubmitted = 0;

////////////////////////////// row2
function changevalue1() {
    
   var newGrade = prompt("Enter grade");
   var ehh = false
   var otherval = '-';
   var element=0;
   
   if(newGrade =='-'){
      ehh = true;
      notsubmitted++;
   }

   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

      ehh = false;
   }

   else{
      ehh = true
   }


   ehh ?  element =document.getElementById("c1r2").innerHTML  = otherval : element =document.getElementById("c1r2").innerHTML  = newGrade + '%';
   averagecal0();

}
function changevalue2() {
   var newGrade = prompt("Enter grade");
   var hyphen  = false
   var otherval = '-';
   var element=0;
   if(newGrade =='-'){
      hyphen  = true;
      notsubmitted++;
   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }

   hyphen  ?  element =document.getElementById("c2r2").innerHTML= otherval : element =document.getElementById("c2r2").innerHTML= newGrade + '%';
   averagecal0();

}

function changevalue3() {
    
   var newGrade = prompt("Enter grade");
   var hyphen  = false
   var otherval = '-';
   var element=0;

   if(newGrade=='-'){
      hyphen = true
      notsubmitted++;
   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ? element =document.getElementById("c3r2").innerHTML= otherval : element =document.getElementById("c3r2").innerHTML= newGrade + '%';
   averagecal0();
}
function changevalue4() {
    
   var newGrade = prompt("Enter grade");
   var hyphen = false;
   var element=0;
   var otherval = '-';

   if(newGrade=='-'){
      hyphen = true;
      notsubmitted++;
   }

   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ? element =document.getElementById("c4r2").innerHTML= otherval : element =document.getElementById("c4r2").innerHTML= newGrade + '%';

   averagecal0();

}

function changevalue5() {
    
   var newGrade = prompt("Enter grade");
   var hyphen = false;
   var element=0;
   var otherval = '-';


   if(newGrade=='-'){
      hyphen = true;
      notsubmitted++;

   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ?   element =document.getElementById("c5r2").innerHTML= otherval : element =document.getElementById("c5r2").innerHTML= newGrade + '%';
   averagecal0();

}


function averagecal0(){

      var element1 =document.getElementById("c1r2").innerHTML;
      var element2 =document.getElementById("c2r2").innerHTML;
      var element3 =document.getElementById("c3r2").innerHTML;
      var element4 =document.getElementById("c4r2").innerHTML;
      var element5 =document.getElementById("c5r2").innerHTML;

      var num1;
      var num2;
      var num3;
      var num4;
      var num5;

      console.log("hello");

      if(element1 =='-'){
         document.getElementById("c1r2").style.backgroundColor = "yellow";
         notsubmitted++;
         num1 = 0;
         console.log(num1);
      }
      else{
          num1 = parseInt(element1);
          document.getElementById("c1r2").style.backgroundColor = "#dddddd";

      }
      if(element2 =='-'){
         document.getElementById("c2r2").style.backgroundColor = "yellow";
         notsubmitted++;
          num2 = 0;
      }
      else{
          num2 = parseInt(element2); //num 2 = element2
          document.getElementById("c2r2").style.backgroundColor = "#dddddd";

      }
      if(element3 =='-'){
         document.getElementById("c3r2").style.backgroundColor = "yellow";
         notsubmitted++;
          num3 = 0;
      }
      else{
          num3 = parseInt(element3);
          document.getElementById("c3r2").style.backgroundColor = "#dddddd";

      }
      if(element4 =='-'){
         document.getElementById("c4r2").style.backgroundColor = "yellow";
         notsubmitted++;
          num4 = 0;
      }
      else{
          num4 = parseInt(element4);
          document.getElementById("c4r2").style.backgroundColor = "#dddddd";

      }
      if(element5 =='-'){
         document.getElementById("c5r2").style.backgroundColor = "yellow";
         notsubmitted++;
          num5 = 0;
      }
      else{
          num5 = parseInt(element5);
          document.getElementById("c5r2").style.backgroundColor = "#dddddd";

      }
      
      var x = num1+num2+num3+num4+num5;
      var sum = x/5;
      var element6 =document.getElementById("c6r2").innerHTML= sum.toFixed(0)+'%';
      if(sum<60){
         document.getElementById("c6r2").style.backgroundColor = "red";
      }
      else{
         document.getElementById("c6r2").style.backgroundColor = "#dddddd";
      }
}








var notsubmitted = 0;

////////////////////////////// row3
function changevalue1r3() {
    
   var newGrade = prompt("Enter grade");
   var ehh = false
   var otherval = '-';
   var element=0;
   
   if(newGrade =='-'){
      ehh = true;
      notsubmitted++;
   }

   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

      ehh = false;
   }

   else{
      ehh = true
   }


   ehh ?  element =document.getElementById("c1r3").innerHTML  = otherval : element =document.getElementById("c1r3").innerHTML  = newGrade + '%';
   averagecal1();

}
function changevalue2r3() {
   var newGrade = prompt("Enter grade");
   var hyphen  = false
   var otherval = '-';
   var element=0;
   if(newGrade =='-'){
      hyphen  = true;
      notsubmitted++;
   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }

   hyphen  ?  element =document.getElementById("c2r3").innerHTML= otherval : element =document.getElementById("c2r3").innerHTML= newGrade + '%';
   averagecal1();

}

function changevalue3r3() {
    
   var newGrade = prompt("Enter grade");
   var hyphen  = false
   var otherval = '-';
   var element=0;

   if(newGrade=='-'){
      hyphen = true
      notsubmitted++;
   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ? element =document.getElementById("c3r3").innerHTML= otherval : element =document.getElementById("c3r3").innerHTML= newGrade + '%';
   averagecal1();
}
function changevalue4r3() {
    
   var newGrade = prompt("Enter grade");
   var hyphen = false;
   var element=0;
   var otherval = '-';

   if(newGrade=='-'){
      hyphen = true;
      notsubmitted++;
   }

   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ? element =document.getElementById("c4r3").innerHTML= otherval : element =document.getElementById("c4r3").innerHTML= newGrade + '%';

   averagecal1();

}

function changevalue5r3() {
    
   var newGrade = prompt("Enter grade");
   var hyphen = false;
   var element=0;
   var otherval = '-';


   if(newGrade=='-'){
      hyphen = true;
      notsubmitted++;

   }
   var regex = /^(100|[1-9]?[0-9])$/;
   if(regex.test(newGrade)) {

     hyphen    = false;
   }

   else{
      hyphen = true
   }
   hyphen ?   element =document.getElementById("c5r3").innerHTML= otherval : element =document.getElementById("c5r3").innerHTML= newGrade + '%';
   averagecal1();

}


function averagecal1(){

      var element1 =document.getElementById("c1r3").innerHTML;
      var element2 =document.getElementById("c2r3").innerHTML;
      var element3 =document.getElementById("c3r3").innerHTML;
      var element4 =document.getElementById("c4r3").innerHTML;
      var element5 =document.getElementById("c5r3").innerHTML;

      var num1;
      var num2;
      var num3;
      var num4;
      var num5;

      console.log("hello");

      if(element1 =='-'){
         document.getElementById("c1r3").style.backgroundColor = "yellow";
         notsubmitted++;
         num1 = 0;
         console.log(num1);
      }
      else{
          num1 = parseInt(element1);
          document.getElementById("c1r3").style.backgroundColor = "white";

      }
      if(element2 =='-'){
         document.getElementById("c2r3").style.backgroundColor = "yellow";
         notsubmitted++;
          num2 = 0;
      }
      else{
          num2 = parseInt(element2); //num 2 = element2
          document.getElementById("c2r3").style.backgroundColor = "white";

      }
      if(element3 =='-'){
         document.getElementById("c3r3").style.backgroundColor = "yellow";
         notsubmitted++;
          num3 = 0;
      }
      else{
          num3 = parseInt(element3);
          document.getElementById("c3r3").style.backgroundColor = "white";

      }
      if(element4 =='-'){
         document.getElementById("c4r3").style.backgroundColor = "yellow";
         notsubmitted++;
          num4 = 0;
      }
      else{
          num4 = parseInt(element4);
          document.getElementById("c4r3").style.backgroundColor = "white";

      }
      if(element5 =='-'){
         document.getElementById("c5r3").style.backgroundColor = "yellow";
         notsubmitted++;
          num5 = 0;
      }
      else{
          num5 = parseInt(element5);
          document.getElementById("c5r3").style.backgroundColor = "white";

      }
      
      var x = num1+num2+num3+num4+num5;
      var sum = x/5;
      var element6 =document.getElementById("c6r3").innerHTML= sum.toFixed(0)+'%';
      if(sum<60){
         document.getElementById("c6r3").style.backgroundColor = "red";
      }
      else{
         document.getElementById("c6r3").style.backgroundColor = "white";
      }
}





































//////// part2

var currentstate = 0;

function changeGradeheader() {
    const header = document.getElementById('averageheader');
    const grades = document.querySelectorAll('.averageGrade');
    const grades1 = document.querySelectorAll('.averageGrade');
    const grades2 = document.querySelectorAll('.averageGrade');

    currentstate = (currentstate + 1) % 3; // Click through states

    switch (currentstate) {
        case 0: // Percent Grade
            header.innerText = "Average [%]";
            grades.forEach((grade) => {
                
                grade.innerText = calculatePercentGrade(grade) + "%";
            });
            break;
        case 1: // Letter Grade
            header.innerText = "Average [Letter]";
            grades1.forEach((grade) => {
                grade.innerText = calculateLetterGrade(grade);
            });
            break;
        case 2: // 4.0 Grade
            header.innerText = "Average [4.0]";
            grades2.forEach((grade) => {
                grade.innerText = calculateFourPointGrade(grade);
            });
            break;
    }
}

function calculatePercentGrade(gradeElement) {
    
    return gradeElement.innerText.slice(0, -1);
}

function calculateLetterGrade(gradeElement) {
  
    const percent = parseInt(gradeElement.innerText.slice(0, -1));
    if (percent >= 93) return 'A';
    else if (percent >= 90) return 'A-';
    else if (percent >= 87) return 'B+';
    else if (percent >= 83) return 'B';
    else if (percent >= 80) return 'B-';
    else if (percent >= 77) return 'C+';
    else if (percent >= 73) return 'C';
    else if (percent >= 70) return 'C-';
    else if (percent >= 67) return 'D+';
    else if (percent >= 63) return 'D';
    else if (percent >= 60) return 'D-';

    else return 'F';
}

function calculateFourPointGrade(gradeElement) {
   
    const percent = parseInt(gradeElement.innerText.slice(0, -1));
   
    if (percent >= 93) return '4.00';
    else if (percent >= 90) return '3.7';
    else if (percent >= 87) return '3.3';
    else if (percent >= 83) return '3';
    else if (percent >= 80) return '2.7';
    else if (percent >= 77) return '2.3';
    else if (percent >= 73) return '2';
    else if (percent >= 70) return '1.7';
    else if (percent >= 67) return '1.3';
    else if (percent >= 63) return '1.0';
    else if (percent >= 60) return '.7';

    else return '0.0';



}



////////part3


function addRows(){


   var table = document.getElementById("gradetable");

   var row = table.insertRow(-1);

   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   var cell7 = row.insertCell(6);
   var cell8 = row.insertCell(7);
  
   cell1.innerHTML = "NEW CELL1";
   cell2.innerHTML = "NEW CELL2";
   cell3.innerHTML = "NEW CELL3";
   cell4.innerHTML = "NEW CELL4";
   cell5.innerHTML = "NEW CELL5";
   cell6.innerHTML = "NEW CELL6";
   cell7.innerHTML = "NEW CELL7";
   cell8.innerHTML = "NEW CELL8";
}

function addcolumne(){        // reference code.mu

   let trs = document.querySelectorAll('#table tr');

   for (let tr of trs) {
      let td = document.createElement('td');
      tr.appendChild(td);
}


}





