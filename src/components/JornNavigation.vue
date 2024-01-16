<template>
  <div class="nav">
    <div class="hub">
        <img src="../assets/logo.png" alt="logo">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .nav {
        width: 100%;
        height: 10vh;
        background-color: rgb(27, 27, 27);
        margin-top: 0;
        text-align: left;
        margin-bottom: 3vh;
        border-bottom: 1px solid rgb(40, 40, 40);
    }

    .hub {
        display: inline-block;
        margin-left: 11%;
        text-align: left;
    }

    .hub img {
        display: block;
        height: 7vh;
        margin-top: 1.5vh;
        object-fit: contain;
    }
</style>