<template>
  <div class="main">
    <div v-for="(jorn, index) in jorns" :key="index" class="entry">

      <video width="320" height="240" v-if="index == 38 || index == 40 || index == 42" controls>
        <source :src="require(`../assets/${jorn}`)" type="video/mp4" @click="togglePlay($event)">
      Your browser does not support the video tag.
      </video>

      <img :src="require(`../assets/${jorn}`)" :alt="'jorn-' + index" v-else>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JornDex',
  data() {
    return {
      jorns: [
        "1.jpg", 
        "2.jpg", 
        "3.jpg", 
        "4.jpg", 
        "5.jpg", 
        "6.jpg", 
        "7.jpg", 
        "8.jpg", 
        "9.jpg", 
        "10.jpg", 
        "11.jpg", 
        "12.jpg", 
        "13.jpg", 
        "14.jpg", 
        "15.jpg", 
        "16.jpg", 
        "17.jpg", 
        "18.jpg", 
        "19.jpg", 
        "20.jpg", 
        "21.jpg", 
        "22.jpg", 
        "23.jpg", 
        "24.jpg", 
        "25.jpg", 
        "26.jpg", 
        "27.jpg", 
        "28.jpg", 
        "29.jpg", 
        "30.jpg", 
        "31.jpg", 
        "32.jpg", 
        "33.jpg", 
        "34.jpg", 
        "35.jpg", 
        "36.jpg", 
        "37.jpg", 
        "38.jpg", 
        "39.mp4", 
        "40.jpg", 
        "41.mp4", 
        "42.jpg", 
        "43.mp4", 
        "44.jpg", 
        "45.jpg", 
        "46.jpg", 
        "47.jpg", 
        "48.jpg"
      ]
    }
  },
  methods: {
    togglePlay(elem) {
      console.log(elem);
      // if (elem.paused) {
      //   elem.play();
      // }
      // else {
      //   elem.pause();
      // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background-color: black;
    margin: 0;
  }

  .title {
    color: rgb(255,163,26);
  }



  .main {
    width: 80%;
    
    display: flex;
    flex-wrap: wrap;
    margin: auto;
  }

  .entry {
    flex: 1 0 22%; /* explanation below */
    margin: 1.5%;
    max-height: 40vh;
    margin-top: 10vh;
  }

  .entry img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 5vh;
  }
</style>



