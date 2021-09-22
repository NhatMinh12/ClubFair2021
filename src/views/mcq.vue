<template>
 <div id="s">
     <div id='container'>
      <div class='row'>
        <router-link to='hocthuat'>Học thuật</router-link>
        <router-link to='nghethuat'>Nghệ thuật</router-link>
      </div>
      <div class='row'>
        <router-link to='thethao'>Thể thao</router-link>
        <router-link to='xahoi'>Xã hội</router-link>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'mcq'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@300;400&family=DM+Mono&family=DM+Sans&family=DM+Serif+Display&display=swap%27');

#container {
  width: 100vw;
  height: 100%;
 
}
#s {
  align-items: center;
  justify-content: center;
  display: flex;
  height: 600px;
  font-family: 'Be Vietnam', sans-serif;
}
.row {
  display: flex;
}
.row a {
  margin-right: 20px;
}
a {
  color: white;
  font-size: 30px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 300px;
  height: 200px;
  margin-bottom: 30px;
  border: 2px solid #0053d6;
  border-radius: 50px;
  background-color: #0053d6;
}
a:hover {
  background-color: white;
  color: #0053d6;
}

#question {
    color: black;
}

.start-btn {
    color: black !important
}
</style>