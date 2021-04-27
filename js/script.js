const questions = new Array(15);
questions[0] = ["Rozwiń skrót HTML?", "How Troll My Listeners", "Hyperlink and Text Markup Language", "HyperText Markup Language", "Hungry Tim Making Lasagna", "C"];
questions[1] = ["Którym elementem można złamać linie w tekście?", "<break>", "Enterem", "<br>", "<lb>", "C"];
questions[2] = ["Który zapis zmienia kolor tła na zielony?", "background-color: #0f0;", "background-style: green;", "background-color: #ff0000", "<background>green</background>", "A"];
questions[3] = ["Który element definiuje ważny tekst ?", "<importand>", "<i>", "<b>", "<strong>", "D"];
questions[4] = ["Który zapis jest prawidłowy dla linku ?", '<a url="http://youcode.pl"> youcode.pl </a> ', '<a href="http://youcode.pl"> youcode.pl </a>', '<a> href="http://youcode.pl" </a>', '<a link="http://youcode.pl"> youcode.pl </a>', "B"];
questions[5] = ["let a = 10;   a++;  a+=a;  a--;  ile wyniesie a ?", "11", "21", "0", "23", "B"];
questions[6] = ["a='Ala ma kota';   t=a.lenght   co wskaże t ?", "undefined", "NaN", "Ala ma kota", "11", "A"];
questions[7] = ["let a = true;  powoduje że zmienna jest typu", "number", "string", "text", "boolean", "D"];
questions[8] = ["Aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:", "if (liczba < 100 && liczba <= 200)", "if (liczba > 100 || liczba <= 200)", "if (liczba < 100 || liczba >= 200)", "if (liczba > 100 && liczba <= 200)", "D"], ["Jaką metodą zaokrąglisz liczbe do góry", "Math.floor()", "Math.upperCase()", "Math.ceil()", "Math.roundUp()", "C"];
questions[9] = ["Jaką metodą zaokrąglisz liczbe do góry", "Math.floor()", "Math.upperCase()", "Math.ceil()", "Math.roundUp()", "C"];
questions[10] = ["Jak otworzyć link w nowym oknie przeglądarki", "<a href='url' new>", "<a href='url' terget='new'>", "<a href='url' terget='_blank'>", "<a href='url' terget='newPage'>", "C"];
questions[11] = ["Które z tych elementów należą do <table>", "<table>   <tr>    <td>", "<thead>  <body>   <tr>", "<table> <tfoot>  <head>", "<td>     <th>    <trow>", "A"];
questions[12] = ["Za pomocą jakiego elementu utworzyć nieuporządkowaną listę?", "<list>", "<ul>", "<ol>", "<dl>", "B"];
questions[13] = ["Jaki jest poprawny HTML do stworzenia checkbox?", "<input type='check'>", "<checkbox>", "<input type='check'>", "<input type='checkbox'>", "D"];
questions[14] = ["Jak poprawnie wstawić zdjęcie ?", "<img href='image.jpg' alt='image'>", "<img src='image.jpg' alt='image'>", "<img alt='myimage'>src='image.jpg'</image>", "<imgage src='image.jpg' alt='myimage'>", "B"];

// ############
//   Global Variables
// ############

let form = document.querySelector(".form");
let questionNumber = document.querySelector(".js-questionNumber");
let questionContent = document.querySelector(".js-questionContent");
let visibleRadioButton1 = document.querySelector(".js-radioSpan-1");
let visibleRadioButton2 = document.querySelector(".js-radioSpan-2");
let visibleRadioButton3 = document.querySelector(".js-radioSpan-3");
let visibleRadioButton4 = document.querySelector(".js-radioSpan-4");
let hiddenRadioButton1 = document.querySelector(".js-radio-1");
let hiddenRadioButton2 = document.querySelector(".js-radio-2");
let hiddenRadioButton3 = document.querySelector(".js-radio-3");
let hiddenRadioButton4 = document.querySelector(".js-radio-4");
let buttonCheck = document.querySelector(".js-buttonCheck");
let buttonNext = document.querySelector(".js-buttonNext");
let buttonPlayAgain = document.querySelector(".js-buttonPlayAgain");
let scoreRight = document.querySelector(".js-right");
let scoreWrong = document.querySelector(".js-wrong");
let quizResult = document.querySelector(".js-results");
let rightAnswerCounter = 0;
let wrongAnswerCounter = 0;
let questionCounter = 1;
let chosenAnswer;
let playerAnswer;
let correctAnswer;
let hiddenRadioButtonArray = [hiddenRadioButton1, hiddenRadioButton2, hiddenRadioButton3, hiddenRadioButton4];
let visibleRadioButtonArray = [visibleRadioButton1, visibleRadioButton2, visibleRadioButton3, visibleRadioButton4];

// ############
//  Functions
// ############

function fillQiuzForm(questionNumber) {
    questionContent.innerText = questions[questionNumber][0];
    for (let i = 0; i < 4; i++)visibleRadioButtonArray[i].innerText = questions[questionNumber][i + 1];
};

function unClickAbleAnswers() {
    for (let i = 0; i < 4; i++) hiddenRadioButtonArray[i].disabled = true;
};

function clickAbleAnswers() {
    for (let i = 0; i < 4; i++) hiddenRadioButtonArray[i].disabled = false;
};

function checkAnswer(condition) {
    for (let i = 0; i < 4; i++) if (condition.charCodeAt(0) === (65 + i)) return visibleRadioButtonArray[i];
};
// ############
// Start Game 
// ############

questionNumber.innerText = questionCounter;
fillQiuzForm(0);

// ############
// Check Answer Button
// ############

form.addEventListener('submit', (event) => {
    event.preventDefault();
    buttonCheck.classList.add('button--hide');
    buttonNext.classList.remove('button--hide');

    unClickAbleAnswers();

    chosenAnswer = document.querySelector("input[name='answer']:checked").value;

    playerAnswer = checkAnswer(chosenAnswer);

    correctAnswer = checkAnswer(questions[questionCounter - 1][5]);

    if (chosenAnswer === questions[questionCounter - 1][5]) {

        playerAnswer.classList.add("form__inputRadio--correct");

        rightAnswerCounter++;
        scoreRight.innerHTML = rightAnswerCounter;
        scoreRight.classList.add('score__counter');
    } else {
        playerAnswer.classList.add("form__inputRadio--wrong");
        correctAnswer.classList.add("form__inputRadio--correct")
        wrongAnswerCounter++;
        scoreWrong.innerHTML = wrongAnswerCounter;
        scoreWrong.classList.add('score__counter');
    }
})

// ############
// Next Question Button
// ############

buttonNext.addEventListener('click', () => {

    if (questionCounter < 15) {
        buttonNext.classList.add('button--hide');
        buttonCheck.classList.remove('button--hide')
        questionCounter++;
        questionNumber.innerHTML = questionCounter;
    } else {
        buttonNext.classList.add('button--hide');
        buttonCheck.classList.add('button--hide');
        buttonPlayAgain.classList.remove('button--hide');
        form.classList.add('button--hide');
        quizResult.innerHTML = (rightAnswerCounter > wrongAnswerCounter) ? "KONIEC <br><br>  Gratulacje nieźle ci poszło" : "KONIEC <br><br><br> Musisz postarać się bardziej";
    }
    clickAbleAnswers();
    correctAnswer.classList.remove("form__inputRadio--correct")
    playerAnswer.classList.remove("form__inputRadio--correct");
    playerAnswer.classList.remove("form__inputRadio--wrong");
    scoreWrong.classList.remove('score__counter');
    scoreRight.classList.remove('score__counter');
    fillQiuzForm(questionCounter - 1);
});

// ############
// Play Again Button
// ############

buttonPlayAgain.addEventListener('click', () => {
    buttonCheck.classList.remove('button--hide');
    buttonPlayAgain.classList.add('button--hide');
    form.classList.remove('button--hide');
    quizResult.innerHTML = "";
    questionCounter = 1;
    questionNumber.innerHTML = questionCounter;
    wrongAnswerCounter = 0;
    scoreWrong.innerHTML = wrongAnswerCounter;
    rightAnswerCounter = 0;
    scoreRight.innerHTML = rightAnswerCounter;
    questionNumber.innerText = questionCounter;
    fillQiuzForm(0);
});