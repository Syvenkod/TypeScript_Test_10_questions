import {ITest} from "./classes.js";
import {questions} from "./questions.js";
import {check} from "./check.js"

class Test implements ITest{
    questions = questions;

    drawAll(){
    questions.forEach(question => {
        question.createIn(this.questions)
           })
    }}


let questionList = document.querySelector(".questions-list");
document.querySelector("#result").addEventListener("click",check);
let test = new Test();
console.log(test);


window.addEventListener("load", function () {
    test.drawAll();
});