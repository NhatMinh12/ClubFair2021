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
    question: 'Câu lạc bộ Humans of Hanoi Amsterdam là câu lạc bộ về gì?',
    answers: [
      { text: 'Câu lạc bộ đại diện trường', correct: false },
      { text: 'Câu lạc bộ tổng của tất cả các câu lạc bộ', correct: false },
      { text: 'Câu lạc bộ về con người và xã hội của trường', correct: true },
      { text: 'Cả ba phương án trên đều đúng', correct: false }
    ]
  },
  {
    question: 'Lĩnh vực nào có nhiều câu lạc bộ nhất?',
    answers: [
      { text: 'Nghệ thuật', correct: true },
      { text: 'Học thuật', correct: false },
      { text: 'Thể thao', correct: false },
      { text: 'Xã hội', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ văn hóa nào không có ở trường THPT Hà Nội - Amsterdam?',
    answers: [
      { text: 'Câu lạc bộ văn hóa Việt Nam', correct: true },
      { text: 'Câu lạc bộ văn hóa Nhật Bản', correct: false },
      { text: 'Câu lạc bộ văn hóa Hàn Quốc', correct: false },
      { text: 'Tất cả các câu lạc bộ trên đều có', correct: false }
    ]
  },
  {
    question: 'ABC là câu lạc bộ gì ở trường THPT Hà Nội - Amsterdam?',
    answers: [
      { text: 'Câu lạc bộ dạy học cho trẻ em - từ thiện', correct: false },
      { text: 'Câu lạc bộ võ thuật', correct: false },
      { text: 'Câu lạc bộ nhà xuất bản', correct: false },
      { text: 'Câu lạc bộ làm bánh', correct: true }
    ]
  },
  {
    question: 'Tên đầy đủ của câu lạc bộ kinh doanh khởi nghiệp của trường THPT Hà Nội - Amsterdam là gì?',
    answers: [
      { text: 'Hanoi - Ams Entrepreneurz Club', correct: true },
      { text: 'Hanoi - Ams Entrepreneurs Club', correct: false },
      { text: "Hanoi - Ams Entrepeneurz Club", correct: false },
      { text: 'Hanoi - Ams Enterpreneurs Club', correct: false }
    ]
  },
  {
    question: 'Câu lạc bộ nào là có thật ở trường THPT chuyên Hà Nội - Amsterdam?',
    answers: [
      { text: 'Health Ams', correct: false },
      { text: 'Ams Crystals Collectors', correct: false },
      { text: 'Psi Ams', correct: true },
      { text: '222 Ams', correct: false }
    ]
  }
]