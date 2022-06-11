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

}

export class Answer{
    text:string;
    value: number;
 constructor(text:string, value: number)
   {this.text = text;
    this.value = value;}
}