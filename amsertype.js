// function check() {
//     var a = 0, b = 0, c = 0, d = 0
//     var q1 = document.quiz.ques1.value
//     var q2 = document.quiz.ques2.value
//     var q3 = document.quiz.ques3.value
//     var q4 = document.quiz.ques4.value
//     var q5 = document.quiz.ques5.value
//     var q6 = document.quiz.ques6.value
//     var result = document.getElementById('result')
//     var quiz = document.getElementById('quiz')
//     if (q1 == 'art') {
//         a++
//     }else if(q1 == 'ninja'){
//         b++
//     }else if(q1 == 'beauty'){
//         c++
//     }else {
//         d++
//     }

//     if (q2 == 'art') {
//         a++
//     }else if(q2 == 'ninja'){
//         b++
//     }else if(q2 == 'beauty'){
//         c++
//     }else {
//         d++
//     }

//     if (q3 == 'art') {
//         a++
//     }else if(q3 == 'ninja'){
//         b++
//     }else if(q3 == 'beauty'){
//         c++
//     }else {
//         d++
//     }

//     if (q4 == 'art') {
//         a++
//     }else if(q4 == 'ninja'){
//         b++
//     }else if(q4 == 'beauty'){
//         c++
//     }else {
//         d++
//     }

//     if (q5 == 'art') {
//         a++
//     }else if(q5 == 'ninja'){
//         b++
//     }else if(q5 == 'beauty'){
//         c++
//     }else {
//         d++
//     }

//     if (q6 == 'art') {
//         a++
//     }else if(q6 == 'ninja'){
//         b++
//     }else if(q6 == 'beauty'){
//         c++
//     }else {
//         d++
//     }
//     quiz.style.display = 'none'
//     var max = Math.max(a,b,c,d)
//     if(max == a) {
//         result.innerHTML = 'art'
//     }else if(max == b){
//         result.innerHTML = 'ninja'
//     }else if(max == c){
//         result.innerHTML = 'beauty'
//     }else if(max == d){
//         result.innerHTML = 'busy'
//     }else if (a == b || a == c || a == d || b == c || b == d || c == d){
//         result.innerHTML = 'idk'
//     }
// }
// QUESTIONS

const questions = [
    {
        "question": "Đầu tiên, hãy chọn một chiếc balo cho năm học mới nào!",
        "answer1": "./kaken backpack.jpg",
        "answer1Total": "1",
        "answer2": "./jansport.webp",
        "answer2Total": "2",
        "answer3": "./backpack with pins.png",
        "answer3Total": "3",
        "answer4": "./laptop backpack.jpg",
        "answer4Total": "4"
    },
    {
        "question": "Vật bất ly thân của bạn khi tới trường là gì?",
        "answer1": "./batiste.jpg",
        "answer1Total": "1",
        "answer2": "./watter bottle1.jpg",
        "answer2Total": "2",
        "answer3": "./earphones.jpg",
        "answer3Total": "3",
        "answer4": "./laptop.jpg",
        "answer4Total": "4"
    },
    {
        "question": "Chọn cho mình một loại vở viết nhé!",
        "answer1": "./crabit.jpg",
        "answer1Total": "1",
        "answer2": "./klong.jpg",
        "answer2Total": "2",
        "answer3": "./binder note.jpg",
        "answer3Total": "3",
        "answer4": "./campus notebooks.jpg",
        "answer4Total": "4"
    },
    {
        "question": "Chọn 1 trong 4 món đồ dưới đây để đem theo mình tới trường nhé!",
        "answer1": "./chapstick.jpg",
        "answer1Total": "1",
        "answer2": "./gum.jpg",
        "answer2Total": "2",
        "answer3": "./mildliners.jpg",
        "answer3Total": "3",
        "answer4": "./planner.jpg",
        "answer4Total": "4"
    },
    {
        "question": "Một công dụng bí mật của balo bạn?",
        "answer1": "./tiktok.jpg",
        "answer1Total": "1",
        "answer2": "./sleeping.jpg",
        "answer2Total": "2",
        "answer3": "./diy.jpg",
        "answer3Total": "3",
        "answer4": "./punch .jpg",
        "answer4Total": "4"
    },
    {
        "question": "Bạn mang đồ gì đến trường cho bữa trưa?",
        "answer1": "./apps.jpg",
        "answer1Total": "1",
        "answer2": "./canteen.jpg",
        "answer2Total": "2",
        "answer3": "./homemade.jpg",
        "answer3Total": "3",
        "answer4": "./no lunch.jpg",
        "answer4Total": "4"
    }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4')
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.src = `${question.answer1}`
    option2.src = `${question.answer2}`
    option3.src = `${question.answer3}`
    option4.src = `${question.answer4}`
}


function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if (!selectedOption) {
        alert('Hãy chọn câu trả lời của bạn!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()


    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

    //once finished clear checked
    selectedOption.checked = false;
    //If quiz is on the final question
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
            `<h1 class="final-score">Điểm của bạn là: ${totalScore}</h1>
           <div class="summary">
              <p>Hãy nhìn vào bảng dưới để xem bạn là kiểu Amser nào nhé!</p>
              <p>18 - 24: The Busy Bee - they put the dead in deadlines, xuất hiện ở mọi dự án, câu lạc bộ</p>
              <p>12 - 18: The Artist - đề cao sự độc đáo </p>
              <p>6 - 12: The Ninja - bạn ở mọi nơi, nhưng chỉ thoắt ẩn thoắt hiện </p>
              <p>6: The Beauty Queen - đảm bảo nhan sắc mọi lúc mọi nơi, luôn bắt kịp với xu hướng</p>
          </div>
          <button class="restart">Quay lại danh sách quiz</button>
           `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if (e.target.matches('button')) {
        //reset array index and score
        currentQuestion = 0;
        score = [];
        //Reload quiz to the start
        window.location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);
result.addEventListener('click', restartQuiz);