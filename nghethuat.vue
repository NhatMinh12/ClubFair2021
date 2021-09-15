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
  name: 'nghethuat',
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
      clearStatusClass(document.body)
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }

    var that = this
    function selectAnswer (e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
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
          { text: 'HPC', correct: false },
          { text: 'Ams không có câu lạc bộ diễn kịch', correct: false }
        ]
      }
    ]
  }
}
</script>

<style>
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

.btn.correct {
  --hue: var(--hue-correct);
  color: black;
}

.btn.wrong {
  --hue: var(--hue-wrong);
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
</style>
