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
      <button id='start-btn' class='start-btn btn'>Bắt đầu</button>
      <button id='next-btn' class='next-btn btn hide'>Tiếp</button>
      <button id="return-btn" class="return-btn btn">Trở về trang chủ</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hocthuat',
  mounted () {
    const questions = [
      {
        question:
          'Câu lạc bộ sách của trường THPT Chuyên Hà Nội - Amsterdam tên là gì?',
        answers: [
          { text: 'Hanoi-Ams Book Lovers', correct: false },
          { text: 'Humans of Hanoi - Amsterdam', correct: false },
          { text: '222', correct: false },
          { text: 'The Bookler', correct: true }
        ]
      },
      {
        question:
          'Có 5 lọ mất nhãn đựng 5 chất bột màu trắng: NaCl, Na2CO3, Na2SO4, BaCO3, BaSO4. Chỉ dùng nước và khí CO2 thì có thể nhận được mấy chất? Câu lạc bộ có khả năng trả lời được câu hỏi này là?',
        answers: [
          { text: 'Ams Advisor', correct: false },
          { text: 'The Bookler', correct: false },
          { text: 'Hanoi - Ams Astronomy', correct: false },
          { text: 'Society of Open Science', correct: true }
        ]
      },
      {
        question:
          'Câu lạc bộ đăng cai tổ chức sự kiện Club Fair là câu lạc bộ nào?',
        answers: [
          { text: 'Humans of Hanoi - Amsterdam', correct: false },
          { text: 'Ams Media', correct: false },
          { text: 'Ams Advisor', correct: true },
          { text: 'We are 222', correct: false }
        ]
      },
      {
        question:
          'Câu lạc bộ ở trường THPT chuyên Hà Nội - Amsterdam nào thuộc lĩnh vực học thuật?',
        answers: [
          { text: 'Healers', correct: true },
          { text: 'Humans of Hanoi Amsterdam', correct: false },
          { text: 'Hanoi Ams Entrepreneurs', correct: false },
          { text: 'Ams Wide Web', correct: false }
        ]
      },
      {
        question: 'Câu lạc bộ học thuật nào trực thuộc đoàn trường?',
        answers: [
          { text: 'Ams Media', correct: true },
          { text: 'Society of Open Science', correct: false },
          { text: 'Ams Writers Guild', correct: false },
          { text: 'Ams Advisor', correct: false }
        ]
      },
      {
        question:
          'Câu lạc bộ nào không có thật ở trường THPT chuyên Hà Nội - Amsterdam?',
        answers: [
          { text: 'Hanoi Ams Math Lovers', correct: true },
          { text: 'Physics Youth Hanoi Ams', correct: false },
          { text: 'Society of Open Science', correct: false },
          { text: 'Tất cả các câu lạc bộ trên đều có thật', correct: false }
        ]
      }
    ]
    const startButton = document.getElementById('start-btn')
    const nextButton = document.getElementById('next-btn')
    const returnButton = document.getElementById('return-btn')
    const questionContainerElement =
      document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const answerButtonsElement = document.getElementById('answer-buttons')
    console.log(startButton.innerHTML)

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

#question {
  text-align: center;
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
