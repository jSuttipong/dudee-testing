<template>
  <div class="home-page">
    <nav class="home-page-nav">
      <ul>
        <router-link to="/washing-machine">Washing-machine</router-link
        ><br />
        <router-link to="/programming-test">Programming-test</router-link>
      </ul>
    </nav>
  </div>
</template>

<script></script>

<style>
.home-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-page-nav {
  width: 500px;
  height: 500px;
  background: #e5ecff;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 30px;
  padding: 50px;
}

.home-page-nav ul{
  padding-inline-start: 0 !important;
}
.home-page-nav a {
  width: auto;
  height: 50px !important;
  display: block;
  border-radius: 13px;
  /* text-align: center; */
  padding-left: 20px;
  align-content: center;
  background: #f4f3ff;
  box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px,
    rgba(66, 66, 66, 0.22) 4px 10px 10px;
  color: #616161;
}
.home-page-nav a:hover {
  text-decoration: none;
  background: #f4f3ff;
  box-shadow: rgb(255, 255, 255) -4px -4px 6px 0px inset,
    rgba(66, 66, 66, 0.22) 4px 10px 10px inset;
  color: #9b9b9b;
}

@media only screen and (max-width: 480px){
  .home-page-nav{
    margin: 0 20px;
  }
}
</style>
