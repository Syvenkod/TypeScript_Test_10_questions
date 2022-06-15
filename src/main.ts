import {questions} from "./questions.js"

class Test{
    element:HTMLDivElement;
    questions: [];

    constructor(questions)
    {this.questions = questions;}

    drawAll(){
    questions.forEach(question => {
        question.createIn(this.questions)
           })
    }
    check (){
        let counter = 0;
        let answersArray:NodeListOf<HTMLInputElement> = document.querySelectorAll(".answer-input");
            for (let i=0; i<answersArray.length; i++) {
            if (answersArray[i].checked) {
            counter +=Number(answersArray[i].value);
            }
        }
        let result = (counter/10)*100;
        let confirmed = confirm(`Вы выполнили на ${result}% из 100%
        Хотите повторить тест?`);
        if(confirmed){location.reload()}
        else {alert("Спасибо за выполнение теста")}
        }

}

    let questionList = document.querySelector(".questions-list");
    let test = new Test(questionList);

    window.addEventListener("load", function () {
        test.drawAll();
    });

document.querySelector("#result").addEventListener("click", test.check);

