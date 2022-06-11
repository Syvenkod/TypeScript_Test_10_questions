
export function check (){
    let counter = 0;
    let answersArray:NodeListOf<HTMLInputElement> = document.querySelectorAll("input[name]");
    console.log(answersArray);
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