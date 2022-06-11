import { questions } from "./questions.js";
let questionList = document.querySelector(".questions-list");
questions.forEach(question => {
    let div = document.createElement("div");
    div.classList.add("question");
    let pHead = document.createElement("p");
    pHead.classList.add("p-head");
    pHead.innerText = question.text;
    div.append(pHead);
    for (let i = 0; i < question.answers.length; i++) {
        let divAnswers = document.createElement("div");
        divAnswers.classList.add("answers");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = `answer-${question.id}`;
        input.value = question.answers[i].value;
        input.classList.add("answer-input");
        let p = document.createElement("p");
        p.innerText = question.answers[i].text;
        divAnswers.append(input);
        divAnswers.append(p);
        div.append(divAnswers);
    }
    questionList.append(div);
});
function check() {
    let counter = 0;
    let answersArray = document.querySelectorAll(".answer-input");
    for (let i = 0; i < answersArray.length; i++) {
        if (answersArray[i].checked) {
            counter += Number(answersArray[i].value);
        }
    }
    let result = (counter / 10) * 100;
    let confirmed = confirm(`Вы выполнили на ${result}% из 100%
        Хотите повторить тест?`);
    if (confirmed) {
        location.reload();
    }
    else {
        alert("Спасибо за выполнение теста");
    }
}
document.querySelector("#result").addEventListener("click", check);
//# sourceMappingURL=main.js.map