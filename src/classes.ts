export interface IQuestions{
    readonly text: string;
    readonly answers: any[];
    readonly id:number;
}

export class Question implements IQuestions{
 text: string;
 answers: any[];
 id:number;
 constructor(text: string, answers: any[], id:number)
 {this.text = text;
  this.answers = answers;
  this.id = id}

  createIn(element: any) {
    let div = document.createElement("div");
    div.classList.add("question");
    let pHead = document.createElement("p");
    pHead.classList.add("p-head");
    pHead.innerText = this.text;
    div.append(pHead);
    for (let i=0; i< this.answers.length; i++){
    let divAnswers = document.createElement("div");
    divAnswers.classList.add("answers");
    let input = document.createElement("input");
    input.type = "radio";
    input.name = `answer-${this.id}`;
    input.value = this.answers[i].value;
    input.classList.add("answer-input");
    let p = document.createElement("p");
    p.innerText = this.answers[i].text;
    divAnswers.append(input);
    divAnswers.append(p);
    div.append(divAnswers)}
    element.append(div);
}}

export class Answer{
    text:string;
    value: number;
 constructor(text:string, value: number)
   {this.text = text;
    this.value = value;}
}

