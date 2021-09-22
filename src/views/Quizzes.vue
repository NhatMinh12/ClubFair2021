<template>
<div class = 'container-fluid quizzes'>
    <div class="row quizzes-row top" v-if="hasQuiz">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 left">
            <div class="quizzes-title">01. Đuổi hình bắt chữ</div>
            <div class="quizzes-desc">Trên màn hình sẽ xuất hiện những bức ảnh phiên bản zoom (phóng to) của logo của tất cả các câu lạc bộ ở trường Ams, nhiệm vụ của bạn là dựa dựa theo các bức ảnh và đoán ra đó là câu lạc bộ nào nhé!</div>
            <div class="quizzes-href"><a href = 'https://l.messenger.com/l.php?u=https%3A%2F%2Fwww.buzzfeed.com%2Fanhphapbi231004%2Fban-la-kiau-amsers-nao-9kujjzj9m2%3Futm_source%3Ddynamic%26utm_campaign%3Dbfsharecopy&h=AT2snhO5ub-2jTnv2r4rF3zjEkeBk7Ax2h0yS-lcLUni_7IVtun_iTPVbXDVtlEbRe5ofhRPRinM4a8SYQ-qKlbVwPZmx05QhutjzQYagQ2ezXPJ9pfDQzYnjjJ0UMjdMnITwrTYrEEtl798M2BaPg'>Tham gia Quiz →</a></div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 right">
            <div class="quizzes-title">02. Bạn có thể vượt qua bài test về các CLB của Ams này không?</div>
            <div class="quizzes-desc">Chọn 1 trong 4 gói chủ đề (học thuật, thể thao, văn hoá, nghệ thuật) rồi trả lời các câu hỏi quizzes sau để kiểm tra kiến thức của bạn nhé!</div>
            <div class="quizzes-href"><a href = 'https://www.riddle.com/showcase/340077/journey'>Tham gia Quiz →</a></div>
        </div>
    </div>
    <div class="row quizzes-row"  v-if="hasQuiz">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 left">
            <div class="quizzes-title">03. 1000 ngày của bạn ở Ams gói gọn trong một biểu đồ tròn</div>
            <div class="quizzes-desc">Chọn 1 trong 4 phương án câu trả lời ở mỗi câu hỏi, sau khi trả lời hết các câu hỏi bạn sẽ biết 1000 ngày sau này ở Ams bạn sẽ làm gì nhé!</div>
             <div class="quizzes-href"><a href = '/1000-ngay-o-ams'>Tham gia Quiz →</a></div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 right last">
            <div class="quizzes-title">04. Ba-lô của bạn nói gì về bạn?</div>
            <div class="quizzes-desc">Chọn 1 trong 4 phương án cho mỗi câu hỏi. Sau khi trả lời đủ 6 câu hỏi, chúng mình sẽ đưa ra đáp án cho biết bạn là loại Amser nào.</div>
             <div class="quizzes-href"><a href = 'https://l.messenger.com/l.php?u=http%3A%2F%2Fwww.quiz-maker.com%2FQTQZDBOV8&h=AT2snhO5ub-2jTnv2r4rF3zjEkeBk7Ax2h0yS-lcLUni_7IVtun_iTPVbXDVtlEbRe5ofhRPRinM4a8SYQ-qKlbVwPZmx05QhutjzQYagQ2ezXPJ9pfDQzYnjjJ0UMjdMnITwrTYrEEtl798M2BaPg'>Tham gia Quiz →</a></div>
        </div>
    </div>

    <div class = 'explore-clubs'><a href = '/'>Khám phá các CLB</a></div>
</div>
</template>

<script>
import { gsap, Power4, Back, Power0 } from "gsap"
export default {
    name: 'Quizzes',
    data() {
        return {
            hasQuiz: true
        }
    },
    methods: {
        transition() {
            var that = this
            var tl = gsap.timeline()
            tl.to('.title', {opacity: 0, y: -20, duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                that.hasQuiz = true
            }})
        }
    }
}
</script>

<style lang = 'scss' scoped>

.title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.title-quiz {
    font-size: 3rem;
    padding-bottom: 3rem;
}

.enter-quiz-button {
    padding: 0.5rem 2rem 0.5rem 2rem;
    background: black;
    color: white;
    cursor: pointer;
    border-radius: 5rem;
    border: 1px solid black
}

.enter-quiz-button:hover {
    background: white;
    color: black
}
.quizzes {
    width: 100vw;
    height: 100%;
    background: white;
    color: black;
}

.quizzes-row {
    /* height: 50vh; */
    text-align: left;
}

.top {
    border-bottom: 1px solid black;
}

.left {
    border-right: 1px solid black;
}

.quizzes-title {
    font-size: 3rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-top: 1rem;
}

.quizzes-desc {
    padding-left:1rem;
}

.quizzes-href {
    font-size: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 1rem;

    a {
        color: black;
        text-decoration: none !important;
        position: relative;
        transition: all 0.5s ease;
    }

    a:hover {
        color: #ffdb13;
    }
}

@media screen and (max-width: 992px) {
    .top {
        border: 0;
    }

    .left {
        border: 0;
        border-bottom: 1px solid black;
    }

    .right {
        border: 0;
        border-bottom: 1px solid black;
    }
}

.last {
    padding-bottom: 4rem;
}

.explore-clubs {
    background: black;
    color: white;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 5rem;
    border: 1px solid black;
    transition: all 0.5s ease;

    a {
        color: white;
        text-decoration: none !important;
    }
}

.explore-clubs:hover {
    background: white;
    a {
        color: black;
    }
}

@media screen and (max-width: 576px) {
    .quizzes-title {
        font-size: 2.5rem;
        padding-left: 0rem;
    }

    .quizzes-desc {
        padding-left: 0rem;
    }

    .quizzes-href {
        padding-left: 0rem;
        font-size: 1.5rem;
    }
}
</style>