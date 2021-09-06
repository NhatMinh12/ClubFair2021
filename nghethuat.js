const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Quay lại gói chủ đề câu hỏi'
    startButton.classList.remove('hide')
    startButton.addEventListener('click', function(){
        window.location.assign("MCQ.html")
    })
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Câu lạc bộ nào ở trường THPT Hà Nội - Amsterdam chuyên về mỹ thuật?',
    answers: [
      { text: 'Hanoi-Ams Art Team', correct: false },
      { text: 'Draft & Graph', correct: true },
      { text: 'Glee Ams', correct: false },
      { text: 'LaMode', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ nào ở trường THPT Hà Nội - Amsterdam không phải về nghệ thuật?',
    answers: [
      { text: 'Cheer Ams', correct: true },
      { text: 'HAO’s Dancesport Club', correct: false },
      { text: 'Hanoi Ams Underground Society', correct: false },
      { text: 'Tất cả những đáp án bên trên', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ nào của THPT Hà Nội - Amsterdam có ban về nhạc cụ dân tộc?',
    answers: [
      { text: 'Hanoi - Ams Art Team', correct: false },
      { text: 'The Classics', correct: false },
      { text: 'Glee Ams', correct: false },
      { text: 'Cầm Ca Hanoi-Amsterdam', correct: true }
    ]
  },
  {
    question: 'Câu lạc bộ nào của THPT Hà Nội - Amsterdam không có ban vocalists?',
    answers: [
      { text: 'The Classics', correct: true },
      { text: 'Glee Ams', correct: false },
      { text: 'Hanoi - Ams Art Team', correct: false },
      { text: 'Hanoi - Ams Rock Club', correct: false }
    ]
  },
  {
    question: 'Đâu là tên viết tắt của câu lạc bộ diễn kịch của trường THPT Hà Nội - Amsterdam?',
    answers: [
      { text: 'HADC', correct: false },
      { text: 'LSD', correct: true },
      { text: "HPC", correct: false },
      { text: 'Ams không có câu lạc bộ diễn kịch', correct: false }
    ]
  }
]