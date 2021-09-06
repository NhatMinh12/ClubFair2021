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
        window.location.assign("./MCQ.html")
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
    question: 'Có bao nhiêu câu lạc bộ thể thao ở trường THPT Hà Nội - Amsterdam?',
    answers: [
      { text: '5', correct: false },
      { text: '6', correct: true },
      { text: '7', correct: false },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Hanoi-Ams Phoenix (HAP) là câu lạc bộ gì?',
    answers: [
      { text: 'Đá cầu', correct: false },
      { text: 'Tennis', correct: false },
      { text: 'Bóng chày', correct: true },
      { text: 'Bóng bàn', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ Cheer Ams không có phân ban nào?',
    answers: [
      { text: 'Nội dung', correct: true },
      { text: 'Hậu cần', correct: true },
      { text: 'Tài chính', correct: true },
      { text: 'Public Reaction', correct: true }
    ]
  },
  {
    question: 'Chỗ sinh hoạt iconic của Hanoi-Ams Martial Arts Club (HAMAC) là ở đâu?',
    answers: [
      { text: 'Sảnh A', correct: false },
      { text: 'Sảnh B', correct: false },
      { text: 'Sảnh C', correct: true },
      { text: 'Giếng trời', correct: false }
    ]
  },
  {
    question: 'Tên viết tắt của câu lạc bộ bóng đá Hanoi-Ams Football Club của trường THPT Hà Nội - Amsterdam là gì?',
    answers: [
      { text: 'HFC', correct: true },
      { text: 'HAFC', correct: false },
      { text: "AFC", correct: false },
      { text: 'HAFL', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ thể thao nào của trường THPT Hà Nội - Amsterdam không có chữ Hanoi trong tên?',
    answers: [
      { text: 'Câu lạc bộ bóng rổ', correct: false },
      { text: 'Câu lạc bộ bóng đá', correct: false },
      { text: 'Câu lạc bộ võ thuật', correct: false },
      { text: 'Câu lạc bộ cầu lông', correct: true }
    ]
  }
]