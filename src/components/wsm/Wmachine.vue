<template>
  <div class="wm-container wm-style">
    <div class="wm-info">
      <div
        class="available-circle"
        :style="
          machineStore.status
            ? 'background: #4feb56;box-shadow: 0px 0px 20px  #4feb56;'
            : 'background: #eb4f4f;box-shadow: 0px 0px 20px  #eb4f4f;'
        "
      >
      </div>
      <div class="time-display">
        {{ machineStore.formattedCountdown }}
      </div>
    </div>
    <div class="glass-circle">
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { defineProps } from "vue";
import { useMachineStore } from "@/stores/machine.js";
const props = defineProps(["id"]);
const machineStore = useMachineStore(props.id);

</script>
<style>
.wm-container {
  width: 100%;
  height: 100%;
  background: #f4f5fd;
  box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px,
    rgba(66, 66, 66, 0.22) 4px 10px 10px;
  position: relative;
  display: grid;
}
.wm-style {
  border-radius: 15px;
}
.wm-info {
  width: 100%;
  height: 50px;
  background: #c5d3f3;
  position: absolute;
  top: 0;
  display: flex;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.available-circle {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  align-self: center;
  margin-left: 20px;
}
.time-display {
  position: absolute;
  right: 12px;
  align-self: center;
  width: 65px;
  height: 28px;
  text-align: center;
  background: #fff;
  border-radius: 5px;
  border: none;
}

.glass-circle {
  width: 150px;
  height: 150px;
  background: #e5e5e5;
  border-radius: 150px;
  position: absolute;
  top: 80px;
  justify-self: center;
  box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px inset,
    rgba(0, 0, 0, 0.22) 4px 10px 10px inset;
}
</style>
