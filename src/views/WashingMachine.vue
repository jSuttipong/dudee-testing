<template>
  <div class="container">
    <div class="area-container">
      <div class="wm-header">
        <BackBtn class="wm-back-arrow" @click="goBack()" />
        <h1>Washing Machine</h1>
      </div>
      <div class="row">
        <div
          v-for="machine in washingMachines"
          :key="machine.id"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div class="card-container">
            <Wmachine
              :id="machine.id"
              @click="handleModal(machine.id)"
              style="cursor: pointer"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="wm-modal" v-if="isActiveModal">
        <WmModal :machineId="machineActiveId" @closeModal="handleModal()" />
      </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import Wmachine from "../components/wsm/Wmachine.vue";
import WmModal from "../components/wsm/WmModal.vue";
import BackBtn from "../components/utils/BackBtn.vue";
import { ref, onMounted } from "vue";
// import { useMachineStore } from "@/stores/machine.js";
import router from "@/router";

let washingMachines = ref([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
]);

let isActiveModal = ref(false);
let machineActiveId = ref("");

const handleModal = (id) => {
  if (isActiveModal.value) {
    isActiveModal.value = false;
    machineActiveId.value = '';
  } else {
    isActiveModal.value = true;
    machineActiveId.value = id;
  }
  console.log("machine id ", id);
};

const goBack = () =>{
    router.push('/');
}

</script>
<style>
.area-container {
  min-height: 96vh;
  height: auto;
  width: 100%;
  background: #e5ecff;
  margin-top: 20px;
 
  padding: 3% 20px 0 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  /* box-shadow: rgb(255, 255, 255) -3px -3px 6px 0px , rgba(66, 66, 66, 0.22) 4px 10px 10px; */
  border-radius: 30px;
  position: relative;
}

.wm-header {
  display: flex;
  margin-bottom: 60px;
  position: relative;
  height: 58px;
}
.wm-header h1{
  color: #000;
  left: 0;
  right: 0;
  margin: auto;
}
.wm-back-arrow {
  left: 20px;
  position: absolute;
}
.card-container {
  width: 250px;
  height: 300px;
  padding: 20px;
  /* background: #da2121; */
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  border-radius: 30px;
  justify-self: center;
  margin-bottom: 20px;
}
.wm-modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

@media only screen and (max-width:768px){
  .wm-back-arrow{
    left: -10px;
  }
  .wm-header{
    margin-bottom: 0;
  }
  .wm-header h1{
    position: absolute;
    left: unset;
    right: 0;
    margin: auto;
  }
}
@media only screen and (max-width:960px){
  .card-container{
    width: 315px;
    height: 335px;
  }
}
</style>
