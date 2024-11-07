<template>
  <div class="container">
    <div class="pg-header">
      <h1>Programming-test</h1>
      <BackBtn class="wm-back-arrow" @click="goBack()" />
    </div>
    <div class="test-area">
      <ArrayTest />
    </div>
    <div class="test-area">
      <Employee />
    </div>
  </div>
</template>

<script setup>
import ArrayTest from "../components/pgm/ArrayTest.vue";
import Employee from "../components/pgm/Employee.vue";
import BackBtn from "../components/utils/BackBtn.vue";
import router from "@/router";
const goBack = () =>{
    router.push('/');
}
</script>

<style>
.test-area {
  width: 100%;
  height: auto;
  background: #e5ecff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 30px;
  position: relative;
  padding: 50px;
  margin-bottom: 20px;
}
.pg-header{
    display: flex;
  margin-bottom: 20px;
  position: relative;
  margin: 20px 0;
  height: 50px;
}
.pg-header h1{
    margin: auto;
    
}

@media only screen and (max-width: 768px){
    .pg-header h1{
      position: absolute;
      right: 20px;
  }
}
</style>
