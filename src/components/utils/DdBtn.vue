<template>
    <div>
        <button class="btn-custom">{{ props.btnTitle }}</button>
    </div>
</template>
<script setup>
import { defineProps} from 'vue';
const props = defineProps(["btnTitle"]);

</script>
<style>
.btn-custom{
    min-width: 100px;
    width: auto;
    height: 50px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background: #e9f2ff;
    color: #535353;
    box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px,
    rgba(66, 66, 66, 0.22) 4px 10px 10px;
    color: #616161;
}
.btn-custom:hover{
    /* background: #cbcbcb;
    color: #fff */
    box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px inset,
    rgba(66, 66, 66, 0.22) 4px 10px 10px inset;
    color: #9b9b9b;
}
</style>