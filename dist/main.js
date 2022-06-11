import { questions } from "./questions.js";
import { check } from "./check.js";
class Test {
    constructor() {
        this.questions = questions;
        // drawAll(){
        // questions.forEach(question => {
        //     question.createIn(questions)
        //        })
        // }
    }
}
let questionList = document.querySelector(".questions-list");
document.querySelector("#result").addEventListener("click", check);
let test = new Test();
// console.log(test);
// window.addEventListener("load", function () {
//     test.drawAll();
// });
//# sourceMappingURL=main.js.map