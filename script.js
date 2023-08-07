const quizdb =[
    {
    question:"Q1: What is the full form of HTML",
    a:"hello to my land",
    b:"Hey text Markup Language",
    c:"Hypertext makeup language",
    d:"Hypertext makeup language",
    ans:"ans2"
},
{
    question:"Q1: What is the full form of CSS",
    a:"Cascading Style Sheets",
    b:"Cascading Style Sheep",
    c:"Cartoon Style Sheets",
    d:"Cascading Super Sheepts",
    ans:"ans1"
},
{
    question:"Q1: What is the full form of HTTP",
    a:"HyperText Transfer Product",
    b:"HyperText Test Protocol",
    c:"hey  Transfer Protocol",
    d:"HyperText Transfer Protocol",
    ans:"ans4"
},
{
    question:"Q1: What is the full form of Js",
    a:"Javascript",
    b:"Javasuper",
    c:"Justscript",
    d:"Jordenshoes",
    ans:"ans1"
}];
let score=0;
let questionc=0;
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit =document.querySelector('#submit');
const answers= document.querySelectorAll('.answers')
const showscore= document.querySelector('#showscore')
const loadquestion = () =>{
    const questionlist=quizdb[questionc];
    question.innerHTML= questionlist.question;
    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
}
loadquestion();
const getcheckanswer = ()=>{
    let answer;
    answers.forEach((currentelm)=>{
        if(currentelm.checked){
            answer=currentelm.id;
        }
    })
    return answer;
};
function deselect() {
    answers.forEach((currentelm) => currentelm.checked = false);
}
submit.addEventListener('click',() =>{
    const checkedAnswer= getcheckanswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizdb[questionc].ans){
        score++;

    }
    questionc++;
    deselect();
    if(questionc<quizdb.length){
        loadquestion();
    }else{
    showscore.innerHTML=`
    <h3> You Scored ${score}/${quizdb.length} </h3>
    <button id="submit" onclick="location.reload()">Play Again</button>
    `;
    showscore.classList.remove('scorearea');
    }
});