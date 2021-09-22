<template>
    <!--container-->
<div class="question-form">
    <div class="row quiz-title">
        <div class = ''>Ams Advisor - 1000 Ngày ở Ams<br><a href = '/'>← Khám phá các CLB</a></div>
        <div>
        </div>
    </div>
    <div class = 'row chart' v-show="show_chart">
        <div class='pie-chart col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'> <canvas id="myChart"></canvas></div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pie-chart-detail d-flex justify-content-center">
            <div class = 'detail'>
            <div>1000 ngày ở Ams của bạn bao gồm:</div>
            <div class="">{{Math.round(dataset[0]*100)}}% Học hành</div>
            <div class="">{{Math.round(dataset[1]*100)}}% Hẹn hò</div>
            <div class="">{{Math.round(dataset[2]*100)}}% Kết bạn</div>
            <div class="">{{Math.round(dataset[3]*100)}}% Ăn uống</div>
            </div>
        </div>
        <div class = 'return'>
            <a @click="restart">← Làm lại câu hỏi</a><br>
            <a href = '/'>Khám phá các CLB →</a>
        </div>
    </div>
    <div class="row" v-if="!show_chart">
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 questions-column">
            <div class = 'questions'>
                <label>{{questionIndex+1}}. {{ quiz.questions[questionIndex].text }}</label>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 answers-column">
            <div class = 'options'  v-for="(response, index) in quiz.questions[questionIndex].responses" :key="index" :class="{ 'is-selected': userResponses[questionIndex] == index}"  @click="selectOption(index)">
                <label>{{ options[index] }}. {{response.text}}</label>
            </div>
        </div>
    </div>
    <div class="row" v-show="!show_chart">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-if="questionIndex < quiz.questions.length-1">
            <div class = 'nav-title-next'>Câu hỏi tiếp theo</div>
             <div class = 'next-question' v-on:click="next();">
                <svg viewBox="0 0 30 30">
                <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
                <path d="M19.022 14.046v1H.142v-1z"></path>
                </svg>
            </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6" v-else>
            <div class = 'nav-title-next'>Xem 1000 ngày của bạn ở Ams</div>
             <div class = 'next-question' v-on:click="score();">
                <svg viewBox="0 0 30 30">
                <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
                <path d="M19.022 14.046v1H.142v-1z"></path>
                </svg>
            </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 next-question-title">
             <div class = 'nav-title-prev' v-if="questionIndex">Câu hỏi trước</div>
             <div class = 'prev-question' v-on:click="prev();" v-if="questionIndex">
                <svg viewBox="0 0 30 30">
                <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
                <path d="M19.022 14.046v1H.142v-1z"></path>
                </svg>
            </div>
        </div>
    </div>
</div>
<!--/container-->
</template>

<script>
import Vue from 'vue'
import Chart from 'chart.js/auto';
export default {
    name: 'Quiz',
    data() {
        var quiz = {
            user: "Dave",
            questions: [
                {
                    text: "Thứ đầu tiên bạn trông đợi ở Ams là gì?",
                    responses: [
                    { text: "Đội tuyển quốc gia" },
                    { text: "Trai xinh gái đẹp", correct: true },
                    { text: "Các CLB" },
                    { text: "Căng tin và nhà ăn" }
                    ]
                },
                {
                    text: "Khi buồn chán, bạn thường làm gì?",
                    responses: [
                    { text: "Học để bớt nghĩ ngợi", correct: true },
                    { text: "Heartsync" },
                    { text: "Đi ăn với nhóm bạn" },
                    { text: "Ăn thật nhiều" }
                    ]
                },
                {
                    text: "Bạn vừa đánh rơi ví của mình. Bạn sẽ đi tìm ở đâu đầu tiên?",
                    responses: [
                    { text: "Lớp học" },
                    { text: "Bãi gửi xe", correct: true },
                    { text: "Chắc bạn mình cầm nhầm" },
                    { text: "Căng tin hoặc chợ" }
                    ]
                },
                {
                    text: "Trước khi bị bỏ lại trên đảo hoang, bạn được chọn 1 trong những thứ (người) sau đây để mang theo mình. Lựa chọn của bạn là gì?",
                    responses: [
                    { text: "Cẩm nang sinh tồn", correct: true },
                    { text: "Người yêu" },
                    {
                        text: "Bạn chí cốt"
                    },
                    { text: "Lương khô" }
                    ]
                },
                {
                    text: "1 năm nào đó, Ngày Hội Anh Tài diễn ra rất gần với kì thi học kì. Bạn sẽ lựa chọn:",
                    responses: [
                    { text: "Ở nhà ôn thi thật tốt" },
                    {
                        text: "Tham gia NHAT để tỏ tình với crush chứ"
                    },
                    { text: "Không thể bỏ mặc các đồng chí đang làm trại khối và tài năng khối chuyên được!", correct: true },
                    { text: "Có bao nhiêu quầy đồ ăn để mình cân nhắc nhỉ?" }
                    ]
                },
            ]
        },
        userResponseSkelaton = Array(quiz.questions.length).fill(null);
        return {
            quiz: quiz,
            questionIndex: 0,
            userResponses: userResponseSkelaton,
            isActive: false,
            options: ['A', 'B', 'C', 'D'],
            dataset: [0,0,0,0],
            quiz_error: false,
            selected: false,
            show_chart: false
        }
    },
    filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
    },
    methods: {
	    restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
                  this.show_chart = false
                  this.selected = false
                  let chartStatus = Chart.getChart("myChart"); // <canvas> id
                if (chartStatus != undefined) {
                chartStatus.destroy();
                }
		 },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         this.selected = true
      },
      next: function() {
          if(this.selected == false) {
            let toastMessage = 'Bạn hãy chọn 1 câu trả lời'

            Vue.$toast.default(toastMessage, {
            // override the global option
                position: 'bottom',
                duration: 2500,
                queue: true,
            })
          } else if (this.questionIndex < this.quiz.questions.length) {
            this.questionIndex++;
            this.selected = false
         }
      },

      prev: function() {
         if (this.quiz.questions.length > 0) {
             this.questionIndex--;
             this.selected = true
         }
      },
      // Return "true" count in userResponses
      score: function() {
         for (let i = 0; i < this.userResponses.length; i++) {
            this.dataset[this.userResponses[i]]+=0.2
         }
         var data1 = this.dataset
         const data = {
            labels: [
                'Học hành',
                'Hẹn hò',
                'Kết bạn',
                'Ăn uống'
            ],
            datasets: [{
                label: '1000 ngày của bạn ở Ams',
                data: data1,
                backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(2, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const options1 = {
            tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                }
            }
    }
        };
        const config = {
            type: 'pie',
            data: data,
            options: options1
        };
        var myChart = new Chart(
            document.getElementById('myChart').getContext('2d'),
            config
        );
        this.show_chart = true
         //return this.userResponses.filter(function(val) { return val }).length;
      }
   }
}
</script>

<style lang = 'scss' scoped>

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

.container-fluid {
    background: white;
    color: black;
    height: 100vh;
    z-index: 1000;
}

.quiz-title {
    background: #0053d6;
    color: white;
    font-size: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    text-align: left;

    div {
        padding-left: 1rem;
    }

    a {
        color: white;
        font-size: 1rem;
    }

}

.questions-column {
    border-right: 2px solid #0053d6 ;
    padding: 0;
    border-bottom: 2px solid #0053d6 ;
}

.questions {
    font-size: 3rem;
    color: #0053d6;
    text-align: left;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
}

.options {
    height: 18vh;
    text-align: left;
    font-size: 1.5rem;
    label {
        padding-left: 2rem;
        padding-top: 1rem;
    }
    color: black;
    border-bottom: 2px solid #0053d6 ;
    transition: all 0.5s ease;
    cursor: pointer;
}

.options:hover {
    color: white;
    background: #0053d6 ;
}

.answers-column {
    padding: 0 !important
}

.next-question {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    float: right;
    background: #ffdb13;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease;
    cursor: pointer;

    svg {
        fill: #0053d6;
        position: absolute;
        top: 0;
        left: 0;
    }

}

.next-question:hover {
    transform: rotate(-45deg);
    background: #0053d6;
    svg {
         fill: #ffdb13;
    }
}

.prev-question {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    float: left;
    background: #ffdb13;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease;
    cursor: pointer;
    transform: rotate(180deg);

    svg {
        fill: #0053d6;
        position: absolute;
        top: 0;
        left: 0;
    }

}

.prev-question:hover {
    transform: rotate(215deg);
    background: #0053d6;
    svg {
         fill: #ffdb13;
    }
}

.nav-title-next {
    color: #0053d6;
    font-size: 2rem;
    text-align: right;
}

.nav-title-prev {
    color: #0053d6;
    font-size: 2rem;
    text-align: left;
}

.is-selected {
    background: #ffdb13 !important;
    color: #0053d6 !important;
}

.chart {
     background: white;
     padding-top: 1rem;
     margin-bottom: 1rem;
}

#myChart {
    width: 500px;
    height: 500px;
}

.pie-chart {
     border-bottom: 2px solid #0053d6;
}

.pie-chart-detail {
    font-size: 2.5rem;
    text-align: left;
    padding-left: 1rem;
    color: #0053d6;
    border-left: 2px solid #0053d6;
    border-bottom: 2px solid #0053d6;
}

.return {
    font-size: 2rem;
    padding-top: 3rem;
    cursor: pointer;
    text-align: center;
    width: 100%;
    a {
        color: #0053d6 !important;
        text-decoration: none !important;
        padding-bottom: 2rem;
    }
}

@media screen and (max-width: 992px) {
    .questions-column {
        border-right: 0px;

    }

    .pie-chart {
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    .options {
        padding-bottom: 2rem;
        padding-top: 2rem;
        height: auto;
    }

    .questions {
        font-size: 2rem;
    }

    .detail {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 2rem;
    }

    .return {
        padding-top: 2rem;
    }
}

.question-form {
    background: white;
    height: 100vh;
    overflow-y:scroll;
    overflow-x: hidden;
}



</style>