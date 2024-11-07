<template>
    <div>
        <button class="back-btn">
            <div class="back-arrow"></div>
        </button>
    </div>
</template>
<style>
.back-btn{
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50px;
    background: #f4f3ff;
    box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px,
    rgba(66, 66, 66, 0.22) 4px 10px 10px;
    position: relative;
    display: flex;
    align-items: center;
}
.back-arrow{
    width: 15px;
    height: 15px;
    border-top: solid 2px #000;
    border-left: solid 2px #000;
    transform: rotate(315deg);
    position: absolute;
    left: 19px;
}
.back-btn:hover{
    box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px inset,
    rgba(66, 66, 66, 0.22) 4px 10px 10px inset;
}
</style>