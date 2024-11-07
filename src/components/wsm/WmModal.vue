<template>
  <div class="modal-container">
    <div class="modal-bg"></div>
    <div class="container">
      <BackBtn class="modal-back" @click="$emit('closeModal')" />
      <div class="modal-content">
        <div class="row">
          <div class="col-xs-12 col-sm-6 m-position">
            <div class="modal-wm-container">
              <Wmachine :id="props.machineId" />
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 info-position">
            Available: {{ machineStore.available ? "Yes" : "No" }}
            <p>
              {{
                machineStore.available
                  ? `Need ${coinsNeeded} $ To Start`
                  : "In Process"
              }}
            </p>
            <DdBtn
              class="btm-area"
              @click="onCoinInserted()"
              btnTitle="Insert 10$ coin"
              v-if="machineStore.available"
            />

            <div v-if="!machineStore.available">
              <DdBtn
                class="btm-area"
                @click="onPause()"
                v-if="!machineStore.isPaused"
                btnTitle="Pause"
              />
              <DdBtn
                class="btm-area"
                @click="onResume()"
                v-else
                btnTitle="Resume"
              />
            </div>
            <DdBtn class="btm-area" @click="onCancel()" btnTitle="Cancel" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BackBtn from "../utils/BackBtn.vue";
import Wmachine from "../wsm/Wmachine.vue";
import DdBtn from "../utils/DdBtn.vue";
import { defineProps, ref } from "vue";

const props = defineProps(["machineId"]);
const coinsNeeded = ref(20);
import { useMachineStore } from "@/stores/machine.js";
const machineStore = useMachineStore(props.machineId);

const onCoinInserted = () => {
  coinsNeeded.value -= 10;
  if (coinsNeeded.value == 0) {
    machineStore.startCountdown(120);
    coinsNeeded.value = 20;
  }
};

const onCancel = () => {
  coinsNeeded.value = 20;
  machineStore.clearCountdown();
};

const onPause = () => {
  machineStore.pauseCoutdown();
};
const onResume = () => {
  machineStore.startCountdown(machineStore.countdown);
};
</script>
<style>
.modal-container {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
}
.modal-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(9.8px);
}
.modal-back {
  left: 15%;
  top: 5%;
  position: absolute;
}
.modal-content {
  width: 100%;
}
.modal-wm-container {
  width: 290px;
  height: 370px;
}
.m-position {
  justify-items: end;
}
@media only screen and (max-width: 960px) {
  .modal-container {
    width: 100vw;
    height: 100vh;
  }
  .modal-back {
    left: 5%;
    top: 4%;
  }
  
}
@media only screen and (max-width: 768px) {
  .m-position {
    justify-items: center;
    margin-bottom: 20px;
  }
  .info-position{
    justify-items: center;
  }
  .modal-wm-container{
    width: 278px;
    height: 340px;
  }
  .modal-content .row{
    margin-top: 80px;
  }
}
</style>
