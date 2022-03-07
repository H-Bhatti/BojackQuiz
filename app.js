const quizQuestions =[
    {
        question:"What is my name ?",
        a:"Bojack horseman",
        b:"Hoejack Boresman",
        c:'Bojack sugermen',
        d:"hnnery fondle",
        answer: "a"
    },{
        question:"Back in the ___ I was in a very famous TV show",
        a:"2000s",
        b:"80's",
        c:"70's",
        d:"90's",
        answer:"d"
    },{
        question:"Philbert was directed by the company ?",
        a:"PB & Livin",
        b:"Cabracadabra",
        c:"Whattimeisitrightnow.com",
        d:"Vim",
        answer:"c"
    },{
        question:"'sometimes life is a bitch and you keep living'  was said by",
        a:"Hollyhock",
        b:"Sara lynn",
        c:"diaine nuggets",
        d:"Bojack",
        answer: "d"
    },
]

var score = 0;
var quesCount = 0;
displayQuestions();

function displayQuestions () {          // printing the questions and option
    document.getElementById("question").innerHTML = quizQuestions[quesCount].question;
    document.getElementById("opta").innerHTML = quizQuestions[quesCount].a;
    document.getElementById("optb").innerHTML = quizQuestions[quesCount].b;
    document.getElementById("optc").innerHTML = quizQuestions[quesCount].c;
    document.getElementById("optd").innerHTML = quizQuestions[quesCount].d;
    selectanswer();
}

function selectanswer(){        // answer select buttons
    console.log("infucntion")
    document.getElementById("opta").onclick = selectA => answerSelect("a"),document.getElementById("opta").blur();;
    document.getElementById("optb").onclick = selectB => answerSelect("b"),document.getElementById("optb").blur();;
    document.getElementById("optc").onclick = selectC => answerSelect("c"),document.getElementById("optc").blur();;
    document.getElementById("optd").onclick = selectD => answerSelect("d"),document.getElementById("optd").blur();;
    document.getElementById("nextbutton").onclick = nextbuttonclick;

}

function nextbuttonclick (){        // prints new question or result
  
    if (quesCount<(quizQuestions.length-1))
    {
    quesCount++;
    displayQuestions();
    }
    else {
        console.log(score);
        const Rdiv = document.getElementById("remove");
        const parent = Rdiv.parentNode;
        parent.removeChild(Rdiv);
        document.getElementById("question").innerHTML=`You scored ${score} out of 4`;
        document.getElementById("nextbutton").innerHTML = 'RELOAD';
        document.getElementById("nextbutton").onclick = pagereload;
    }
}
function answerSelect(ans) {        // function for checking answwer 

    if(ans === quizQuestions[quesCount].answer)
    {
        score ++;

    }
    nextbuttonclick();  
}
function pagereload () {        // functon to reload page after quiz finish
    location.reload()
}