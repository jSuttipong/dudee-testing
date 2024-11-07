<template>
  <div class="array-test">
    <div class="input-area">
      <input type="number" placeholder="Add number" v-model="inputNumber" />
      <DdBtn class="btm-area" btnTitle="Add" @click="handleInputData(inputNumber)" />
    </div>
    <!-- <p>Sample array: {{ sampleArray }}</p> -->
    <DdBtn class="btm-area" btnTitle="Use sample array" @click="insertArrayWithSample()" />
    <p>List number: {{ arrayForSort }}</p>
    <DdBtn class="btm-area" btnTitle="Sort" @click="handleSortData()" />
    <p>Output : {{ newArrayList }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DdBtn from "../utils/DdBtn.vue";

const sampleArray = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
let arrayForSort = ref([]);
let inputNumber = ref("");
let newArrayList = ref([]);

const handleInputData = (data) => {
  if (isNumber(data)) {
    arrayForSort.value.push(data);
  }
};

const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};

const insertArrayWithSample = () => {
  arrayForSort.value = sampleArray;
};

const handleSortData = () => {
  // Find the duplicate numbers
  let duplicateNumbers = checkDuplicatInArray(arrayForSort.value);
  // Find the unduplicate numbers
  let unDuplicatNumbers = checkUnDuplicatInArray(arrayForSort.value);
  // Create a new list of numbers
  let dupicatedNumbersList = createNewDuplicateNumbers(
    arrayForSort.value,
    duplicateNumbers
  );
  // Sort the numbers in ascending order
  unDuplicatNumbers = sortNumbers(unDuplicatNumbers);
  dupicatedNumbersList = sortNumbers(dupicatedNumbersList);
  // combine the list
  newArrayList.value = combine(unDuplicatNumbers, dupicatedNumbersList);
};

const checkDuplicatInArray = (arr) => {
  return [...new Set(arr.filter((num, i, a) => a.indexOf(num) !== i))];
};
const checkUnDuplicatInArray = (arr) => {
  return arr.filter((num, i, a) => a.indexOf(num) === a.lastIndexOf(num));
};

const createNewDuplicateNumbers = (allInList, duplicateNum) => {
  let newList = [];
  for (let i = 0; i < allInList.length; i++) {
    for (let l = 0; l < duplicateNum.length; l++) {
      if (allInList[i] == duplicateNum[l]) {
        newList.push(allInList[i]);
      }
    }
  }
  return newList;
};

const sortNumbers = (num) => {
  return num.sort((a, b) => {
    return a - b;
  });
};

const combine = (listA, listB) => {
  return [...listA, ...listB];
};
</script>

<style>
.array-test input {
  max-width: 150px;
  width: auto;
  height: 50px;
  border: none;
  border-radius: 5px;
  margin-right: 20px;
  align-self: center;

}
.array-test input:focus-visible,
input:focus {
  border: none;
  outline: none;
}
.input-area{
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

</style>
