var questions=[
    ["1","In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
    "A. William and Elizabeth","B. Joseph and Catherine","C. John and Mary","D. George and Anne","C"],
    ["2","When did the Liberty Bell get its name?","A. when it was made, in 1701","B. when it rang on July 4, 1776",
      "C. in the 19th century, when it became a symbol of the abolition of slavery","D. none of the above","C"],
    ["3","In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?","A. Buttermilk","B. Daisy","C. Scout","D. Tulip","A"],
    ["4","Which of the following items was owned by the fewest U.S. homes in 1990?","A. home computer","B. compact disk player","C. cordless phone","D. dishwasher","B"],
    ["5","The first black American pictured on a U.S. postage stamp was who?","A. Frederick Douglass","B. Booker T. Washington","C. Louis Armstrong","D. Joe Louis","D"],
    ["6","What Is The Highest Temperature Recorded In Antarctica?","A. 58 degrees fahrenheit","B. 28 degrees fahrenheit","C. 108 degrees fahrenheit","D. 18 degrees fahrenheit","A"],
    ["7","What Is The Smallest Country In The World?","A. Angola","B. Cuba","C. Luxembourg","D. Vatican City","D"],
    ["8","What Is The Largest City In The World?","A.","B.","C.","C.",""],
    ["9","What Is The Largest Waterfall In The World?","A. Inga Falls","B. Niagara Falls","C. Salto Para","D. Victoria Falls","D"],
    ["10","2008 Was Which Anniversary For Québec City?","A. 400th","B. 200th ","C. 100th ","D. 150th","A"],
    ["11","Where Is The Coldest Place On Earth?","A. Nunavut","B. Siberia","C. Antarctica ","D. North Pole",""]
]
var questNum=0;

var number=30;  //set 30 seconds for each question
var intervalId;

$(document).ready(function(){

    $(".startBtn").on("click",function(){
        $(".startBtn").hide();
        $(".triviaBox").css("visibility","visible");
        questNum=1;
        getNextQuest();
        $("#question").text(questStr);      
        $("#labelA").text(optionAStr);
        $("#labelB").text(optionBStr);
        $("#labelC").text(optionCStr);
        $("#labelD").text(optionDStr);

        $(".submitBtn").css("visibility","visible");
        clearInterval(intervalId);
        intervalId=setInterval(decrement,1000);

    })

    function getNextQuest(){
        //if all the questions have been gotten, get the question from the beginning
        if (questNum > questions.length){
            questNum =1;
        }
        
        questStr=questions[questNum-1][1];
        optionAStr=questions[questNum-1][2];
        optionBStr=questions[questNum-1][3];
        optionCStr=questions[questNum-1][4];
        optionDStr=questions[questNum-1][5];
        ansStr=questions[questNum-1][6];
       console.log("questNum", questNum);
       console.log("quest",questStr);
    }

    $(".form-check-input").on("click",function(){
       
        if(".form-check-label")

    })

    function decrement(){
        
        console.log("number",number)
        if(number<0){
            //call timeout function
            timeoutProcess();
            
        }else{
            console.log("convert time",$(".timer"));
            var temp = timeConverter(number);
            console.log("time",temp);
            $(".timer").text(timeConverter(number));
        }
        number--;
    }

    function timeoutProcess(){
        console.log("time out");
        clearInterval(intervalId);
    }

    function timeConverter(t){
        console.log("time convert",t);
     if (typeof(t)!=Number){
        t=parseInt(t);
     }
      if (t >= 0 ){
          var  minute = Math.floor(t/60);
          var  second = t-minute;
      }else{
          minute = 0;
          second =0;
      }    

      if (minute <10){
          minute = "0" + minute;
      }else if (minute === 0) {
          minute="00";
      }
      if (second<10){
          second="0" + second;
      }else if (second===0){
          second="00";
      }
      
      return minute+":"+second;
    }


})
