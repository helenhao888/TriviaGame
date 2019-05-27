
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
    "question3":{
        question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
        optionA: "A. Buttermilk",
        optionB: "B. Daisy",
        optionC: "C. Scout",
        optionD: "D. Tulip",
        answer:  "A. Buttermilk",
        correctImg:"assets/images/q3correct.jpg",
        wrongImg:"assets/images/q3wrong.jpg",
        timeoutImg:"assets/images/q3timeout.jpg"},           
    "question4":{
        question: "Which of the following items was owned by the fewest U.S. homes in 1990?",
        optionA: "A. home computer",
        optionB: "B. compact disk player",
        optionC: "C. cordless phone",
        optionD: "D. dishwasher",
        answer:  "B. compact disk player",
        correctImg:"assets/images/q4correct.jpg",
        wrongImg:"assets/images/q4wrong.jpg",
        timeoutImg:"assets/images/q4timeout.jpg"},      
    "question5":{
        question: "The first black American pictured on a U.S. postage stamp was who?",
        optionA: "A. Frederick Douglass",
        optionB: "B. Booker T. Washington",
        optionC: "C. Louis Armstrong",
        optionD: "D. Joe Louis",
        answer:  "D. Joe Louis",
        correctImg:"assets/images/q1correct.jpg",
        wrongImg:"assets/images/q1wrong.jpg",
        timeoutImg:"assets/images/q1timeout.jpg"},  
    "question6":{
        question: "What Is The Highest Temperature Recorded In Antarctica?",
        optionA: "A. 58 degrees fahrenheit",
        optionB: "B. 28 degrees fahrenheit",
        optionC: "C. 108 degrees fahrenheit",
        optionD: "D. 18 degrees fahrenheit",
        answer:  "A. 58 degrees fahrenheit",
        correctImg:"assets/images/q2correct.jpg",
        wrongImg:"assets/images/q2wrong.jpg",
        timeoutImg:"assets/images/q2timeout.jpg"}, 
    "question7":{
        question: "What Is The Smallest Country In The World?",
        optionA: "A. Angola",
        optionB: "B. Cuba",
        optionC: "C. Luxembourg",
        optionD: "D. Vatican City",
        answer:  "D. Vatican City",
        correctImg:"assets/images/q3correct.jpg",
        wrongImg:"assets/images/q3wrong.jpg",
        timeoutImg:"assets/images/q3timeout.jpg"}, 
    "question8":{
        question: "What Is The Largest Waterfall In The World?",
        optionA: "A. Inga Falls",
        optionB: "B. Niagara Falls",
        optionC: "C. Salto Para",
        optionD: "D. Victoria Falls",
        answer:  "D. Victoria Falls",
        correctImg:"assets/images/q4correct.jpg",
        wrongImg:"assets/images/q4wrong.jpg",
        timeoutImg:"assets/images/q4timeout.jpg"}, 
    "question9":{
        question: "2008 Was Which Anniversary For Québec City?",
        optionA: "A. 400th",
        optionB: "B. 200th",
        optionC: "C. 100th ",
        optionD: "D. 150th",
        answer:  "A. 400th",
        correctImg:"assets/images/q1correct.jpg",
        wrongImg:"assets/images/q1wrong.jpg",
        timeoutImg:"assets/images/q1timeout.jpg"}, 
    "question10":{
        question: "Where Is The Coldest Place On Earth?",
        optionA: "A. Nunavut",
        optionB: "B. Siberia",
        optionC: "C. Antarctica ",
        optionD: "D. North Pole",
        answer:  "C. Antarctica ",
        correctImg:"assets/images/q2correct.jpg",
        wrongImg:"assets/images/q2wrong.jpg",
        timeoutImg:"assets/images/q2timeout.jpg"} 
}

var randomArr=[];
var questObjLen=0;
const timeLimit =10; //set time limit for each question
const roundMaxNum=3; // each round , the number of questions user has to answer
var number=0;  
var questNum=0;
var totalCorrect=0;
var totalWrong=0;
var totalUnanswer=0;
var intervalId;
var selAnswer,questKey,correctAnswer;

$(document).ready(function(){

    $(".startBtn").on("click",function(){
        

       //get the object questObj's length. used for the entire process. 
        questObjLen=calObjlen(questObj);
        clearInterval(intervalId);

        getNextScreen();   
        $(".startBtn").css("visibility","hidden");          
        

    })

    //when the submit button is clicked, check the answer and display the picture
     $(".submitBtn").on("click",function(){
         console.log("submit proces");
         if(selAnswer===ansStr){
             console.log("correct");
             totalCorrect++;
             clearInterval(intervalId);
             createResponse("correct");
             setTimeout(getNextScreen,3000);
         }else{
             console.log("wrong");
             totalWrong++;
             clearInterval(intervalId);
             createResponse("wrong");
            setTimeout(getNextScreen,3000);
         }
     })

    $(".restartBtn").on("click",function(){
       //restart process. Initialize the variables and get the next questions
        initialFun();
        getNextScreen();
    })

    function initialFun(){
        //initialize variables  
        totalCorrect=0;
        totalWrong=0;
        totalUnanswer=0;
        questNum=0;
        displayMsg="";
        displayImg="";
        correctAnswer="";
        randomArr=[];
        
    }

    function getNextScreen(){
        
        
        questNum++;
        //if all this round's questions have not been displayed, display the next question screen
        //else  display the summary screen
        if (questNum <= roundMaxNum)  {
            getQuestion();
        }else{
            summaryRound();
            
        }
    }

    function getQuestion(){
// use random array to store this round's random numbers. In each round the random qeustions 
// can't be duplicte except there is no new question. 
    
     genFlg=true;
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
        

        number=timeLimit;
        clearInterval(intervalId);
        $(".form-check-input").prop("checked",false); 
        $(".submitBtn").prop("disabled",true); 
        intervalId=setInterval(decrement,1000);
        
        $(".triviaBox").show();
        $(".timerBox").css("visibility","visible");
        $("#responseBox").hide();
       
        console.log("trivia Box",$("#question").text() );
       
    }

    
    $(".form-check-input").on("click",function(){
              
        //only the form is checked, the submit button is enable
        $(".submitBtn").prop("disabled",false);        
        selAnswer=$(this).val();
    })

    function summaryRound(){
        
        //create the summary screen
        createResponse("summary");
        $(".restartBtn").css("visibility","visible");  

      
    }
    
   

    function timeoutProcess(){
        //if question has not been answered within limit time, start time out process

        clearInterval(intervalId);
        totalUnanswer++;              
        createResponse("timeout");
        
        setTimeout(getNextScreen,3000);
        
    }

   

    //create reponse message, when time out , submitting correct or wrong answer
    function createResponse(resFlg){

        $(".triviaBox").hide();
        $(".responseInfo").empty();
       //recreated the divs under responseInfo
        var colDiv =$("<div>");
        colDiv.addClass("col-8 col-sm-8 col-md-4 col-lg-4 offset-md-4 offset-sm-3 offset-3");
        $(".responseInfo").append(colDiv);

        var summaryFlg=false;
        
        switch(resFlg){
            case "summary":
                //if it's a summary screen, create statistics divs for correct,in correct and timeout answers
                displayMsg="All done, heres how you did!";
                displayImg="";
                correctAnswer="";
                var correctDiv = $("<div>");
                var wrongDiv=$("<div>");
                var unanswerDiv =$("<div>");
                correctDiv.text("Correct Answers: "+ totalCorrect);
                correctDiv.addClass("correctAns");
                wrongDiv.text("Incorrect Answers: "+ totalWrong);
                wrongDiv.addClass("correctAns")
                unanswerDiv.text("Unanswered Questions: "+ totalUnanswer);
                unanswerDiv.addClass("correctAns");
                summaryFlg=true;       
                $(".restartBtn").css("visibility","visible");          
                break;
            case "timeout":
                displayMsg="Time Out!"
                displayImg=questObj[questKey].timeoutImg;
                correctAnswer="The correct answer is " + questObj[questKey].answer+"."; 
                $(".restartBtn").css("visibility","hidden");    
                break; 
            case "correct":
                displayMsg="Correct!"
                displayImg=questObj[questKey].correctImg;
                correctAnswer=""; 
                $(".restartBtn").css("visibility","hidden");    
                break; 
            case "wrong":
                displayMsg="Nope!"
                displayImg=questObj[questKey].wrongImg;
                correctAnswer="The correct answer is " + questObj[questKey].answer+"."; 
                $(".restartBtn").css("visibility","hidden");    
                break; 
        }

        //create display message div
        var msgDiv=$("<div>");
        msgDiv.text(displayMsg);   
        msgDiv.addClass("disMsg");
        colDiv.append(msgDiv);
        
        //create image message div
        if(displayImg != ""){
            console.log("img process");
            var imgDiv=$("<img>"); 
            imgDiv.attr("src",displayImg);
            $(".disImg").attr("alt","image");
            colDiv.append(imgDiv);
        }
        //create answer div 
        if (correctAnswer != ""){
            var ansDiv = $("<div>");
            ansDiv.text(correctAnswer);
            ansDiv.addClass("correctAns");
            colDiv.append(ansDiv);
        }

        //if it's a summary screen, append the statistics info divs
        if (summaryFlg){
            console.log("append summary", correctDiv);
            colDiv.append(correctDiv).append(wrongDiv).append(unanswerDiv);
        }
        
        $("#responseBox").show();
       

    }

    //calculate object's length
    function calObjlen(obj){
       
        var objlen=0;
        for (var key in obj){
            objlen++;
        }
      
        return objlen;
     }

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

    //convert time formater to display 
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
