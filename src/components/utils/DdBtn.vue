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
    height: 30px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background: #333;
    color: #fff;
}
</style>