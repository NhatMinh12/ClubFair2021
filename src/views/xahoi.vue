<template>
  <div id="body">
  <div class="container">
    <div id='question-container' class="hide">
      <div id='question'>Question</div>
      <div id="answer-buttons" class="btn-grid">
        <button class="btn">Answer 1</button>
        <button class="btn">Answer 2</button>
        <button class="btn">Answer 3</button>
        <button class="btn">Answer 4</button>
      </div>
    </div>
    <div class='controls'>
      <button id='start-btn' class='start-btn btn'>Start</button>
      <button id='next-btn' class='next-btn btn hide'>Next</button>
      <button id="return-btn" class="return-btn btn">Trở về trang chủ</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'xahoi',
  mounted () {
    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const returnButton = document.getElementById('return-btn')
    const questionContainerElement =
      document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    let shuffledQuestions, currentQuestionIndex
    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', () => {
      currentQuestionIndex++
      setNextQuestion()
    })
    function startGame () {
      startButton.classList.add('hide')
      shuffledQuestions = questions.sort(() => Math.random() - 0.5)
      currentQuestionIndex = 0
      questionContainerElement.classList.remove('hide')
      setNextQuestion()
    }
    function setNextQuestion () {
      resetState()
      showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    function showQuestion (question) {
      questionElement.innerText = question.question
      question.answers.forEach((answer) => {
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
    function resetState () {
      clearStatusClass(document.getElementById('body'))
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }
    var that = this
    function selectAnswer (e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.getElementById('body'), correct)
      Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Quay lại gói chủ đề câu hỏi'
        startButton.classList.remove('hide')
        startButton.addEventListener('click', function () {
          that.$router.push('/mcq')
        })
        returnButton.style.display = 'block'
        returnButton.addEventListener('click', function (){
          that.$router.push('/')
        })
      }
    }
    function setStatusClass (element, correct) {
      clearStatusClass(element)
      if (correct) {
        element.classList.add('correct')
      } else {
        element.classList.add('wrong')
      }
    }
    function clearStatusClass (element) {
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
          { text: 'Hanoi - Ams Entrepeneurz Club', correct: false },
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400&family=DM+Mono&family=DM+Sans&family=DM+Serif+Display&display=swap%27');
:root {
  --hue-neutral: 200;
  --hue-wrong: 0;
  --hue-correct: 145;
}
#body {
  --hue: var(--hue-neutral);
  padding: 0;
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--hue), 100%, 20%);
  font-family: 'Be Vietnam', sans-serif;
}
#body.correct {
  --hue: var(--hue-correct);
}
#body.wrong {
  --hue: var(--hue-wrong);
}
.container {
  width: 800px;
  max-width: 80%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px 2px;
}
.btn-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 10px;
  margin: 20px 0;
}
.btn {
  --hue: var(--hue-neutral);
  border: 1px solid hsl(var(--hue), 100%, 30%);
  background-color: hsl(var(--hue), 100%, 50%);
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  outline: none;
  font-family: 'Be Vietnam', sans-serif;
}
.btn:hover {
  border-color: black;
}
.btn .correct {
  background-color: green !important;
  color: black;
}
.btn .wrong {
   background-color: red !important;
}
.start-btn,
.next-btn,
.return-btn {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hide {
  display: none;
}
#return-btn{
  display: none;
  margin-left: 20px;
}
#question {
    color: black;
}
</style>