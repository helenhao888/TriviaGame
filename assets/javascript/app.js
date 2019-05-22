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
var questObj={
    "question1":{
        question:"In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
        optionA: "A. William and Elizabeth",
        optionB: "B. Joseph and Catherine",
        optionC: "C. John and Mary",
        optionD: "D. George and Anne",
        answer:  "C. John and Mary",
        correctImg:"assets/images/q1correct.jpg",
        wrongImg:"assets/images/q1wrong.jpg",
        timeoutImg:"assets/images/q1timeout.jpg"},
    "question2":{
        question: "When did the Liberty Bell get its name?",
        optionA: "A. when it was made, in 1701",
        optionB: "B. when it rang on July 4, 1776",
        optionC: "C. in the 19th century, when it became a symbol of the abolition of slavery",
        optionD: "D. none of the above",
        answer:  "C. in the 19th century, when it became a symbol of the abolition of slavery",
        correctImg:"assets/images/q2correct.jpg",
        wrongImg:"assets/images/q2wrong.jpg",
        timeoutImg:"assets/images/q2timeout.jpg"},
               // ,
    // "3","In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?","A. Buttermilk","B. Daisy","C. Scout","D. Tulip","A"],
    // "4","Which of the following items was owned by the fewest U.S. homes in 1990?","A. home computer","B. compact disk player","C. cordless phone","D. dishwasher","B"],
    // "question7":{"The first black American pictured on a U.S. postage stamp was who?","A. Frederick Douglass","B. Booker T. Washington","C. Louis Armstrong","D. Joe Louis","D"],
    // "question6":{"What Is The Highest Temperature Recorded In Antarctica?","A. 58 degrees fahrenheit","B. 28 degrees fahrenheit","C. 108 degrees fahrenheit","D. 18 degrees fahrenheit","A"],
    // "question7":{What Is The Smallest Country In The World?","A. Angola","B. Cuba","C. Luxembourg","D. Vatican City","D"],
    // "question8":{"What Is The Largest City In The World?","A.","B.","C.","C.",""],
    // "question9":{What Is The Largest Waterfall In The World?","A. Inga Falls","B. Niagara Falls","C. Salto Para","D. Victoria Falls","D"],
    // "question10":{"2008 Was Which Anniversary For Québec City?","A. 400th","B. 200th ","C. 100th ","D. 150th","A"],
    // "question11":{"Where Is The Coldest Place On Earth?","A. Nunavut","B. Siberia","C. Antarctica ","D. North Pole",""]

}



var randomArr=[];
var questObjLen=0;
const timeLimit =5; //set time limit for each question
var number=0;  
var intervalId;
var selAnswer,questKey,correctAnswer;

$(document).ready(function(){

    $(".startBtn").on("click",function(){
        

        
        questObjLen=calObjlen(questObj);
        
        getNextQuest();   
        $(".startBtn").css("visibility","hidden");  
        clearInterval(intervalId);
        intervalId=setInterval(decrement,1000);//may need delete

    })

    //when the submit button is clicked, check the answer and display the picture
     $(".submitBtn").on("click",function(){
         console.log("submit proces");
         if(selAnswer===ansStr){
             console.log("correct");
         }else{
             console.log("wrong");
         }
     })

    function calObjlen(obj){
       
       var objlen=0;
       for (var key in obj){
           objlen++;
       }
     
       return objlen;
    }

    function getNextQuest(){
// use random array to store this round's random numbers. In each round the random qeustions 
// can't be duplicte except there is no new question. 
    genFlg=true;
    number=timeLimit;

     console.log("get next quest",genFlg);
      while(genFlg){
         var random=Math.floor(Math.random()*questObjLen)+1;
         if (!randomArr.includes(random)){
            randomArr.push(random);
            genFlg=false;
         } else if( randomArr.length >= questObjLen){            
            genFlg=false;
         }
      }
      
        questKey="question"+random;
        console.log("next quest key",questKey);
        questStr=questObj[questKey].question;       
        optionAStr=questObj[questKey].optionA;
        optionBStr=questObj[questKey].optionB;
        optionCStr=questObj[questKey].optionC;
        optionDStr=questObj[questKey].optionD;
        ansStr=questObj[questKey].answer.charAt(0);

        $("#question").text(questStr);      
        $("#labelA").text(optionAStr);
        $("#labelB").text(optionBStr);
        $("#labelC").text(optionCStr);
        $("#labelD").text(optionDStr);
        clearInterval(intervalId);
        intervalId=setInterval(decrement,1000);
        $(".triviaBox").css("visibility","visible");    
        $(".timerBox").css("visibility","visible");
        $(".submitBtn").css("visibility","visible");
        // $(".timerBox").show();
        // $(".triviaBox").show();
        // $(".submitBtn").show();
        console.log("trivia Box",$("#question").text() );
       
    }

    //only once user selects one option , the submit button is enabled.
    $(".form-check-input").on("click",function(){
              
        
        $(".submitBtn").prop("disabled",false);        
        selAnswer=$(this).val();
    })
    
    function decrement(){
        
        
        if(number<0){
            //call timeout function
            timeoutProcess();
            
        }else{
           
            var temp = timeConverter(number);
          
            $(".timer").text(timeConverter(number));
        }
        number--;
    }

    function timeoutProcess(){
        console.log("time out");
        clearInterval(intervalId);
        displayMsg="Time Out!"
        displayImg=questObj[questKey].timeoutImg;
        correctAnswer="The correct answer is " + questObj[questKey].answer+".";
        hideTrivia();
        createResponse();
        
        setTimeout(getNextQuest,3000);
        // $("#responseBox").delay(2000).css("visibility","hidden");
    }

    function hideTrivia(){
        $(".triviaBox").hide();      
        $(".submitBtn").hide();
    }

    function createResponse(){
        $(".disMsg").text(displayMsg);
        $(".disImg").attr("src",displayImg);
        $(".correctAns").text(correctAnswer);
        // $("#responseBox").css("visibility","visible"); 
        // $(".triviaBox").css("visibility","hidden");   
        // $(".submitBtn").css("visibility","hidden"); 
        $("#responseBox").show();
       

    }


    function timeConverter(t){
       
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
