<template>
  <div>
    <div class="pgm-test">
      <input type="text" v-model="nameToFind" />
      <DdBtn @click="findEmployee(nameToFind)" btnTitle="Find Employee" />
    </div>
    <div v-if="isSearch">
      {{
        hasEmployee
          ? `ชื่อ ${name} ตำแหน่ง ${position}.`
          : `Employee with name ${targetName} not found.`
      }}
    </div>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref } from "vue";
import DdBtn from "../utils/DdBtn.vue";
const sampleData = [
  {
    name: "Arm",
    position: "Front End",
  },
  {
    name: "Game",
    position: "Back End",
  },
];

let name = ref("");
let position = ref("");
let targetName = ref("");
let hasEmployee = ref(false);
let nameToFind = ref(null);
let isSearch = ref(false);

const findEmployee = (input) => {
  let nameInput = input.toLowerCase();
  isSearch.value = true;
  let employee = sampleData.find(
    (value) => value.name.toLowerCase() == nameInput
  );
  if (employee) {
    hasEmployee.value = true;
    name.value = employee.name;
    position.value = employee.position;
  } else {
    hasEmployee.value = false;
    targetName.value = input;
  }
};
</script>

<style>
.pgm-test {
  display: flex;
  margin-bottom: 20px;
}
.pgm-test input {
  max-width: 200px;
  width: auto;
  height: 50px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  align-self: center;
}
</style>
