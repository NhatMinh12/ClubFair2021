<template>
<div>
  <div class = 'menu container-fluid'>
    <section class ='menu-container'>
    <div class = 'about-clubfair'>Về Club Fair</div>
    <section class ='ntt-container'>
    <div class = 'ntt american-study'><a target="_blank">Nhà Tài Trợ American Study</a></div>
    <div class = 'ntt minverva-university'><a target="_blank">Nhà Tài Trợ Minerva University</a></div>
    </section>
     <div class = 'quiz'><a href = '/quizzes' target = '_blank'>Quiz về các CLB</a></div>
      <!-- <div class = 'quiz'><a href = '/mcq' target = '_blank'>Quiz theo chủ đề</a></div> -->
    <div class = 'return'>⟵ Quay trở lại khám phá CLB</div>
    <div class ='cancel-menu'><svg class="svg-list" viewBox="0 0 20 20">
      <path fill="white" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
    </svg></div>
    </section>
  </div>

  <div class = 'container-fluid clubfair-info'>
    <div class = 'return-to-main'>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="#0a047a" xmlns="http://www.w3.org/2000/svg" class="css-1b54wkh"><path d="M0 4L4.5 0.535898L4.5 7.4641L0 4Z" fill="#0a047a"></path></svg><span>Trở về</span>
    </div>
    <div class="clubfair-title">Club Fair</div>
     <div class = 'img-fluid clubfair-img'>
      <img v-lazy =" 'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/aa.jpg?alt=media&token=95c73236-5081-4e33-a9d1-6418896c4d49'">
    </div>
    <div class="clubfair-intro-title">Giới thiệu</div>
    <div class="clubfair-intro">Là một hoạt động thường niên của CLB Ams Advisor, Club Fair từ lâu đã trở thành một sự kiện không thể thiếu với Amser nói chung và nhất là các học sinh lớp 10 mới vào trường nói riêng. Với sự góp mặt của hơn 40 Câu lạc bộ, trải dài đa dạng từ lĩnh vực học thuật, xã hội đến thể thao, nghệ thuật, Club Fair là trải nghiệm đầy ý nghĩa, góp phần giúp các tân Amsers có cái nhìn tổng quan, rõ nét nhất về các hoạt động ngoại khóa của trường. Không chỉ đơn thuần là một hội chợ, tại đây, các em có thể thỏa sức khai phá bản thân, tìm kiếm và chọn lựa được những Câu lạc bộ phù hợp để gắn bó trong quãng thời gian 3 năm sắp tới. Đặc biệt, hội chợ cũng sẽ mang đến các tiết mục văn nghệ hấp dẫn giúp các em học sinh lớp 10 hòa mình vào không khí sôi động ở Ams và có thêm những trải nghiệm lí thú.</div>
    <div class = 'img-fluid clubfair-img'>
      <img v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_0146.JPG?alt=media&token=82ac0b44-7eba-4882-8511-ff792e2d4f09'">
    </div>
     <div class = 'img-fluid clubfair-img'>
      <img v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_1519.JPG?alt=media&token=7cc4bd7c-3fbd-4266-9db2-4b2b12f64b70'">
    </div>
     <div class = 'img-fluid clubfair-img'>
      <img v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_4226.JPG?alt=media&token=775ad9c5-d92f-4eb4-8262-03ca0d3625b2'">
    </div>
     <div class = 'img-fluid clubfair-img'>
      <img v-lazy="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_6663.JPG?alt=media&token=bb754416-4d10-427f-8724-48f5cdb19cb3'">
    </div>
    <div class="clubfair-title aa-title">Tìm hiểu thêm về Ams Advisor ⇀</div>
  </div> 

  <div class = 'container-fluid ntt-info american-study-ntt'>
    <div class = 'return-to-main-ntt'>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="#0a047a" xmlns="http://www.w3.org/2000/svg" class="css-1b54wkh"><path d="M0 4L4.5 0.535898L4.5 7.4641L0 4Z" fill="#0a047a"></path></svg><span>Trở về</span>
    </div>
    <div class="ntt-title">American Study</div>
     <div class = 'img-fluid ntt-img'>
      <img v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/ntt%2Fbanner%20m%E1%BB%9Bi-06.jpg?alt=media&token=593787e1-90fb-42ae-a929-fec011b15c9f'">
    </div>
    <div class="ntt-intro-title-ntt">Giới thiệu</div>
    <div class="nttr-intro">American Study là tổ chức chuyên luyện thi và tư vấn du học hàng đầu Việt Nam. Với đội ngũ giáo viên và chuyên gia tư vấn người Mỹ đến từ các trường đại học hàng đầu Hoa Kỳ, American Study tự hào đã giúp cho hàng ngàn học sinh Việt Nam chinh phục những kỳ thi quốc tế như TOEFL, SAT, ACT để bước vào cánh cổng các trường đại học danh tiếng tại Mỹ và Canada với những suất học bổng trị giá hàng tỷ đồng. Năm 2020 American Study đã giúp hơn 200 học sinh Việt Nam vào các trường đại học Mỹ với tổng trị giá học bổng lên tới 1000 tỷ đồng.<br>
    Sứ mệnh của American Study là xây dựng nền móng vững chắc cho học sinh Việt Nam gặt hái thành công tại các nền giáo dục hàng đầu thế giới.
    Các giáo viên và chuyên gia tư vấn tới từ các trường danh tiếng như Đại học Harvard (Top 1), Đại học Brown (Top 8), Đại học Pennsylvania (Top 8), Đại học Northwestern (Top 10), Đại học Southern California (Top 20).<br>
    Trong các kỳ thi quốc tế, học sinh của American Study đã đạt những mức điểm rất cao như SAT 1560, ACT 35, TOEFL 110, SSAT 2300.<br><br>
    99% học sinh tăng điểm sau mỗi khóa học<br>
    4/5 học sinh trúng tuyển vào trường đại học mà họ mơ ước<br>
    100% học sinh đạt học bổng từ 2 tỷ đến 5 tỷ vào các trường đại học Mỹ<br><br>
    American Study thường xuyên tổ chức những buổi Hội thảo tư vấn chuyên sâu về học bổng Du học Mỹ/Canada cũng như giúp các em học sinh chinh phục học bổng 50-100% các trường Đại học Quốc tế tại Việt Nam: VinUni, BUV, RMIT, Swinburne.... Những yếu tố cần thiết trong một bộ hồ sơ mang tính cạnh tranh, thông tin về các trường/ngành học hot nhất hiện nay,...đều sẽ được các chuyên gia chia sẻ chi tiết. <br><br>
    Đăng ký ngay nhận voucher học bổng lên đến 3.000.000 VNĐ: <a href = 'https://forms.gle/MEjuKGAVSxJKQuQo7' target="_blank">https://forms.gle/MEjuKGAVSxJKQuQo7</a><br><br><br>
    Đặc biệt hơn nữa, trong chương trình Club fair 2021, đơn vị tài trợ American Study không chỉ mang đến những thông tin hữu ích về học bổng du học Mỹ cũng như ĐHQT tại Việt Nam, mà còn có những phần quà vô cùng hấp dẫn dành cho các Amser đăng ký tham dự! <br>
    Tất cả các bạn học sinh tham dự chương trình quan tâm học bổng Du học Mỹ, Canada và Đại học Quốc tế có cơ hội nhận được nhiều phần quà hấp dẫn từ American Study.<br><br>
    Đăng ký trực tiếp tại: <a href = 'https://forms.gle/sEdQkF1PxrCfBt3V8' target="_blank">https://forms.gle/sEdQkF1PxrCfBt3V8</a> để được phỏng vấn cùng Ban Giám đốc của American Study:<br>
    - Nhận ngay học bổng du học lên tới 1000 USD<br>
    - 10 phần quà Apple Macbook, 20 Airpods 2<br>
    - Tặng 100 bộ sách độc quyền luyện thi SAT/ IELTS trị giá 1.000.000đ<br>
    - Tặng gói tham dự hoạt động ngoại khóa cùng American Study với vị trí leader trị giá 40.000.000đ<br><br>
    Thông tin liên hệ:<br>
    American Study – Luyện thi và tư vấn du học Mỹ, Canada<br>
    Hotline: 0912 170 676 – 0964102268<br>
    Email: americanstudy.info@gmail.com<br>
    Website: www.americanstudy.edu.vn<br>
    Địa chỉ: <br>
    Cơ sở 1: Toà nhà Yên Hòa Sunshine, 09 Vũ Phạm Hàm, Cầu Giấy, Hà Nội<br>
    Cơ sở 2: Toà nhà Viettel Complex, 285 Cách mạng tháng 8, P.15, Q.10, TP.HCM<br>
    </div>
    <div class = 'row'>
      <div class = 'col-12 ntt-img'>
        <img class = 'img-fluid' v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/ntt%2Fqu%C3%A0-01.jpg?alt=media&token=573a1111-0919-4181-b0ec-9d1ac7a4fb7c'">
      </div>
      <div class = 'col-12 ntt-img questionnaire'>
        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSdXJtS8xzPUJh5WDNLD3FNkHYU3KdnnY-wgXnaYi4it6i6g0Q/viewform' target="_blank">
        <img  class = 'img-fluid' v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/ntt%2FUntitled-2-01.jpg?alt=media&token=f00cf80e-d48e-4864-9b0b-b4a1fa139530'">
        </a>
      </div>
      <div class = 'col-12 ntt-img'>
        <img class = 'img-fluid' v-lazy="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_6663.JPG?alt=media&token=bb754416-4d10-427f-8724-48f5cdb19cb3'">
      </div>
      <div class="embed-responsive embed-responsive-16by9" >
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/El0PUPl8T0A" allowfullscreen></iframe>
      </div>
    </div>
    <!-- <div class="ntt-title ntt-title">Tìm hiểu thêm về Ams Advisor ⇀</div> -->
</div> 

<div class = 'container-fluid ntt-info minverva-university-ntt'>
    <div class = 'return-to-main-ntt'>
      <svg width="5" height="8" viewBox="0 0 5 8" fill="#0a047a" xmlns="http://www.w3.org/2000/svg" class="css-1b54wkh"><path d="M0 4L4.5 0.535898L4.5 7.4641L0 4Z" fill="#0a047a"></path></svg><span>Trở về</span>
    </div>
    <div class="ntt-title">Minerva University</div>
     <div class = 'img-fluid ntt-img'>
      <img v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/MU_Logo_BLK%20(1).png?alt=media&token=d570f998-f460-4048-be2d-170e827ddeb3'">
    </div>
    <div class = 'row'>
      <!-- <div class = 'col-12 ntt-img'>
        <img class = 'img-fluid' v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/ntt%2Fqu%C3%A0-01.jpg?alt=media&token=573a1111-0919-4181-b0ec-9d1ac7a4fb7c'">
      </div>
      <div class = 'col-12 ntt-img questionnaire'>
        <a href = 'https://docs.google.com/forms/d/e/1FAIpQLSdXJtS8xzPUJh5WDNLD3FNkHYU3KdnnY-wgXnaYi4it6i6g0Q/viewform' target="_blank">
        <img  class = 'img-fluid' v-lazy ="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/ntt%2FUntitled-2-01.jpg?alt=media&token=f00cf80e-d48e-4864-9b0b-b4a1fa139530'">
        </a>
      </div>
      <div class = 'col-12 ntt-img'>
        <img class = 'img-fluid' v-lazy="'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_6663.JPG?alt=media&token=bb754416-4d10-427f-8724-48f5cdb19cb3'">
      </div> -->
      <div class="embed-responsive embed-responsive-16by9 minerva-video" >
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/n201cHf88O4" allowfullscreen></iframe>
      </div>
      <div class="embed-responsive embed-responsive-16by9 minerva-video" >
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ItPWbHJ8Gzo" allowfullscreen></iframe>
      </div>
    </div>
    <!-- <div class="ntt-title ntt-title">Tìm hiểu thêm về Ams Advisor ⇀</div> -->
</div> 

  <div class="noise-overlay"></div>

  <div class="loading-screen" v-if="!hasLoaded">
    <div class="noise-overlay-loading"></div>
    <div class = 'loading-screen-title' ref = 'pointer'>{{loadingClubs}} / 41<br>CÂU LẠC BỘ</div>
    <div class="loading-screen-graphics"></div>
  </div>
  <div class="login-overlay" v-if='!$store.state.hasAuthenticated'></div>
  <div class="form-submit" v-if='!$store.state.hasAuthenticated'>
    <div class="form-submit-title">Vé vào cổng</div>
    <label>Họ và tên</label>
    <input type="text" v-model="user.name">
    <label>Lớp</label>
    <input type="text" v-model="user.class">
     <label>Trường</label>
    <input type="text"  v-model="user.school">
     <label>Số điện thoại</label>
    <input type="text" v-model="user.phone">
     <label>Email</label>
    <input type="text" v-model="user.email">
    <div class = 'login-error'>{{loginError}}</div>
    <div class = 'login-btn'>
      <svg id="read-more" viewBox="0 0 30 30">
        <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
        <path d="M19.022 14.046v1H.142v-1z"></path>
      </svg>
    </div>
    <div class = 'loading-btn'></div>
  </div>
  <section class = 'main-event'>
  <div class="my-favorites">
    <svg width="12px" height="14px" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6 1H1v12l4.8-3.6 4.8 3.6V1z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </div>
  <div class="my-favorties-list container-fluid">
     <div class ='cancel-list'><svg class="svg-list" viewBox="0 0 20 20">
      <path fill="black" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
    </svg></div>
     <div class="row my-favorties-list-title">Câu Lạc Bộ Yêu Thích</div>
    <div v-if='$store.state.club_data.clubs.length'>
      <div class = 'row favorite-club-info' v-for='(club,index) in $store.state.club_data.clubs' :key='index'>
        <div class="col-1 number-title" v-if="largeSize">{{index+1}}.</div>
        <div class="col-4 col-xl-3 d-flex justify-content-center">
          <img v-lazy="club.logo_url">
        </div>
        <div class="col-8 col-xl-8 d-flex align-items-start flex-column">
          <div class = 'club-favorite-title'>{{club.title.replace('&amp;', ' & ')}}</div>
          <div class="club-favorite-type">{{club.type}}</div>
          <div class = 'more-info'><a :href='club.link'>Tìm hiểu về CLB qua fanpage ⇀</a></div>
        </div>
      </div>
    </div>
    <div v-else class = 'club-else'>Bạn chưa thêm câu lạc bộ yêu thích nào.</div>
  </div>
  <div class = 'cursor' ref = 'pointer'>
    <svg id="read-more" viewBox="0 0 30 30">
      <path d="M11.275 7.449l.703-.71 7.895 7.821-7.895 7.822-.703-.71 7.177-7.112z"></path>
      <path d="M19.022 14.046v1H.142v-1z"></path>
    </svg>
  </div>
  <div class = 'left-header'>
    <div>Trường THPT chuyên Hà Nội - Amsterdam</div>
    <div>Ams Advisor</div>
    <div class = 'return-to-home' ref='return_home' v-show="hasViewClubShow">
      <svg width="5" height="8" viewBox="0 0 5 8" fill="white" xmlns="http://www.w3.org/2000/svg" class="css-1b54wkh"><path d="M0 4L4.5 0.535898L4.5 7.4641L0 4Z" fill="white"></path></svg><span>Trở về</span>
    </div>
  </div>
  <div class = 'right-header'>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="91px" id="Layer_1" version="1.1" viewBox="0 0 91 91" width="91px" xml:space="preserve"><g><rect height="3.4" width="30.602" x="36.891" y="31.362"/><rect height="3.4" width="30.602" x="36.891" y="44.962"/><rect height="3.4" width="30.602" x="36.891" y="58.562"/><path d="M27.594,36.462c1.877,0,3.398-1.522,3.398-3.4c0-1.877-1.521-3.399-3.398-3.399h-0.02c-1.877,0-3.391,1.522-3.391,3.399   C24.184,34.939,25.715,36.462,27.594,36.462z"/><path d="M27.594,50.062c1.877,0,3.398-1.521,3.398-3.399s-1.521-3.399-3.398-3.399h-0.02c-1.877,0-3.391,1.521-3.391,3.399   S25.715,50.062,27.594,50.062z"/><path d="M27.594,63.662c1.877,0,3.398-1.522,3.398-3.399c0-1.879-1.521-3.4-3.398-3.4h-0.02c-1.877,0-3.391,1.521-3.391,3.4   C24.184,62.14,25.715,63.662,27.594,63.662z"/></g></svg>
  </div>
  <div class = 'center-title' v-if="!hasEnter">
    <!-- <div class = "left">Club Fair</div>
    <div class = "right">2021</div> -->
    Club Fair 2021
  </div>
  <div class = 'center-title namespace' v-if="!hasEnter">
    <!-- <div class = "left">Club Fair</div>
    <div class = "right">2021</div> -->
    Club Fair 2021
  </div>
  <div class = 'center-title-small' v-if="!hasEnter">Tham gia ⇀</div>
  <div class="scene">
  </div>
  <div class="index_title" v-show='hasViewClubShow'></div>
  <div class="club-thumbnail container" v-show='hasViewClubShow && largeSize'>
    <div class = 'row'>
      <div class="col-6"></div>
      <div class="col-6">
        <img class = 'club-thumbnail-img' v-lazy="thumbnailSRC">
        <div class = 'club-thumbnail-name'>{{thumbnailName}}</div>
        <div class="club-thumbnail-title">{{thumbnailTitle}}</div>
        <a class = 'view-btn'>Xem thêm <svg width="88" height="24" viewBox="0 0 88 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.7 0L80 8s4 4 8 4c-4 0-8 4-8 4l-8.3 8-2.7-2.6 7.6-7.4H0v-4h76.6L69 2.6 71.7 0z"></path></svg></a>
      </div>
    </div>
  </div>
  <div class="club-thumbnail-small" v-show='hasViewClubShow && !largeSize'>
    <div class="row">
      <div class="col-5 col-md-7 col-lg-6 col-xl-5" style = 'text-align: center;'><img class = 'img-fluid small-img club-thumbnail-small-img' v-lazy="thumbnailSRC"></div>
      <div class="col-7 col-md-5 col-lg-6 col-xl-7">
        <div class = 'club-thumbnail-small-name'>{{thumbnailName}}</div>
        <div class="club-thumbnail-small-title">{{thumbnailTitle}}</div>
        <a class = 'view-small-btn'>Xem thêm <svg width="88" height="24" viewBox="0 0 88 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.7 0L80 8s4 4 8 4c-4 0-8 4-8 4l-8.3 8-2.7-2.6 7.6-7.4H0v-4h76.6L69 2.6 71.7 0z"></path></svg></a>
      </div>
    </div>
  </div>

  <div class="container-fluid club_info">
    <div class = 'buttons' v-show="isViewingClub">
    <div class = "like-button"><svg class="svg-icon" viewBox="0 0 20 20">
      <path fill="none" d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
    </svg></div>
    <div  class="dislike-button"><svg class="svg-icon" viewBox="0 0 20 20">
      <path fill="none" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
    </svg></div>
    </div>
    <section class = 'club_info_first_sec'>
    <div class="row header">
      <div class = 'return-to-showcase' v-show="isViewingClub">
      <svg width="5" height="8" viewBox="0 0 5 8" fill="#0a047a" xmlns="http://www.w3.org/2000/svg" class="css-1b54wkh"><path d="M0 4L4.5 0.535898L4.5 7.4641L0 4Z" fill="#0a047a"></path></svg><span>Trở về</span>
    </div>
    </div>
    <div class="row" id = 'section-0'>
      <div class="club_info_img d-flex justify-content-center col-12 col-lg-7">
        <img class = 'img-fluid' v-lazy="clubInfo.logo_url">
      </div>
      <div class="col-12 col-lg-5 club_info_detail">
        <div class="club_info_title">{{clubInfo.title}}</div>
        <div class="club_info_type_title">Giới thiệu</div>
        <div class ="club_info_type" v-html="clubInfo.description"></div>
      </div>
    </div>
    <div class="row type-lower-row">
      <div class="col-6">
        <div class="club_info_type_title type_lower">Thể loại CLB</div>
        <div class="club_info_type type_lower_detail">{{clubInfo.type}}</div>
      </div>
      <div class="col-6">
        <div class="club_info_type_title type_lower">Link fanpage</div>
        <div class="club_info_type type_lower_detail"><a :href ="clubInfo.link" target="_blank">{{clubInfo.title}}</a></div>
      </div>
    </div>
    </section>
    <section class = 'club_info_second_sec'>
      <div class="activities_title">Hoạt động</div>
      <div class="row" v-for="(activity, index) in clubInfo.activities" :key="index">
        <div class="col-12 activity-title" :id="'section-' + (index+1)">{{index+1}}. {{clubInfo.activities_title[index]}}</div>
        <div class="col-12 activity-desc" v-html="activity.description"></div>
        <div class="col-12 activity-img d-flex justify-content-center" v-for="img in activity.image_urls" :key='img + Math.random()'>
          <img class = 'img-fluid' v-if="img!=''" v-lazy="img">
        </div>
        <div class="col-12 activity-video"  v-for="vid in activity.video_url" :key='vid + Math.random()'>
          <div class="embed-responsive embed-responsive-16by9" v-if="vid!=''" >
            <iframe class="embed-responsive-item" :src="vid" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
  </section>
</div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { BasisTextureLoader } from "three/examples/jsm/loaders/BasisTextureLoader.js"
import { fetchLogoURLS, fetchClubData, users, sportsData } from '@/firebase'
import { gsap, Power4, Back, Power0 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vue from 'vue'
gsap.registerPlugin(ScrollTrigger);
import img from '@/assets/gradient.jpg';
export default {
  name: 'Main',
  data() {
    return {
      hasEnter: false,
      hasLoaded: false,
      hasViewClub: false,
      hasViewClubShow: false,
      hasScroll: false,
      isDragging: false,
      isViewingClub: false,
      thumbnailName: '',
      thumbnailTitle: '',
      thumbnailSRC: '',
      largeSize: true,
      clubInfo: {
        title: '',
        logo_url: '',
        type: '',
        description: '',
        link: '',
        activities: [],
        activities_title: []
      },
      loadingProgress: 0,
      loadingClubs: 0,
      isViewingList: false,
      hasLogin: false,
      user: {
        name: '',
        email: '',
        class: '',
        school: '',
        phone: '',
        email: ''
      },
      loginError: ''
    }
  },
  methods: {
    enlargeCursor() {
      document.getElementsByClassName('cursor')[0].style.width = '4rem'
      document.getElementsByClassName('cursor')[0].style.height = '4rem'

    },
    reduceCursor() {
      document.getElementsByClassName('cursor')[0].style.width = '0rem'
      document.getElementsByClassName('cursor')[0].style.height = '0rem'
    },
    onMouseMove(e) {
      document.getElementsByClassName('cursor')[0].style.left = (e.pageX - 25) + 'px'
      document.getElementsByClassName('cursor')[0].style.top = (e.pageY - 25) + 'px'
    },
    initialize() {
      var loading_tl = gsap.timeline({repeat: -1})
      loading_tl.to('.loading-screen-graphics', {opacity: 0.3, duration: 1})
      .to('.loading-screen-graphics', {opacity: 1, duration: 1})
      var that = this
      class Webgl {
        constructor() {
          this.setProps()
          this.init()
        }
        async init() {
          this.scene = new THREE.Scene()
          this.camera = new THREE.PerspectiveCamera(45, this.props.width / this.props.height, this.props.near, this.props.far);
          this.camera.position.set(0, 0, 0);
          this.camera.position.z = 200
          if(window.innerWidth < 500) {
            this.camera.position.z = 400
          }
          this.camera.lookAt(this.scene.position);

          this.time = 0
          this.clock = new THREE.Clock()
                    
          this.renderer = new THREE.WebGLRenderer({
              antialias: true,
              alpha: true
          });

          this.renderer.setPixelRatio(2);

          this.renderer.setSize(this.props.width, this.props.height);
          this.div = document.getElementsByClassName("scene")[0];
          this.div.appendChild(this.renderer.domElement);


          this.social_data = {
            logosURLS: await fetchLogoURLS('clubs_social'),
            data: await fetchClubData('clubs_social')
          }

          this.art_data = {
            logosURLS: await fetchLogoURLS('clubs_art'),
            data: await fetchClubData('clubs_art')
          }

          this.academic_data = {
            logosURLS: await fetchLogoURLS('clubs_academic'),
            data: await fetchClubData('clubs_academic')
          }

          this.sports_data = {
            logosURLS: await fetchLogoURLS('clubs_sports'),
            data: sportsData 
          }

          // console.log(this.social_data.logosURLS.length)
          // console.log(this.social_data.data.length)

          // console.log( this.art_data.logosURLS.length)
          //  console.log( this.art_data.data.length)

          // console.log(this.social_data.logosURLS.length)
          // console.log(this.social_data.data.length)


          this.cards = {
            art: new Cards(this, 15, 59, this.art_data.logosURLS, { x: 0, y: 0, z: 1}, 230 + 30, this.art_data.data),
            academic: new Cards(this, 15, 80, this.academic_data.logosURLS, { x: 0, y: 0, z: 1}, 300 + 30, this.academic_data.data),
            sports: new Cards(this, 15, 90, this.sports_data.logosURLS, { x: 0, y: 0, z: 1}, 150 + 30, this.sports_data.data),
            social: new Cards(this, 15, 60, this.social_data.logosURLS, { x: 0, y: 0, z: 1}, 80 + 30, this.social_data.data)
          }

          this.createCenter()

          var par = this


          if(!that.$store.state.hasAuthenticated) {

          document.getElementsByClassName('login-btn')[0].addEventListener('click', async function() {
            if(that.user.name != '' && that.user.class != '' && that.user.school != ''  && that.user.email != ''  && that.user.phone != '') {
              var loading_tl = gsap.timeline({repeat: -1})
              loading_tl.to('.loading-btn', {left: "10%", duration: 0.5})
              .to('.loading-btn', {left: "6%", duration: 0.5})
              await users.add(that.user).then(res => {
                gsap.to('.form-submit', {opacity: 0, top: '-50%', duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                  that.hasLogin = true
                  that.$store.commit('setAuthentication', true)
                }})
                gsap.to('.login-overlay', {opacity: 0, duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                  that.hasLogin = true
                  that.$store.commit('setAuthentication', true)
                  //console.log(that.$store.state.hasAuthenticated)
                  par.moveToFirstLevel()
                  loading_tl.pause()
                  //document.getElementsByClassName('login-overlay')[0].style.zIndex = -1
                }})
              }).catch( error => {
                that.loginError = 'Đã xảy ra lỗi. Xin vui lòng thử lại!'
              })
            } else {
              that.loginError = '*Bạn chưa điền hết thông tin! Hãy soát lại!'
            } 
          })
          } else {
            this.moveToFirstLevel()
          }

          this.render();
          //this.moveToFirstLevel()

        }
        setProps() {
            var width = document.body.clientWidth;
            var height = window.innerHeight;
            var aspect = width / height;
            var pixRatio = window.devicepixelratio

            if(window.innerWidth >= 950) {
              that.largeSize = true
            } else {
              that.largeSize = false
            }

            this.props = {
              width: width,
              height: height,
              aspect: aspect,
              left: -width / 2,
              right: width / 2,
              top: height / 2,
              bottom: -height / 2,
              near: 0.1,
              far: 10000,
              pixelRatio: pixRatio
            };
        }
        resize(){
          this.setProps();
          this.renderer.setSize(this.props.width, this.props.height);
        
          this.camera.aspect = this.props.width / this.props.height;
          this.camera.updateProjectionMatrix();
        }
        rotateCards(target, speed) {
          if (!that.hasEnter && target.group_3_cards.children.length == target.image_number) {
            target.group_3_cards.rotation.z += speed
            for(var i = 0; i < target.group_3_cards.children.length; i++) {
              target.group_3_cards.children[i].rotation.z += -speed
            }
          } else if (that.hasEnter) {
            // this.time = this.clock.getElapsedTime() * 0.1 * Math.PI;
            // var tl = gsap.timeline()
            // target.group_3_cards.rotation.z = 0
            // for(var i = 0; i < target.group_3_cards.children.length; i++) {
            //   target.group_3_cards.children[i].rotation.z = -0
            //   tl.fromTo(target.group_3_cards.children[i].position, {x:target.group_3_cards.children[i].position.x, y:target.group_3_cards.children[i].position.y, z:target.group_3_cards.children[i].position.z}, {x: target.target_wheel_center.x +  Math.cos(this.time + target.radian_interval * i) * target.target_wheel_radius, y: target.target_wheel_center.y + Math.sin(this.time + target.radian_interval * i) * target.target_wheel_radius , z: target.target_wheel_center.z, duration: 2, ease: Power4.easeOut}, 0)
            // }
          } 
        }
        moveToFirstLevel() {
          document.addEventListener("mousemove", e => that.onMouseMove(e))
          document.getElementsByClassName('center-title')[1].addEventListener( 'mouseenter', () => {
            that.enlargeCursor()
          })
          document.getElementsByClassName('center-title')[1].addEventListener( 'mouseleave', () => {
            that.reduceCursor()
          })
          document.getElementsByClassName('center-title')[1].addEventListener( 'click', () => {
            this.cards.art.animateFromCenterToCluster(this.cards.art)
            this.cards.academic.animateFromCenterToCluster(this.cards.academic)
            this.cards.sports.animateFromCenterToCluster(this.cards.sports)
            this.cards.social.animateFromCenterToCluster(this.cards.social)
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);

            this.controls.mouseButtons = {
              LEFT: THREE.MOUSE.PAN
            }

            this.controls.touches = {
              ONE: THREE.TOUCH.PAN,
              TWO: THREE.TOUCH.DOLLY_PAN
            }

            gsap.to('.text-label-center', {opacity: 1, duration: 1.5, ease: Power4.easeOut})
            gsap.to(this.mesh_center.scale, {x: this.mesh_center.target_scale_x, y: this.mesh_center.target_scale_y, duration: 2, ease: Power4.easeOut})
            this.controls.enableDamping = true
            this.controls.enablePan = true
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
               this.controls.enableZoom = true
               this.controls.minDistance = 86400/window.innerWidth;
               this.controls.maxDistance = 1920000/window.innerWidth;
            } else {
            this.controls.enableZoom = false
            }
            this.controls.enableRotate = false
            //gsap.to(this.camera.position, {z: this.camera.position.z + 100, duration: 2, ease: Power4.easeOut})
            this.smoothZoom()
            that.reduceCursor()
            this.addThreeEL()
            this.exitShowCaseClub()
            this.moveToClubInfo()
            that.hasEnter = true
          })

           document.getElementsByClassName('center-title-small')[0].addEventListener( 'mouseenter', () => {
            that.enlargeCursor()
          })
          document.getElementsByClassName('center-title-small')[0].addEventListener( 'mouseleave', () => {
            that.reduceCursor()
          })

          document.getElementsByClassName('center-title-small')[0].addEventListener( 'click', () => {
            this.cards.art.animateFromCenterToCluster(this.cards.art)
            this.cards.academic.animateFromCenterToCluster(this.cards.academic)
            this.cards.sports.animateFromCenterToCluster(this.cards.sports)
            this.cards.social.animateFromCenterToCluster(this.cards.social)
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);


            var minPan = new THREE.Vector3( - 2, - 2, - 2 );
            var maxPan = new THREE.Vector3( 2, 2, 2 );

            this.controls.mouseButtons = {
              LEFT: THREE.MOUSE.PAN
            }

            this.controls.touches = {
              ONE: THREE.TOUCH.PAN,
              TWO: THREE.TOUCH.DOLLY_PAN
            }

            this.controls.target.clamp( minPan, maxPan)

            gsap.to('.text-label-center', {opacity: 1, duration: 1.5, ease: Power4.easeOut})
            gsap.to(this.mesh_center.scale, {x: this.mesh_center.target_scale_x, y: this.mesh_center.target_scale_y, duration: 2, ease: Power4.easeOut})
            this.controls.enableDamping = true
            this.controls.enablePan = true
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
               this.controls.enableZoom = true
               this.controls.minDistance = 86400/window.innerWidth;
               this.controls.maxDistance = 1920000/window.innerWidth;
            } else {
            this.controls.enableZoom = false
            }
            this.controls.enableRotate = false
            //gsap.to(this.camera.position, {z: this.camera.position.z + 100, duration: 2, ease: Power4.easeOut})
            this.smoothZoom()
            that.reduceCursor()
            this.addThreeEL()
            this.exitShowCaseClub()
            this.moveToClubInfo()
            that.hasEnter = true
          })
        }
        smoothZoom() {
          function map (num, min1, max1, min2, max2, round = false) {
            const num1 = (num - min1) / (max1 - min1)
            const num2 = (num1 * (max2 - min2)) + min2
          
            if (round) return Math.round(num2)
          
            return num2
          }

          // var myElement = document.getElementsByClassName('scene')[0]
          // var mc = new Hammer(myElement)
          // mc.add(new Hammer.Pinch({ threshold: 0, pointers: 0 }));
          // mc.on('pinch', function(event) {
          //    if ( that.hasViewClub == false && that.isViewingClub == false  && that.isViewingList == false) {
          //      if (this.camera.position.z + event.scale * 0.8 > 1920000/window.innerWidth) {
          //       gsap.to(this.camera.position, {z: 1920000/window.innerWidth, duration: 0.5, ease: Power4.easeOut})
          //     } else if (this.camera.position.z + event.scale * 0.8 < 86400/window.innerWidth) {
          //       gsap.to(this.camera.position, {z: 86400/window.innerWidth, duration: 0.5, ease: Power4.easeOut})
          //     } else {
          //       gsap.to(this.camera.position, {z: this.camera.position.z + event.scale * 0.6, duration: 0.5, ease: Power4.easeOut})
          //     }
          //    }
          // })

          var scrollStop;
          var that4 = this
          document.addEventListener('wheel', event => {
            //event.preventDefault();
            clearTimeout(scrollStop)
            if ( that.hasViewClub == false && that.isViewingClub == false  && that.isViewingList == false) {
              if (this.camera.position.z + event.deltaY * 0.8 > 1920000/window.innerWidth) {
                gsap.to(this.camera.position, {z: 1920000/window.innerWidth, duration: 0.5, ease: Power4.easeOut})
              } else if (this.camera.position.z + event.deltaY * 0.8 < 86400/window.innerWidth) {
                gsap.to(this.camera.position, {z: 86400/window.innerWidth, duration: 0.5, ease: Power4.easeOut})
              } else {
                gsap.to(this.camera.position, {z: this.camera.position.z + event.deltaY * 0.6, duration: 0.5, ease: Power4.easeOut})
              }
            }
            else if ( that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false && that.isViewingList == false) {
              gsap.to('.index_title', {opacity: 0, duration: 0.5, ease: Power4.easeOut})
              gsap.to('.club-thumbnail', {opacity: 0, y: -20, duration: 0.2, ease: Power4.easeOut})
              gsap.to('.club-thumbnail-small', {opacity: 0, duration: 0.2, ease: Power4.easeOut})

              that.thumbnailSRC = img
              document.getElementsByClassName('club-thumbnail-img')[0].src = '/img/gradient.c12db305.jpg'
              document.getElementsByClassName('club-thumbnail-small-img')[0].src = '/img/gradient.c12db305.jpg'
              if(window.innerWidth >= 950) {
                var speed = event.deltaY * 0.09
                if( this.showCaseMesh.children[0].position.y + speed > this.boundary || this.showCaseMesh.children[this.showCaseMesh.children.length - 1].position.y < -this.boundary) {
                } else {
                  for(var i = 0; i < this.showCaseMesh.children.length; i++) {
                    gsap.to( this.showCaseMesh.children[i].position, {x: Math.cos((this.showCaseMesh.children[i].position.y /  this.widthTotal) * Math.PI / 2) * 100 - 100 - (window.innerWidth/70), y:  this.showCaseMesh.children[i].position.y + speed, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                    }})
                    gsap.to(this.showCaseMesh.children[i].rotation, {z: -map(this.showCaseMesh.children[i].position.y, - this.widthTotal,  this.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }

                  scrollStop=setTimeout(function(){
                  var return_mesh_index = 0
                  var min_distance = Math.abs(0 - that4.showCaseMesh.children[0].position.y)
                  for(var i = 0; i < that4.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - that4.showCaseMesh.children[i].position.y)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  that4.target_index = return_mesh_index

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = that4.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = that4.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = that4.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = that4.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})

                  document.getElementsByClassName('index_title')[0].innerHTML = that4.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < that4.showCaseMesh.children.length; i++) {
                    gsap.to( that4.showCaseMesh.children[i].position, {x: Math.cos((that4.showCaseMesh.children[i].position.y /  that4.widthTotal) * Math.PI) * 100 - 100 - (window.innerWidth/70), y:  that4.showCaseMesh.children[i].position.y + (0 - that4.showCaseMesh.children[return_mesh_index].position.y), duration: 1.2, ease: Power4.easeOut})
                    gsap.to(that4.showCaseMesh.children[i].rotation, {z: -map(that4.showCaseMesh.children[i].position.y, - that4.widthTotal,  that4.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }, 50);
              } else {
                var speed = event.deltaY * 0.2
                if( this.showCaseMesh.children[0].position.x + speed < -(this.boundary) || this.showCaseMesh.children[this.showCaseMesh.children.length - 1].position.x > this.boundary) {
                  //console.log('bounded')
                } else {
                  for(var i = 0; i < this.showCaseMesh.children.length; i++) {
                    gsap.to( this.showCaseMesh.children[i].position, {x: this.showCaseMesh.children[i].position.x + speed, y:  Math.cos((this.showCaseMesh.children[i].position.x /  this.widthTotal) * Math.PI / 2) * 100 - 100, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                    }})
                    gsap.to(this.showCaseMesh.children[i].rotation, {z: -map(this.showCaseMesh.children[i].position.x, - this.widthTotal,  this.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }

                  scrollStop=setTimeout(function(){
                  var return_mesh_index = 0
                  var min_distance = Math.abs(0 - that4.showCaseMesh.children[0].position.x)
                  for(var i = 0; i < that4.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - that4.showCaseMesh.children[i].position.x)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  that4.target_index = return_mesh_index

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = that4.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = that4.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = that4.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = that4.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})


                  document.getElementsByClassName('index_title')[0].innerHTML = that4.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < that4.showCaseMesh.children.length; i++) {
                    gsap.to( that4.showCaseMesh.children[i].position, {x: that4.showCaseMesh.children[i].position.x + (0 - that4.showCaseMesh.children[return_mesh_index].position.x), y:  Math.cos((that4.showCaseMesh.children[i].position.x /  that4.widthTotal) * Math.PI) * 100 - 100, duration: 1.2, ease: Power4.easeOut})
                    gsap.to(that4.showCaseMesh.children[i].rotation, {z: -map(that4.showCaseMesh.children[i].position.x, - that4.widthTotal,  that4.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }, 50);
              }
            }
          })
        }
        moveToClubInfo() {
          var that5 = this
          function showClubInfo() {
            if(that.isDragging == false) {
              that.clubInfo.title = that5.showCaseMesh.group_data.title
              that.clubInfo.logo_url = that5.showCaseMesh.group_data.logo_url
              that.clubInfo.type = that5.showCaseMesh.group_data.type
              that.clubInfo.description = that5.showCaseMesh.group_data.description
              that.clubInfo.link = that5.showCaseMesh.group_data.link
              that.clubInfo.id = that5.showCaseMesh.group_data.id
              that.clubInfo.activities = that5.showCaseMesh.group_data.activities
              that.clubInfo.activities_title = []
              for(var i = 0; i < that5.showCaseMesh.group_data.activities.length; i++) {
                that.clubInfo.activities_title.push(that5.showCaseMesh.group_data.activities[i].title.replace(/<br>/g, ' '))
              }
              //console.log(that5.showCaseMesh)
              var tl = gsap.timeline()
              // that.isViewingClub = true
              tl.to('.club_info', {right: '0%', duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                that.isViewingClub = true
              }})

              document.getElementById('section-' + that5.target_index).scrollIntoView({ behavior: 'smooth'})

              //that5.target_index = return_mesh_index
            }
          }

          function removeClubInfo() {
            var tl = gsap.timeline()
            that.isViewingClub = false
            tl.to('.club_info', {right: '-100%', duration: 1.5, ease: Power4.easeOut, onComplete: function() {
            }})
          }

          function showAAInfo() {
            that.clubInfo.title = 'Ams Advisor'
            that.clubInfo.logo_url = 'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/aaaa.jpg?alt=media&token=3dd6407c-4240-4fff-a7d1-8edcbb46fa5c'
            that.clubInfo.type = 'Học thuật'
            that.clubInfo.description = `Ams Advisor được thành lập vào năm 2007 bởi một nhóm học sinh trường THPT Hà Nội – Amsterdam và chính thức đi vào hoạt động từ đầu năm 2008. Trong suốt thời gian 11 năm hoạt động, Ams Advisor luôn nhận được sự quan tâm ủng hộ nhiệt tình của đông đảo học sinh trường Ams, khẳng định được vị thế của mình là câu lạc bộ về học thuật lâu đời nhất của trường THPT Hà Nội – Amsterdam.
Đến với Ams Advisor – câu lạc bộ học thuật tiêu biểu của trường, bạn sẽ có cơ hội được phát triển tiềm năng của bản thân trong một môi trường chuyên nghiệp nhưng không kém phần thân thiện, hòa đồng. Đặc biệt hơn hết, Ams Advisor sẽ cho bạn một mái nhà, một gia đình nhỏ ấm cúng và đầy ắp tình yêu thương. Hãy cùng nhìn qua các hoạt động chính nổi bật của Ams Advisor nhé!
`
            that.clubInfo.link = 'https://www.facebook.com/amsadvisor/'
            that.clubInfo.activities_title = ['Advisor & Advisee', 'The Hidden Book', 'Club Fair']
            that.clubInfo.activities = [
              {
                description: 'Được tổ chức vào khoảng đầu học kì 2 hằng năm nhằm giúp đỡ các bạn học sinh trong việc học tập, chuẩn bị cho kì thi học kì 2 và đặc biệt là giúp các em học sinh lớp 9 tự tin hơn trong kì thi chuyển cấp.',
                image_urls: ['https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/75439231_2586377821401047_8354454110824562688_n.jpg?alt=media&token=d0965926-fb9b-46ea-85b0-fe4e38b7d12d', 'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/126935094_3572109819494504_7687903533512341834_n.jpg?alt=media&token=f13cde7e-8a13-4ea7-ac92-f241dbee1a0d']
              },
              {
                description: 'The Hidden Book là chương trình hội chợ sách, được tổ chức nhằm mang đến một sân chơi bổ ích, lý thú đồng thời góp phần nâng cao văn hoá đọc hiện nay. Trải qua 3 mùa tổ chức, The Hidden Book đã khẳng định vị trí của mình trong cộng đồng yêu sách trên địa bàn thành phố Hà Nội.',
                image_urls: ['https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/151118568_4027855607259510_1932190443003229090_n.jpg?alt=media&token=1cce608c-40ee-4652-9da9-9e7241e9d053', 'https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/106307575_3371965599515184_8389931450300458609_n.jpg?alt=media&token=2c14f107-bd20-49a3-89e8-86307bf6cfd1']
              },
              {
                description: 'Là hoạt động truyền thống và lâu đời nhất của Ams Advisor. Với sự tham gia của hơn 40 CLB lớn nhỏ, Club Fair là cầu nối giúp các tân Amser có cái nhìn tổng quan về các hoạt động ngoại khóa của trường, từ đó lựa chọn cho mình một CLB thích hợp để phát triển tài năng và đam mê của bản thân.',
                image_urls: [' https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/IMG_3283.JPG?alt=media&token=9692e192-5a3a-4de4-b7e4-ecd6bf074a74']
              }
            ]
            that.clubInfo.id = 'AAd'
            var tl = gsap.timeline()
            tl.to('.clubfair-info', {left: '-150%', duration: 1.5, ease: Power4.easeOut},0)
            .to('.club_info', {right: '0%', duration: 2, ease: Power4.easeOut, onComplete: function() {
                // that.hasViewClub = false
                //that.isViewingClub = true
                 that.isViewingClub = true
            }},0)
          }
          document.getElementsByClassName('club-thumbnail')[0].addEventListener('click', showClubInfo)
          document.getElementsByClassName('club-thumbnail-small')[0].addEventListener('click', showClubInfo)
          document.getElementsByClassName('index_title')[0].addEventListener('click', showClubInfo)
          document.getElementsByClassName('return-to-showcase')[0].addEventListener('click', removeClubInfo)
          document.getElementsByClassName('aa-title')[0].addEventListener('click', showAAInfo)
          document.getElementsByClassName('about-clubfair')[0].addEventListener('click', function() {
            gsap.to('.clubfair-info ', {left: '0%', duration: 1.5, ease: Power4.easeOut})
            //that.isViewingClub = true
            //that.hasViewClub = false
          })
          document.getElementsByClassName('american-study')[0].addEventListener('click', function() {
            gsap.to('.american-study-ntt', {left: '0%', duration: 1.5, ease: Power4.easeOut})
          })
          document.getElementsByClassName('minverva-university')[0].addEventListener('click', function() {
            gsap.to('.minverva-university-ntt', {left: '0%', duration: 1.5, ease: Power4.easeOut})
          })
        }
        showCaseClub(target) {
          function map (num, min1, max1, min2, max2, round = false) {
            const num1 = (num - min1) / (max1 - min1)
            const num2 = (num1 * (max2 - min2)) + min2
          
            if (round) return Math.round(num2)
          
            return num2
          }

          var tl = gsap.timeline()
          this.widthTotal = 0
          this.boundary = 0
          that.hasViewClub = true

          tl.to(target.text.style, {opacity: 0, duration: 1.5, ease: Power4.easeOut})

          document.getElementsByClassName('index_title')[0].innerHTML = target.children[0].index_title
          that.thumbnailTitle = target.children[0].index_title.replace(/<br>/g, ' ')
          that.thumbnailSRC = target.children[0].group_data.image_url
          gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
          gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
          //gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
          if(window.innerWidth >= 950) {
            for(var i = 0; i < target.children.length; i++) {
              this.widthTotal+= target.children[i].geometry.parameters.height * target.children.length * 2
              this.boundary += target.children[i].geometry.parameters.height*i*1.8
            }
            for(var i = 0; i < target.children.length; i++) {

              tl.to(target.children[i].position, {x: -(window.innerWidth/70), y: -target.children[i].geometry.parameters.height*i*1.8, duration: 2, ease: Power4.easeOut, onComplete: function() {
                that.hasViewClubShow = true
                that.hasScroll = true
              }}, 2)

              if(i>2) {
                tl.to(target.children[i].scale, { x: target.children[i].target_scale_x, y: target.children[i].target_scale_y, duration: 1.5, ease: Power4.easeOut}, 2)
              } 

              tl.to(target.children[i].rotation, {z: -map(-target.children[i].geometry.parameters.height*i*1.8, - this.widthTotal,  this.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut},2)
            }
          } else {
            for(var i = 0; i < target.children.length; i++) {
              this.widthTotal+= target.children[i].geometry.parameters.width * target.children.length * 2
              this.boundary += target.children[i].geometry.parameters.width*i*2.5
            }
            for(var i = 0; i < target.children.length; i++) {

              tl.to(target.children[i].position, {x: target.children[i].geometry.parameters.width*i*2.5, y: 0, duration: 2, ease: Power4.easeOut, onComplete: function() {
                that.hasViewClubShow = true
                that.hasScroll = true
              }}, 2)

              if(i>2) {
                tl.to(target.children[i].scale, { x: target.children[i].target_scale_x, y: target.children[i].target_scale_y, duration: 1.5, ease: Power4.easeOut}, 2)
              } 

              tl.to(target.children[i].rotation, {z: -map(-target.children[i].geometry.parameters.width*i*2.5, - this.widthTotal,  this.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut},2)
            }
          }
        }
        exitShowCaseClub() {
          var thattt = this
          that.$refs.return_home.addEventListener('click', function() {
            that.thumbnailSRC = '/img/gradient.c12db305.jpg'
            document.getElementsByClassName('club-thumbnail-img')[0].src = '/img/gradient.c12db305.jpg'
            document.getElementsByClassName('club-thumbnail-small-img')[0].src = '/img/gradient.c12db305.jpg'
            that.thumbnailTitle = ''
            //that.thumbnailSRC = target.children[0].group_data.image_url
            that.clubInfo.title = ''
            that.clubInfo.logo_url = ''
            that.clubInfo.type = ''
            that.clubInfo.description = ''
            that.clubInfo.link = ''
            that.clubInfo.id = ''
            that.clubInfo.activities = []
            that.clubInfo.activities_title = []
            that.hasScroll = false
            that.hasViewClubShow = false
            thattt.controls.enablePan = true
            gsap.to(thattt.showCaseMesh.rotation, { z: 0, duration: 2.5, ease: Power4.easeOut})
            gsap.to(thattt.showCaseMesh.text.style, {opacity: 1, duration: 1.5, ease: Power4.easeOut})
            for(var i = 0; i < thattt.showCaseMesh.children.length; i++) {
              gsap.to(thattt.showCaseMesh.children[i].position, { x: thattt.showCaseMesh.children[i].cluster_pos.x, y: thattt.showCaseMesh.children[i].cluster_pos.y, duration: 2.5, ease: Power4.easeOut})
              gsap.to(thattt.showCaseMesh.children[i].rotation, { z: 0, duration: 2.5, ease: Power4.easeOut})
              if(i>2) {
                gsap.to(thattt.showCaseMesh.children[i].scale, { x: 0, y: 0, duration: 2.5, ease: Power4.easeOut})
              } 
            }
            //console.log(thattt.showCaseMesh.children[i].position)
            gsap.to(thattt.camera.position, { z: thattt.camera.position.z + 200, duration: 1, ease: Power4.easeOut, onComplete: function() {
              that.hasViewClub = false
              //thattt.controls.minDistance =  86400/window.innerWidth;
              if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                 thattt.controls.minDistance =  86400/window.innerWidth;
                   thattt.controls.enableZoom = true
              }
              //thatt.controls.enableZoom = true
              thattt.controls.update()
            }})
          })
        }
        addThreeEL() {
          this.raycaster = new THREE.Raycaster()
          this.mouse = new THREE.Vector2()
          var thatt = this
          function map (num, min1, max1, min2, max2, round = false) {
            const num1 = (num - min1) / (max1 - min1)
            const num2 = (num1 * (max2 - min2)) + min2
          
            if (round) return Math.round(num2)
          
            return num2
          }

          document.getElementsByClassName('return-to-main')[0].addEventListener('click', function() {
             gsap.to('.clubfair-info ', {left: '-150%', duration: 1.5, ease: Power4.easeOut})
             //that.hasViewClub = false
            //  that.isViewingClub = true
          })

           document.getElementsByClassName('return-to-main-ntt')[0].addEventListener('click', function() {
             gsap.to('.ntt-info ', {left: '-150%', duration: 1.5, ease: Power4.easeOut})
             //that.hasViewClub = false
            //  that.isViewingClub = true
          })

           document.getElementsByClassName('return-to-main-ntt')[1].addEventListener('click', function() {
             gsap.to('.ntt-info ', {left: '-150%', duration: 1.5, ease: Power4.easeOut})
             //that.hasViewClub = false
            //  that.isViewingClub = true
          })

          document.getElementsByClassName('right-header')[0].addEventListener('click', function() {
            gsap.to('.menu', {right: '0', duration: 1.5, ease: Power4.easeOut})
          })

          document.getElementsByClassName('cancel-menu')[0].addEventListener('click', function() {
            gsap.to('.menu', {right: '-100%', duration: 1.5, ease: Power4.easeOut})
            //that.hasViewClub = false
          })

          document.getElementsByClassName('return')[0].addEventListener('click', function() {
            gsap.to('.menu', {right: '-100%', duration: 1.5, ease: Power4.easeOut})
          })

          document.getElementsByClassName('my-favorites')[0].addEventListener('click', function() {
            gsap.to('.my-favorties-list', { top: '0', duration: 1.5, ease: Power4.easeOut})
             that.isViewingList == true
          })
          document.getElementsByClassName('cancel-list')[0].addEventListener('click', function() {
            gsap.to('.my-favorties-list', { top: '-150%', duration: 1.5, ease: Power4.easeOut})
             that.isViewingList == false
          })
          document.getElementsByClassName('like-button')[0].addEventListener('click', function() {
            const item = {
              logo_url: that.clubInfo.logo_url,//thatt.showCaseMesh.group_data.logo_url,
              link: that.clubInfo.link,
              title: that.clubInfo.title,
              type: that.clubInfo.type,
              id:  that.clubInfo.id,
            }

            let toastMessage = 'Đã thêm CLB yêu thích!'

            Vue.$toast.default(toastMessage, {
            // override the global option
                position: 'bottom',
                duration: 2500,
                queue: true,
            })
            that.$store.commit('addToFavorite', item)
            //console.log(that.$store.state.club_data)
            var tl = gsap.timeline()
            tl.to('.my-favorites', {background: "red", duration: 0.5, ease: Power4.easeOut})
            .to('.my-favorites', {background: "#fec810", duration: 0.5, ease: Power4.easeOut})
          })
          document.getElementsByClassName('dislike-button')[0].addEventListener('click', function() {
            that.isViewingClub = false
            var tl = gsap.timeline()
            tl.to('.club_info', {right: '-100%', duration: 1.5, ease: Power4.easeOut, onComplete: function() {
              that.isViewingClub = false
              //that.isViewingClub = true
            }})
          })
          document.getElementsByClassName('scene')[0].addEventListener('click', function(e) {
            if(!that.isDragging) {
              thatt.mouse.x = ( e.clientX /window.innerWidth ) * 2 - 1
              thatt.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1

              thatt.raycaster.setFromCamera( thatt.mouse, thatt.camera)
              thatt.intersect_group =  thatt.cards.art.group_3_cards.children.concat(thatt.cards.academic.group_3_cards.children, thatt.cards.sports.group_3_cards.children, thatt.cards.social.group_3_cards.children)
              thatt.intersect_group.push(thatt.mesh_center)
              thatt.intersects = thatt.raycaster.intersectObjects(thatt.intersect_group, true)
              if(thatt.intersects.length > 0 && that.hasViewClub == false &&  thatt.intersects[0].object.tag != 'club_fair') {
               // console.log(1)
                thatt.controls.enablePan = false
                var position = new THREE.Vector3()
                position.setFromMatrixPosition( thatt.intersects[0].object.parent.matrixWorld )
                var zoomIn = 50
                if(window.innerWidth <= 992) {
                  zoomIn = 80
                }
                if (window.innerWidth <= 576) {
                  zoomIn = 120
                } 
                
                if (window.innerWidth <= 400){
                  zoomIn = 125
                  //console.log('okay')
                } 

                
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                  thatt.controls.minDistance = 0;
                  thatt.controls.enableZoom = false

                }
                gsap.to(thatt.camera.position, { x: position.x, y: position.y, z: position.z + zoomIn, duration: 2.5, ease: Power4.easeOut, onUpdate: function() {
                  thatt.controls.target.x = thatt.camera.position.x
                  thatt.controls.target.y = thatt.camera.position.y
                }, onComplete: function() {
                  //console.log('complete')
                }})
               // console.log(thatt.intersects[0].object.parent)
                that.thumbnailName = thatt.intersects[0].object.parent.text.innerHTML.replace('&amp;', ' & ')
                thatt.showCaseMesh = thatt.intersects[0].object.parent
                that.clubInfo.title = thatt.showCaseMesh.group_data.title
                that.clubInfo.logo_url = thatt.showCaseMesh.group_data.logo_url
                that.clubInfo.type = thatt.showCaseMesh.group_data.type
                that.clubInfo.description = thatt.showCaseMesh.group_data.description
                that.clubInfo.link = thatt.showCaseMesh.group_data.link
                that.clubInfo.id = thatt.showCaseMesh.group_data.id
                that.clubInfo.activities = thatt.showCaseMesh.group_data.activities
                that.clubInfo.activities_title = []
                for(var i = 0; i < thatt.showCaseMesh.group_data.activities.length; i++) {
                  that.clubInfo.activities_title.push(thatt.showCaseMesh.group_data.activities[i].title.replace(/<br>/g, ' '))
                }
                thatt.showCaseClub(thatt.intersects[0].object.parent)
                // thatt.showCaseMesh = thatt.intersects[0].object.parent
                // thatt.showCaseClub(thatt.intersects[0].object.parent)
                // console.log(thatt.intersects)
              } else if (thatt.intersects.length > 0 && that.hasViewClub == false &&  thatt.intersects[0].object.tag == 'club_fair') {
                 gsap.to('.clubfair-info ', {left: '0%', duration: 1.5, ease: Power4.easeOut})
                 //that.hasViewClub = true
              }
            }
          })


          // document.getElementsByClassName('scene')[0].addEventListener('mousemove', function(e) {
          //   if(that.isDragging) {
          //     thatt.mouse.x = ( e.clientX /window.innerWidth ) * 2 - 1
          //     thatt.mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1


          //     thatt.raycaster.setFromCamera( thatt.mouse, thatt.camera)
          //     thatt.intersects = thatt.raycaster.intersectObjects( thatt.cards.art.group_3_cards.children.concat(thatt.cards.academic.group_3_cards.children, thatt.cards.sports.group_3_cards.children, thatt.cards.social.group_3_cards.children), true)
          //     if(thatt.intersects.length > 0 && that.hasViewClub == false) {
          //       gsap.to(thatt.intersects[0].object.scale, {x: thatt.intersects[0].object.target_scale_x + 2, y: thatt.intersects[0].object.target_scale_y + 2, duration: 1.5, ease: Power4.easeOut})
          //     }
          //   }
          // })

          document.body.addEventListener(
              'pointerdown', (event) => {
                //event.preventDefault()
                that.isDragging = false
                document.body.style.cursor = 'grabbing'
                thatt.isDown = true
                if(window.innerWidth < 950) {
                  thatt.start = event.touches ? event.touches[0].clientX : event.clientX
                } else if(window.innerWidth >=950) {
                   thatt.start = event.touches ? event.touches[0].clientY : event.clientY
                }
              });

          
          var ratio = 0.05
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            ratio = 0.08
          }
        
          document.body.addEventListener(
              'pointermove', (event) => {
                 event.preventDefault()
                that.isDragging = true
                 document.body.style.cursor = 'grabbing'
            //      document.getElementsByClassName('club-thumbnail-img')[0].src = '/img/gradient.c12db305.jpg'
            // document.getElementsByClassName('club-thumbnail-small-img')[0].src = '/img/gradient.c12db305.jpg'
                if (!thatt.isDown) return
                if(window.innerWidth < 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var x = event.touches ? event.touches[0].clientX : event.clientX
                  var distance = (thatt.start - x) * ratio
                  distance = - distance
                   if( thatt.showCaseMesh.children[0].position.x + distance < -(thatt.boundary) || thatt.showCaseMesh.children[thatt.showCaseMesh.children.length - 1].position.x + distance > thatt.boundary) {
                    console.log('bounded')
                  } else {
                    for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                      gsap.to( thatt.showCaseMesh.children[i].position, {x: thatt.showCaseMesh.children[i].position.x + distance, y:  Math.cos((thatt.showCaseMesh.children[i].position.x /  thatt.widthTotal) * Math.PI / 2) * 100 - 100, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                      }})
                      gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.x, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                    }
                  }
                } else if(window.innerWidth >= 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var y = event.touches ? event.touches[0].clientY : event.clientY
                  //console.log(y)
                  var distance = (thatt.start - y) * 0.03
                  //console.log(distance)
                  //distance = - distance
                  if( thatt.showCaseMesh.children[0].position.y + distance > (thatt.boundary) || thatt.showCaseMesh.children[thatt.showCaseMesh.children.length - 1].position.x + distance < -(thatt.boundary)) {
                    console.log('bounded')
                  } else {
                    for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                      gsap.to( thatt.showCaseMesh.children[i].position, {x: Math.cos((thatt.showCaseMesh.children[i].position.y /  thatt.widthTotal) * Math.PI / 2) * 100 - 100 - (window.innerWidth/70), y: thatt.showCaseMesh.children[i].position.y + distance, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                      }})
                      gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.y, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                    }
                  }
                }
              });
        
          document.body.addEventListener(
              'pointerup', (event) => {
                 //event.preventDefault()
                  document.body.style.cursor = 'grab'
                thatt.isDown = false
                if(window.innerWidth < 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                var return_mesh_index = 0
                  var min_distance = Math.abs(0 - thatt.showCaseMesh.children[0].position.x)
                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - thatt.showCaseMesh.children[i].position.x)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  thatt.target_index = return_mesh_index

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})


                  document.getElementsByClassName('index_title')[0].innerHTML = thatt.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    gsap.to( thatt.showCaseMesh.children[i].position, {x: thatt.showCaseMesh.children[i].position.x + (0 - thatt.showCaseMesh.children[return_mesh_index].position.x), y:  Math.cos((thatt.showCaseMesh.children[i].position.x /  thatt.widthTotal) * Math.PI) * 100 - 100, duration: 1.2, ease: Power4.easeOut})
                    gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.x, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                } else if (window.innerWidth >= 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var return_mesh_index = 0
                  var min_distance = Math.abs(0 - thatt.showCaseMesh.children[0].position.y)
                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - thatt.showCaseMesh.children[i].position.y)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})


                  document.getElementsByClassName('index_title')[0].innerHTML = thatt.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    gsap.to( thatt.showCaseMesh.children[i].position, {x: Math.cos((thatt.showCaseMesh.children[i].position.y /  thatt.widthTotal) * Math.PI) * 100 - 100 - (window.innerWidth/70), y:  thatt.showCaseMesh.children[i].position.y + (0 - thatt.showCaseMesh.children[return_mesh_index].position.y), duration: 1.2, ease: Power4.easeOut})
                    gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.y, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }
                console.log(that.isDragging ? 'drag' : 'click')
              });

               document.body.addEventListener(
              'touchstart', (event) => {
                //event.preventDefault()
                that.isDragging = false
                thatt.isDown = true
                if(window.innerWidth < 950) {
                  thatt.start = event.touches ? event.touches[0].clientX : event.clientX
                } else if(window.innerWidth >=950) {
                   thatt.start = event.touches ? event.touches[0].clientY : event.clientY
                }
              });

          
          var ratio = 0.05
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            ratio = 0.08
          }
        
          document.body.addEventListener(
              'touchmove', (event) => {
                 //event.preventDefault()
                that.isDragging = true
                 document.body.style.cursor = 'grabbing'
                if (!thatt.isDown) return
                if(window.innerWidth < 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var x = event.touches ? event.touches[0].clientX : event.clientX
                  var distance = (thatt.start - x) * ratio
                  distance = - distance
                   if( thatt.showCaseMesh.children[0].position.x + distance < -(thatt.boundary) || thatt.showCaseMesh.children[thatt.showCaseMesh.children.length - 1].position.x + distance > thatt.boundary) {
                    //console.log('bounded')
                  } else {
                    for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                      gsap.to( thatt.showCaseMesh.children[i].position, {x: thatt.showCaseMesh.children[i].position.x + distance, y:  Math.cos((thatt.showCaseMesh.children[i].position.x /  thatt.widthTotal) * Math.PI / 2) * 100 - 100, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                      }})
                      gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.x, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                    }
                  }
                } else if(window.innerWidth >= 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var y = event.touches ? event.touches[0].clientY : event.clientY
                  //console.log(y)
                  var distance = (thatt.start - y) * 0.03
                  //console.log(distance)
                  //distance = - distance
                  if( thatt.showCaseMesh.children[0].position.y + distance > (thatt.boundary) || thatt.showCaseMesh.children[thatt.showCaseMesh.children.length - 1].position.x + distance < -(thatt.boundary)) {
                    //console.log('bounded')
                  } else {
                    for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                      gsap.to( thatt.showCaseMesh.children[i].position, {x: Math.cos((thatt.showCaseMesh.children[i].position.y /  thatt.widthTotal) * Math.PI / 2) * 100 - 100 - (window.innerWidth/70), y: thatt.showCaseMesh.children[i].position.y + distance, duration: 1.2, ease: Power4.easeOut, onUpdate: function() {
                      }})
                      gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.y, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                    }
                  }
                }
              });
        
          document.body.addEventListener(
              'touchend', (event) => {
                 //event.preventDefault()
                thatt.isDown = false
                if(window.innerWidth < 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                var return_mesh_index = 0
                  var min_distance = Math.abs(0 - thatt.showCaseMesh.children[0].position.x)
                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - thatt.showCaseMesh.children[i].position.x)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  thatt.target_index = return_mesh_index

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})


                  document.getElementsByClassName('index_title')[0].innerHTML = thatt.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    gsap.to( thatt.showCaseMesh.children[i].position, {x: thatt.showCaseMesh.children[i].position.x + (0 - thatt.showCaseMesh.children[return_mesh_index].position.x), y:  Math.cos((thatt.showCaseMesh.children[i].position.x /  thatt.widthTotal) * Math.PI) * 100 - 100, duration: 1.2, ease: Power4.easeOut})
                    gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.x, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                } else if (window.innerWidth >= 950 && that.hasViewClub == true && that.hasScroll == true && that.isViewingClub == false) {
                  var return_mesh_index = 0
                  var min_distance = Math.abs(0 - thatt.showCaseMesh.children[0].position.y)
                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    var dist = Math.abs(0 - thatt.showCaseMesh.children[i].position.y)
                    if(dist < min_distance) {
                      min_distance = dist
                      return_mesh_index = i
                    }
                  }

                  thatt.target_index = return_mesh_index

                  if(return_mesh_index==0) {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.image_url
                  } else {
                    that.thumbnailTitle = thatt.showCaseMesh.children[return_mesh_index].index_title.replace(/<br>/g, ' ')
                    that.thumbnailSRC = thatt.showCaseMesh.children[return_mesh_index].group_data.activities[return_mesh_index-1].image_urls[0]
                  }

                  gsap.to('.index_title', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail', {opacity: 1, duration: 0.5, ease: Power4.easeOut})
                  gsap.to('.club-thumbnail-small', {opacity: 1, duration: 0.5, ease: Power4.easeOut})


                  document.getElementsByClassName('index_title')[0].innerHTML = thatt.showCaseMesh.children[return_mesh_index].index_title

                  for(var i = 0; i < thatt.showCaseMesh.children.length; i++) {
                    gsap.to( thatt.showCaseMesh.children[i].position, {x: Math.cos((thatt.showCaseMesh.children[i].position.y /  thatt.widthTotal) * Math.PI) * 100 - 100 - (window.innerWidth/70), y:  thatt.showCaseMesh.children[i].position.y + (0 - thatt.showCaseMesh.children[return_mesh_index].position.y), duration: 1.2, ease: Power4.easeOut})
                    gsap.to(thatt.showCaseMesh.children[i].rotation, {z: -map(thatt.showCaseMesh.children[i].position.y, - thatt.widthTotal,  thatt.widthTotal, Math.PI, -Math.PI ), duration: 1.2, ease: Power4.easeOut})
                  }
                }
               // console.log(that.isDragging ? 'drag' : 'click')
              });
          }
          flipY( geometry ) {
            const uv = geometry.attributes.uv;
            for ( let i = 0; i < uv.count; i ++ ) {
              uv.setY( i, 1 - uv.getY( i ) );
            }
            return geometry;
          }
          createCenter() {
            this.basisLoader = new BasisTextureLoader()
            this.basisLoader.detectSupport( this.renderer )
            var thatttt = this
            var promiseArray_2 = []
            promiseArray_2.push( new Promise( function (resolve, reject) {
              thatttt.basisLoader.load('https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/rsz_2aa.basis?alt=media&token=d0f64870-9230-4a66-90e5-8fcb523440a6', function(texture) {
                resolve(texture)
                //console.log(1)
              })
            }))


            this.labels_center = []

            Promise.all(promiseArray_2).then( textures => {
              this.plane_center = this.flipY(new THREE.PlaneBufferGeometry( 15 + 2, 15 + 3))
              // if(textures[0].image.width > textures[0].image.height) {
              //   this.plane_center = this.flipY(new THREE.PlaneBufferGeometry( 15 + 5, 15 + 5))
              // }
              textures[0].wrapS = textures[0].wrapT = THREE.RepeatWrapping;
              this.material_center = new THREE.MeshBasicMaterial({
                map: textures[0],
                transparent: false,
                opacity: 1,
                depthTest: false,
              })
              this.mesh_center = new THREE.Mesh(this.plane_center, this.material_center)
              this.mesh_center.scale.x = 0
              this.mesh_center.scale.y = 0
              this.mesh_center.target_scale_x = textures[0].image.width / 200
              this.mesh_center.target_scale_y = textures[0].image.height / 200
              this.mesh_center.position.set(0,0,0)
              this.mesh_center.tag = 'club_fair'
              var text = this.createText()
              text.setHTML('Club Fair 2021 & Ams Advisor')
              text.setParent(this.mesh_center)
              this.labels_center.push(text)
              document.getElementsByClassName('scene')[0].appendChild(text.element)
              this.scene.add(this.mesh_center)
            })
          }
          createText() {
            var div = document.createElement('div');
            div.className = 'text-label-center';
            div.style.position = 'absolute';
            div.style.width = 100;
            div.style.height = 100;
            div.style.fontSize = '1.2rem'
            div.innerHTML = "hi there!";
            div.style.top = 0;
            div.style.left = 0;
            div.style.opacity = 0
            div.style.pointerEvents = "none"
            div.style.whiteSpace = "nowrap"
            var _this = this;
            
            return {
              element: div,
              parent: false,
              position: new THREE.Vector3(0,0,0),
              setHTML: function(html) {
                this.element.innerHTML = html;
              },
              setParent: function(threejsobj) {
                this.parent = threejsobj;
                this.parent.text = div
              },
              updatePosition: function() {
                if(parent) {
                  this.position.copy(this.parent.position);
                  //console.log(this.parent)
                  this.position.x -= 43
                  this.position.y += 30
                } else {

                }
                
                var coords2d = this.get2DCoords(this.position, _this.camera);
                this.element.style.left = coords2d.x + 'px';
                this.element.style.top = coords2d.y + 'px';
                this.element.style.transform = `scale(${150/_this.camera.position.z})`
                this.element.style.transformOrigin = 'left top'
                //this.element.style.scale = _this.webgl.camera.position.z / 100
              },
              get2DCoords: function(position, camera) {
                var vector = position.project(camera);
                vector.x = (vector.x + 1)/2 * window.innerWidth;
                vector.y = -(vector.y - 1)/2 * window.innerHeight;
                return vector;
              }
            }
          }
          renderText() {
            // console.log(this.labels_center.length)
            // for(var i = 0; i <   this.labels_center.length; i++) {
            //   this.labels_center[i].updatePosition();
            // }
            if( this.labels_center[0]!= undefined) {
              this.labels_center[0].updatePosition();
            }
          }
        render(){
          if(that.hasEnter) {
            this.controls.update()
          }
          this.renderer.render(this.scene, this.camera)
          this.rotateCards(this.cards.art, 0.004)
          this.rotateCards(this.cards.academic, 0.003)
          this.rotateCards(this.cards.social, 0.0025)
          this.rotateCards(this.cards.sports, 0.002)
          this.cards.art.renderText()
          this.cards.academic.renderText()
          this.cards.social.renderText()
          this.cards.sports.renderText()
          this.renderText()
          requestAnimationFrame(this.render.bind(this))
        }
      }

      class Cards {
        constructor(webgl, image_radius, wheel_radius, image_link, target_wheel_center, target_wheel_radius, data) {
          this.webgl = webgl
          this.image_radius = image_radius
          this.wheel_radius = wheel_radius
          this.image_number = image_link.length
          this.radian_interval = (2 * Math.PI) /  this.image_number
          this.wheel_center = { x: 0, y: 0}
          this.image_link = image_link
          this.target_wheel_center = target_wheel_center
          this.target_wheel_radius = target_wheel_radius
          this.data = data
          this.tl = gsap.timeline()
          this.init()
        }
        flipY( geometry ) {
          const uv = geometry.attributes.uv;
          for ( let i = 0; i < uv.count; i ++ ) {
            uv.setY( i, 1 - uv.getY( i ) );
          }
          return geometry;
        }
        async init() {
          this.group_cards = new THREE.Group()
          this.materials = []
          this.group_2_cards = new THREE.Group()
          this.group_3_cards = new THREE.Group()
          this.grouping = []
          this.materials2 = []
          this.textlabels = []
          this.loadManager = new THREE.LoadingManager()
          this.basisLoadManager = new THREE.LoadingManager()
          this.loader = new THREE.TextureLoader(this.loadManager)
          this.basisLoader = new BasisTextureLoader(this.basisLoadManager)
          this.loader.setCrossOrigin('')
          this.basisLoader.detectSupport( this.webgl.renderer );
          this.ImageScaleRatio = 700
          var that1 = this
          this.indx = 0
          for(var i = 0; i < this.image_number; i++) {
            this.materials.push(this.image_link[i])
          }

          for(var i = 0; i < this.image_number; i++) {
            var material_data = {
              lis: [],
            }
            //console.log(this.image_number)
            //console.log(this.data[i])
            for(var j = 0; j < this.data[i].activities.length; j++) {
              material_data.lis.push(this.data[i].activities[j].basis_urls[0]) // normalize
              //console.log(material_data.lis)
              material_data.group_data = this.data[i]
            }
            this.materials2.push(material_data)
            //console.log(material_data)
          }

          var promiseArray = []

          this.materials.forEach((item, i) => {
            
            promiseArray.push( new Promise( function (resolve, reject) {
              that1.loader.load(item,
              function(texture) {
                //console.log('inner - ' + i)
                resolve(texture)
              })
            }).then(res => {
                that.loadingProgress +=1
                //console.log(that.loadingProgress)
                that.loadingClubs = Math.round(((that.loadingProgress/174)*100)/100*41)
                if(Math.round(((that.loadingProgress/174)*100)/100*41) > 39) {
                  gsap.to('.loading-screen',{ opacity: 0,duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                    that.hasLoaded = true
                  }})
                  // setTimeout(function() {
                  //   //console.log('its')
                  //   that.hasLoaded = true
                  // }, 1500)
                }
                //console.log(Math.round(((that.loadingProgress/160)*100)/100*40))
                //console.log(that.loadingProgress)
                return res
            }))
          })

          var promiseArray_1 = []

          var chunks = []
          this.materials2.forEach((group, i) => {
            chunks.push(group.lis.length)
            group.lis.forEach((item,j) => {
              promiseArray_1.push( new Promise( function (resolve, reject) {               
                that1.basisLoader.load(item,
                function( texture ) {
                  //console.log(item)
                   //console.log(group.lis[j])
                resolve(texture)
                })
              }).then(res => {
                that.loadingProgress +=1
                //console.log(that.loadingProgress)
                //console.log(texture)
                that.loadingClubs = Math.round(((that.loadingProgress/174)*100)/100*41)
                if(Math.round(((that.loadingProgress/174)*100)/100*41) > 39) {

                  gsap.to('.loading-screen',{ opacity: 0,duration: 1.5, ease: Power4.easeOut, onComplete: function() {
                    that.hasLoaded = true
                  }})
                  // setTimeout(function() {
                  //   //console.log('its1')
                  //   that.hasLoaded = true
                  // }, 1500)
                }
                //console.log(Math.round(((that.loadingProgress/160)*100)/100*40))
                //console.log(that.loadingProgress)
                return res
              }).catch(error => [
                console.log(group.lis[j])
              ]))
            })
          })


          // function allProgress(proms, progress_cb) {
          //   let d = 0;
          //   function progress_cb(target) {
          //     console.log(target)
          //   }
          //   progress_cb(0);
          //   for (const p of proms) {
          //     p.then((texture)=> {    
          //       d ++;
          //       console.log(texture)
          //       progress_cb( (d * 100) / proms.length );
          //     });
          //   }
          //   return Promise.all(proms);
          // }

          // allProgress(promiseArray_1), (p) => {
          //   console.log('Progress-1' + p)
          // }

          // allProgress(promiseArray), (p) => {
          //   onsole.log('Progress-2' + p)
          // }
          Promise.all( promiseArray_1).then(textures => {
            console.log(textures)
            for( var i = 0; i < textures.length; i++ ) {
                this.plane1 = this.flipY(new THREE.PlaneBufferGeometry( this.image_radius, this.image_radius ))
              //   if(textures[i].image.width > textures[i].image.height) {
              //   this.plane1 = this.flipY(new THREE.PlaneBufferGeometry( this.image_radius + 3, this.image_radius + 3))
              // }
              //   if(textures[i].image.width > textures[i].image.height) {
              //      //this.plane1 = this.flipY(new THREE.PlaneBufferGeometry( this.image_radius+2, this.image_radius+2))
              //   }
                textures[i].wrapS = textures[i].wrapT = THREE.RepeatWrapping;
                textures[i].magFilter = THREE.NearestFilter;
	              textures[i].minFilter = THREE.NearestFilter;
                console.log('1')
                this.material1 = new THREE.MeshBasicMaterial({
                  map: textures[i],
                  transparent: false,
                  opacity: 1,
                  depthTest: false,
                })
                this.mesh1 = new THREE.Mesh(this.plane1, this.material1)
                this.mesh1.scale.x = 0
                this.mesh1.scale.y = 0
                this.mesh1.target_scale_x = textures[i].image.width / this.ImageScaleRatio
                this.mesh1.target_scale_y = textures[i].image.height / this.ImageScaleRatio

                if(textures[i].image.width > textures[i].image.height || textures[i].image.width < textures[i].image.height) {
                  this.mesh1.target_scale_x = textures[i].image.width / (this.ImageScaleRatio -200)
                  this.mesh1.target_scale_y = textures[i].image.height / (this.ImageScaleRatio - 200)
              }

                this.mesh1.tag = ''

                this.material1.needsUpdate = true
                this.mesh1.position.set(0,0,0)
                this.group_2_cards.add(this.mesh1)
            }
            this.group_2_cards.tag = ''

            //this.webgl.scene.add(this.group_2_cards)
            var curr = 0
            for(var i = 0; i < chunks.length; i++) {
              this.grouping.push(this.group_2_cards.children.slice(curr, curr + chunks[i]))
              curr = curr + chunks[i]
            }

            Promise.all( promiseArray).then(textures =>  {
              for(var i = 0; i < textures.length; i++) {
                var group = new THREE.Group()
                group.position.set(0,0,0)
                this.plane = new THREE.PlaneBufferGeometry(this.image_radius + 6, this.image_radius + 6)
                this.material = new THREE.MeshBasicMaterial({
                  map: textures[i],
                  transparent: false,
                  opacity: 1,
                  depthTest: false,
                })
                this.mesh = new THREE.Mesh(this.plane, this.material)
                //this.mesh.material.side = THREE.DoubleSide
                //console.log(this.materials2.length)
                //console.log(this.materials2[i])
                this.mesh.group_data = this.materials2[i].group_data //normalize
                this.mesh.index_title = 'Giới<br>thiệu chung'
                group.group_data = this.materials2[i].group_data //normalize
                group.group_index = i
                this.mesh.tag = ''
                group.add(this.mesh)
                group.tag = ''
                var text = this.createText()
                // if(group.group_data.title != undefined) {
                //    text.setHTML(group.group_data.title)
                // } else {

                this.materials2[i].group_data.title = this.materials2[i].group_data.title.replace('&#38;', '&')
                //console.log( this.materials2[i].group_data.title)
                text.setHTML(this.materials2[i].group_data.title)
                
                // }
                text.setParent(group)
                this.textlabels.push(text)
                document.getElementsByClassName('scene')[0].appendChild(text.element)
                for(var j = 0; j < this.grouping[i].length; j++) {
                  //this.mesh.children.push(this.grouping[i][j])
                  //this.mesh.add(this.grouping[i][j])
                  this.grouping[i][j].group_data = this.materials2[i].group_data //normalize
                  this.grouping[i][j].index_title = this.materials2[i].group_data.activities[j].title //normalize
                  group.add(this.grouping[i][j])
                }
                //this.group_cards.add(this.mesh)
                this.group_3_cards.add(group)
                this.group_3_cards.tag = ''

              }
              this.plane = new THREE.PlaneBufferGeometry(this.image_radius + 6, this.image_radius + 6)
              this.material = new THREE.MeshBasicMaterial({
                map: textures[i],
                transparent: false,
                opacity: 1,
                depthTest: false,
              })
              this.webgl.scene.add(this.group_3_cards)
              this.animateFromCenterToCircle(this)
              this.animateGrouping(this)
            })
          })
        }
        animateFromCenterToCircle(target) {
          // var tl = gsap.timeline()
          // for(var i = 0; i < target.group_cards.children.length; i++) {
          //   tl.fromTo(target.group_cards.children[i].position, {x:target.group_cards.children[i].position.x, y:target.group_cards.children[i].position.y}, {x: target.wheel_center.x + Math.cos(target.radian_interval * i) * target.wheel_radius, y: target.wheel_center.y + Math.sin(target.radian_interval * i) * target.wheel_radius, duration: 2, ease: Back.easeOut.config(2)}, 0)
          // }
          var tl = gsap.timeline()
          for(var i = 0; i < target.group_3_cards.children.length; i++) {
            tl.to(target.group_3_cards.children[i].position, {x: target.wheel_center.x + Math.cos(target.radian_interval * i) * target.wheel_radius, y: target.wheel_center.y + Math.sin(target.radian_interval * i) * target.wheel_radius, duration: 2, ease: Back.easeOut.config(2)}, 0)
          }
        }
        animateFromCenterToCluster(target) {
          var tl = gsap.timeline()
          target.group_3_cards.rotation.z = 0
          for(var i = 0; i < target.group_3_cards.children.length; i++) {
            //console.log(target.textlabels[i].element.style)
            gsap.to(target.textlabels[i].element.style, {opacity: 1, duration: 1.5, ease: Power4.easeOut})
            target.group_3_cards.children[i].rotation.z = 0
            tl.fromTo(target.group_3_cards.children[i].position, {x:target.group_3_cards.children[i].position.x, y:target.group_3_cards.children[i].position.y, z:target.group_3_cards.children[i].position.z}, {x: target.target_wheel_center.x +  Math.cos(target.radian_interval * i) * 1.5 * target.target_wheel_radius, y: target.target_wheel_center.y + Math.sin(target.radian_interval * i) * target.target_wheel_radius , z: target.target_wheel_center.z, duration: 2, ease: Power4.easeOut, onComplete: function() {
            }}, 0)
            // for(var j = 1; j < target.group_3_cards.children[i].children.length; j++) {
            //   gsap.to(target.group_3_cards.children[i].children[j].scale, { x: target.group_3_cards.children[i].children[j].target_scale_x, y: target.group_3_cards.children[i].children[j].target_scale_y, duration: 1.5, ease: Power4.easeOut})
            // }
            if(target.group_3_cards.children[i].children.length  == 1) {
              // gsap.to(target.group_3_cards.children[i].children[j].scale, { x: target.group_3_cards.children[i].children[j].target_scale_x, y: target.group_3_cards.children[i].children[j].target_scale_y, duration: 1.5, ease: Power4.easeOut})
            } else if(target.group_3_cards.children[i].children.length  == 2) {
              gsap.to(target.group_3_cards.children[i].children[1].scale, { x: target.group_3_cards.children[i].children[1].target_scale_x, y: target.group_3_cards.children[i].children[1].target_scale_y, duration: 1.5, ease: Power4.easeOut})
            } else {
              gsap.to(target.group_3_cards.children[i].children[1].scale, { x: target.group_3_cards.children[i].children[1].target_scale_x, y: target.group_3_cards.children[i].children[1].target_scale_y, duration: 1.5, ease: Power4.easeOut})
              gsap.to(target.group_3_cards.children[i].children[2].scale, { x: target.group_3_cards.children[i].children[2].target_scale_x, y: target.group_3_cards.children[i].children[2].target_scale_y, duration: 1.5, ease: Power4.easeOut})
            }
          }
        }
        animateGrouping(target) {
          for(var i = 0; i < target.group_3_cards.children.length; i++) {
            target.group_3_cards.children[i].children[0].cluster_pos = new THREE.Vector3(target.group_3_cards.children[i].children[0].position.x, target.group_3_cards.children[i].children[0].position.y, target.group_3_cards.children[i].children[0].position.z)
            for(var j = 1; j < target.group_3_cards.children[i].children.length; j++) {
              if(j==1 && i <= Math.round(target.group_3_cards.children.length / 2)) {
                target.group_3_cards.children[i].children[j].position.x += 10
                target.group_3_cards.children[i].children[j].position.y -= 7
                target.group_3_cards.children[i].textAlign = 'left'
              } else if (j==2  && i <= Math.round(target.group_3_cards.children.length / 2)) {
                target.group_3_cards.children[i].children[j].position.x -= 10
                target.group_3_cards.children[i].children[j].position.y += 7
                target.group_3_cards.children[i].textAlign = 'right'
              } else if ( j==1 && i > Math.round(target.group_3_cards.children.length / 2)) {
                target.group_3_cards.children[i].children[j].position.x -= 10
                target.group_3_cards.children[i].children[j].position.y += 7
                target.group_3_cards.children[i].textAlign = 'right'
              } else if(j==2  && i > Math.round(target.group_3_cards.children.length / 2)) {
                target.group_3_cards.children[i].children[j].position.x += 10
                target.group_3_cards.children[i].children[j].position.y -= 7
                target.group_3_cards.children[i].textAlign = 'left'
              }
              target.group_3_cards.children[i].children[j].cluster_pos = new THREE.Vector3(target.group_3_cards.children[i].children[j].position.x, target.group_3_cards.children[i].children[j].position.y, target.group_3_cards.children[i].children[j].position.z)
            }
          }
        }
        createText() {
          var div = document.createElement('div');
          div.className = 'text-label';
          div.style.position = 'absolute';
          div.style.width = 100;
          div.style.height = 100;
          div.innerHTML = "hi there!";
          div.style.top = 0;
          div.style.left = 0;
          div.style.opacity = 0
          div.style.pointerEvents = "none"
          div.style.whiteSpace = "nowrap"
          var _this = this;
          
          return {
            element: div,
            parent: false,
            position: new THREE.Vector3(0,0,0),
            setHTML: function(html) {
              this.element.innerHTML = html;
            },
            setParent: function(threejsobj) {
              this.parent = threejsobj;
              this.parent.text = div
            },
            updatePosition: function() {
              if(parent && parent.tag != 'club_fair') {
                this.position.copy(this.parent.position);
                //console.log(this.parent)
                this.position.x -= 21
                this.position.y -= 21
              } else {

              }
              
              var coords2d = this.get2DCoords(this.position, _this.webgl.camera);
              this.element.style.left = coords2d.x + 'px';
              this.element.style.top = coords2d.y + 'px';
              this.element.style.transform = `scale(${150/_this.webgl.camera.position.z})`
              this.element.style.transformOrigin = 'left top'
              //this.element.style.scale = _this.webgl.camera.position.z / 100
            },
            get2DCoords: function(position, camera) {
              var vector = position.project(camera);
              vector.x = (vector.x + 1)/2 * window.innerWidth;
              vector.y = -(vector.y - 1)/2 * window.innerHeight;
              return vector;
            }
          }
        }
        renderText() {
          for(var i = 0; i < this.textlabels.length; i++) {
            this.textlabels[i].updatePosition();
          }
        }
      }

      var webgl = new Webgl();
      //webgl.exitShowCaseClub()
      window.onresize = () => {
           webgl.resize()
      }

      //console.log(webgl.scene)

    }
  },
  beforeCreate() {
    //localStorage.clear()
    this.$store.commit('initializeStore')
    this.hasLogin = this.$store.state.hasAuthenticated
    //console.log(this.$store.state.hasAuthenticated)
  },
  mounted() {
    this.initialize()
  }
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400&family=DM+Mono&family=DM+Sans&family=DM+Serif+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');


@font-face {
    font-family: Athene;
    src: url(~@/assets/Athene.otf);
}

html, body {
  color: white ;
  // background:  rgb(207, 202, 197);
  //background-image: #0a047a;;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/trangchuweb.png?alt=media&token=54ff3ca3-ec02-439d-8ba6-e145f59b09b9');
  //background-image: url('https://media.discordapp.net/attachments/881102635258765344/886476853001457775/unknown.png?width=823&height=549') ;
    background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: 'Be Vietnam', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#app {
  font-family: 'Be Vietnam', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.left-header {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 1rem;
  padding-left: 1.5rem;
  font-size: 1rem;
  text-align: left;
  z-index: 1000;
}

.right-header {
  position: fixed;
  top: 0;
  right: 1%;
  padding-top: 0rem;
  //padding-right: 1rem;
  z-index: 1000;
  cursor: pointer;
  svg {
    width: 4rem;
    fill: white;
  }
}

.center-title {
  position: fixed;
  left:50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.5rem;
  // width: 40vw;
  //padding: 3rem;
  z-index: 1000;
  cursor: pointer;

  span {
    font-size: 2.5rem;
  }
  

  // .right {
  //   text-align: right;
  // }

  // .left {
  //   text-align: left;
  // }
}

.center-title-small {
  position: fixed;
  left:50%;
  top: 80%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  z-index: 1000;
  cursor: pointer;
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(4,3,3);
  z-index: 9999;
  display: flex;
  justify-content: center;

  .noise-overlay-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    opacity: 0.4;
    background-image: url('https://assets-global.website-files.com/60d28377885e0106c1158a35/60faf96692616d7217c80fe9_noise-transparent-intense.png');
  }

  .loading-screen-title {
    color: white;
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    z-index: 100001;
  }

  .loading-screen-graphics {
    background: #0028ff;
    filter: blur(5px);
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
  }
}

.cursor {
  position: absolute;
  width: 0rem;
  height: 0rem;
  border-radius: 50%;
  background: #ffdb13;
  z-index: 1000;
  transform: rotate(-45deg);
  transition: width 0.5s ease, height 0.5s ease;

  #read-more {
    fill: #0053d6;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.login-btn {
  position: absolute;
  border-radius: 50%;
  background: #ffdb13;
  z-index: 1000;
  width: 3rem;
  height: 3rem;
  right: 5%;
  cursor: pointer;
  transition: all 0.5s ease;

  #read-more {
    fill: #0053d6;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
  }
}

.login-btn:hover {
   background: #0053d6;
   transform: rotate(-45deg);

  #read-more {
    fill: #ffdb13;
  }
}

.login-error {
  color: red;
  font-size: 0.9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.loading-btn {
  position: absolute;
  z-index: 1000;
  width: 1.5rem;
  height: 1.5rem;
  left: 6%;
  border-radius: 50%;
  background: #e1144b;
}

.namespace  {
  z-index: 1001;
  opacity: 0;
}

.widget {
  position: fixed;
  width: 100vw;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 0.7rem;
  background: black;
  color: white;
  bottom: 0;
  left: 0;
}

.return-to-home {
  padding-top:  1rem;
  cursor: pointer;
  z-index: 1000;
  svg {
    fill: black;
    z-index: 1000;
  }
  span {
    padding-left: 0.5rem;
  }
}

.scene {
  width: 100%;
  //height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.index_title {
  font-size: 2.5rem;
  position: fixed;
  top: 50%;
  left: 30%;
  z-index: 1000;
  text-align: left;
  opacity: 0;
  cursor: pointer;
  // pointer-events: none;
  // -webkit-touch-callout: none; /* iOS Safari */
  // -webkit-user-select: none; /* Safari */
  //   -khtml-user-select: none; /* Konqueror HTML */
  //     -moz-user-select: none; /* Old versions of Firefox */
  //     -ms-user-select: none; /* Internet Explorer/Edge */
  //         user-select: none; /* Non-prefixed version, currently
  //                               supported by Chrome, Edge, Opera and Firefox */
}

.club-thumbnail {
  position: fixed;
  text-align: left;
  top: 23%;
  width: 80%;
  z-index: 1000;
  justify-content: center;
  cursor: pointer;
  img {
    max-height: 400px;
    max-width: 100%;
    padding-bottom: 1rem;
    position: relative;
    left: 55%;
  }
  .club-thumbnail-title {
    position: relative;
    font-size: 2rem;
    left: 55%;
  }

  .club-thumbnail-name {
    position: relative;
    left: 55%;
    font-size: 1rem;
  }

  .view-btn {
    position: relative;
    font-size: 1.2rem;
    left: 55%;
  }

  .view-btn svg {
    width: 1.5rem;
    margin-left: 0.2rem
  }
}

img[lazy='loaded'] {
  opacity: 0;
  animation-name: fadein;
  animation-duration: .2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

.noise-overlay {
  background-image: url('https://assets-global.website-files.com/60d28377885e0106c1158a35/60faf96692616d7217c80fe9_noise-transparent-intense.png');
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: fixed;
  top: 0;
  left:0;
  opacity: 0.3;
}

.club_info {
  width: 100vw;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 1001;
  text-align: left;
  overflow-y:scroll;
  overflow-x:hidden;
  height: 100%;
  background: #efeeea;
  color: #0a047a;
  padding-bottom: 8rem;
  //padding: 0 !important;
  // background-image: url('https://assets-global.website-files.com/60d28377885e0106c1158a35/60faf96692616d7217c80fe9_noise-transparent-intense.png');
  // background-color: rgba(0, 0, 0, .5);

  .club_info_first_sec {
    background: #efeeea;
    color: #0a047a;
  }

  .header {
    padding-top: 1rem;
    padding-left: 0.5rem;
    font-size: 1rem;
    padding-bottom: 2rem;
  }
  .club_info_title {
    font-size: 4rem;
    width: 80%;
    padding-bottom: 3rem;
  }

  .club_info_img {
    text-align: center;
    align-self: center;
    // padding-left: 0rem;
    padding-bottom: 1rem;
    img {
      max-width: 80%;
    }
  }

  .club_info_detail {
    padding-top: 1rem;
    .club_info_type_title {
      font-weight: 500;
      padding-bottom: 0.1rem;
      //font-size: 1.1rem;
      font-weight: bold;
    }


    .club_info_type {
      padding-bottom: 2rem;
    }
  }

  .club_info_first_sec {
    padding-bottom: 8rem;
  }

  .type_lower {
    font-weight: bold;
  }

  .type-lower-row {
    padding-top: 3rem;
    text-align: center;
    a {
      color: #0a047a;
      text-decoration: underline;
      text-decoration-color: #0a047a;
    }
  }

  .activities_title {
    font-size: 5rem;
    text-align: left;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 3%;
    width: 94%;
    border-bottom: 1px solid #0a047a;
    
  }

  .activity-title {
    font-size: 3rem;
    padding-bottom: 1rem;
    padding-top: 1.5rem;
    padding-left: 3%;
  }

  .activity-desc {
    font-size: 1.2rem;
    padding-bottom: 2rem;
    padding-left: 3%;
  }

  .activity-img {
    padding-bottom: 4rem;
    align-self: center;
    max-width: 100%;
    padding-left: 3%;
    padding-right: 3%;
    img {
    max-height: 500px;
    }
  }

  .return-to-showcase {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    cursor: pointer;
    span {
      margin-left: 0.5rem;
    }
  }

  .buttons {
    position: fixed; 
    bottom: 2%;
    left: 2%;
    //transform: translate(-50%, -50%);
    z-index: 1005;
    cursor: pointer;

    .like-button {
      padding-right: 1rem;
      background: #0a047a;
      margin-bottom: 1rem;
      //padding: 1rem;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      position: relative;
      transition: all 0.5s ease;
      // width: 3rem;
      // height: 3rem;
      svg {
        transition: all 0.5s ease;
      }
    }

    .like-button:hover {
      background: #ffe6f0;

      .svg-icon path, .svg-icon polygon, .svg-icon rect {
        fill: red;
      }
    }

    .dislike-button {
      padding-left: 1rem;
      background: #0a047a;
      margin-bottom: 1rem;
      //padding: 1rem;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      position: relative;
      transition: all 0.5s ease;

      svg {
        transition: all 0.5s ease;
      }
    }

    .dislike-button:hover {
      background: #ffe6f0;

      .svg-icon path, .svg-icon polygon, .svg-icon rect {
        fill: red;
      }
    }

    .svg-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
  }
  //background-image: url('https://assets-global.website-files.com/60d28377885e0106c1158a35/60faf96692616d7217c80fe9_noise-transparent-intense.png');
}

.return-to-main {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    cursor: pointer;
    text-align: left;
    span {
      margin-left: 0.5rem;
    }
  }

@media screen and (max-width: 950px) {
  .index_title {
    font-size: 1.2rem;
  }

  .club-thumbnail-small {
    position: fixed;
    bottom: 2%;
    left:0;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    z-index: 1000;
    cursor: pointer;

    .small-img {
      max-height: 200px;
    }

    .club-thumbnail-small-name {
      font-size: 0.9rem;
    }

    .club-thumbnail-small-title {
      font-size: 1.2rem;
    }

    .view-small-btn {
      font-size: 0.9rem;
    }

    .view-small-btn svg {
      width: 1.5rem;
      margin-left: 0.2rem
    }
  }

  .club_info_img {
    text-align: center !important;
    padding-right: 0;
    img {
      max-width: 100%;
    }
  }

  .my-favorites {
    bottom: 2.5% !important;
  }

  .my-favorties-list-title {
    padding-left: 2rem !important;
  }
}

@media screen and (max-width: 576px) {
  .my-favorites {
    padding: 1.3rem !important;
  }

  .right-header svg {
    width: 3.5rem;
  }

  .left-header {
    padding-left: 0.8rem;
    font-size: 0.9rem;
    //width: 15rem;
  }

  .club_info_title {
    font-size: 3rem !important;
  }

  .club_info_first_sec {
    padding-bottom: 5rem !important;
  }

  .activities_title {
    font-size: 3rem !important;
    margin-left: 0 !important;
  }

  .activity-title {
    font-size: 2rem !important;
  }

  .activity-desc {
    font-size: 1rem !important;
  }

  .activity-img {
    padding-bottom: 2rem !important;
  }

  .buttons {
    bottom: 0.5% !important;

    .like-button {
      width: 2.5rem !important;
      height: 2.5rem !important;
    }

    .dislike-button {
      width: 2.5rem !important;
      height: 2.5rem !important;
    }
  }

  .svg-icon {
    width: 1.2rem !important;
  }

  .my-favorties-list-title {
    font-size: 2.5rem !important;
  }

  .club-favorite-title {
    font-size: 1.5rem !important;
  }

  .club-favorite-type {
    font-size: 1.2rem !important;
  }

  .more-info {
    text-align: left !important;
  }

  .more-info a {
    text-align: left !important;
    font-size: 1rem !important;
  }

  .menu {
    div {
      padding-bottom: 2rem !important;
      font-size: 1.5rem !important;
      padding-right: 1rem !important;
    }
  }

  .clubfair-title {
    font-size: 3.5rem !important;

    span {
      font-size: 2rem;
    }
  }

  .clubfair-intro-title {
    font-size: 2.5rem !important;
    padding-bottom: 1rem !important;
  }

  .clubfair-intro {
    font-size: 1rem !important;
  }


}

@media screen and (max-width: 530px) {

  .club-thumbnail-small {
    .club-thumbnail-small-name {
      font-size: 0.8rem;
    }

    .club-thumbnail-small-title {
      font-size: 1.1rem;
    }

    .view-small-btn {
      font-size: 0.8rem;
    }

    .view-small-btn svg {
      width: 1.3rem;
      margin-left: 0.2rem
    }

    .small-img {
      //max-height: none;
    }
    }

  .form-submit {
    width: 100vw !important;
    top: initial;
    bottom: 0 !important;
    transform: translate(-50%, 0%) !important;
  }

  .login-btn {
    margin-bottom: 2rem;
  }

  .my-favorites {
    bottom: 2.5% !important;
  }

  .my-favorties-list-title {
    font-size: 2.2rem !important;
    padding-left: 1.5rem !important;
  }

  .club-favorite-title {
    font-size: 1.2rem !important;
  }

  .club-favorite-type {
    font-size: 1rem !important;
  }

  .more-info {
    text-align: left !important;
  }

  .more-info a {
    text-align: left !important;
    font-size: 1rem !important;
    padding-right: 1rem;
  }

  .svg-list {
    width: 2rem !important;
  }

  .ntt-title {
    font-size: 3rem !important;
  }
}

@media screen and (max-width: 330px) {
  .left-header {
    padding-left: 0.8rem;
    font-size: 0.7rem;
    //width: 15rem;
  }
}

.svg-icon {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  width: 1.5rem;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: #4691f6;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}

.my-favorites {
  position: fixed;
  bottom: 5%;
  right: 2%;
  background: #fec810;
  padding: 1.5rem;
  border-radius: 50%;
  z-index: 1003;
  cursor: pointer;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
  }
}

.my-favorties-list {
  width: 100vw;
  //background: #ff80ed;
  position: fixed;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  top: -150%;
  left:0;
  z-index: 1005;
  color: black;
  background: url('https://firebasestorage.googleapis.com/v0/b/clubfair2021.appspot.com/o/unknown.png?alt=media&token=9fa352db-8c8f-4e6f-9d9d-834702a2adb8');
   background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .my-favorties-list-title {
    text-align: left;
    padding-left: 4rem;
    padding-bottom: 4rem;
    font-size: 3rem;
    padding-top: 1rem;

  }

  img {
    max-width: 80%;
    align-self: center;
  }

  .number-title {
    text-align: right;
    font-size: 2rem;
  }

  .club-favorite-title {
    color: black;
    text-align: left;
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }

  .club-favorite-type {
    color: black;
    text-align: left;
    font-size: 1.5rem;
    padding-bottom: 3rem;
  }

  .more-info a {
    color: black;
    text-align: left;
    text-decoration: underline;
    font-size: 1.2rem;
  }

  .favorite-club-info {
    padding-bottom: 3rem;
  }

  .svg-list {
    width: 2.5rem;
  }

  .cancel-list {
    padding-bottom: 2rem;
    padding-top: 2rem;
    cursor: pointer;
  }

  .club-else {

  }
}

.form-submit {
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background:  #ffe6f0;
  z-index: 1005;
  padding-bottom: 4rem;
  padding-right: 3rem;
  padding-left: 2rem;
  text-align: left;
  width: 500px;
  label {
    display: block;
    background: transparent;
    outline: none;
    color: #123693;
    margin-top: 2rem;
  }
  input {
    display: block;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    color: black;
    width: 100%;
  }

  .form-submit-title {
    font-size: 2rem;
    padding-top: 1rem;
    color: #0053d6;
  }

}

.login-overlay {
  background: black;
  opacity: 0.5;
  z-index: 1004;
  position: fixed;
  top: 0;
  left:0;
  width: 100vw;
  height: 100vh;
}

.menu {
  background: black;
  position: fixed;
  top: 0%;
  right: -100%;
  height: 100%;
  width: 100vw;
  z-index: 1001;
  cursor: pointer;
  // overflow-y: scroll;
  // overflow-x: hidden;

  // .menu-container {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%)
  // }

  div {
    text-align: right;
    padding-right: 2rem;
    font-size: 2rem;
    padding-bottom: 2rem;

    a {
      color: white;
      text-decoration: none;
    }
  }

  .ntt-container {
    
    position: absolute;
    bottom: 3rem;
    right: 0;
  }

  .about-clubfair {
    padding-top: 3rem;
  }

  .svg-list {
    width: 2.5rem;
  }

  .cancel-menu {
    padding-bottom: 2rem;
    padding-top: 2rem;
    cursor: pointer;
    position: absolute;
    top: 2%;
    left: 4%;
  }
}


.ntt-info {
  background: #efeeea;
  color: #0a047a;
  position: fixed;
  top: 0;
  left: -150%;
  z-index: 1001;
  height: 100%;
  overflow-y: scroll;
  cursor: default;
  padding-bottom: 2rem;

  .ntt-title {
    font-size: 5rem;
    text-align: left;
    //padding-left: 2rem;
    padding-bottom: 3rem;
  }

   img {
    max-width: 90%;
    padding-bottom: 3rem;
    max-height: 550px;
  }

  .return-to-main-ntt {
     padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    cursor: pointer;
    text-align: left;
    span {
      margin-left: 0.5rem;
    }
  }

  .ntt-intro-title-ntt {
    font-size: 2rem;
    text-align: left;
    padding-bottom: 1.5rem;
  }

  .nttr-intro {
    text-align: left;
    padding-bottom: 2rem;
  }

  .minerva-video {
    margin-bottom: 3rem;
  }
}

.clubfair-info {
  background: #efeeea;
  color: #0a047a;
  position: fixed;
  top: 0;
  left: -150%;
  z-index: 1001;
  height: 100%;
  overflow-y: scroll;
  cursor: default;

  .clubfair-title {
    font-size: 5rem;
    text-align: center;
    //padding-left: 2rem;
    padding-bottom: 3rem;
  }

  img {
    max-width: 80%;
    padding-bottom: 3rem;
    max-height: 500px;
  }

  .clubfair-intro-title {
    font-size: 3rem;
    text-align: left;
    padding-bottom: 2rem;
  }

  .clubfair-intro {
    font-size: 1.2rem;
    text-align: left;
    padding-bottom: 2rem;
  }

  .aa-title {
    padding-top: 2rem;
    font-size: 4rem;
    cursor: pointer;
  }
}

.text-label-center {
  user-select: none;
}

.v-toast__item {
  background: linear-gradient(49deg,#0a047a,#fec810) !important;
  opacity: 1 !important;
  margin-bottom: 1rem !important;
  color: white !important;
  font-family: 'Be Vietnam', sans-serif !important;
  border-radius: 5rem !important;
}
//v-toast__item v-toast__item--default v-toast__item--bottom
</style>
