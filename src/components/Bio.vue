<template>
  <div id="bio">
    A four-piece outfit formed in London, Tricky Susan immediately snatch your attention with their hook-centric tunes and an energy hard to eclipse.
    <br><br>
    Cementing this with a penchant for a stonking good time (on stage and off), it won’t take you long to get what this lot are about.
    <br><br>
    Tricky Susan entice you to join them on their journey. Buckle up for the ride.
    <br><br><br>
    <div id="quotes">
      "... I’ve seen deaf people cry at a Tricky Susan show ..."<br><br>
      "... I’ve even seen a goose take a bump at one of their shows ..."
    </div>
  </div>
  
</template>

<style scoped>

@media screen and (orientation: landscape) {
  #bio {
    width: 50vw;
    height: 50vh;
    font-size:calc(6px + 1.5vw);
    align-items: center;
    display: flex;
    text-align: justify
  }

  #quotes {
    font-size: 70%;
    font-style: italic;
    position: absolute;
    top: 80%;
    left: 0;
    right: 0;
    bottom: 1vh;
    text-align: center
  }

}

@media screen and (orientation: portrait) {
  #bio {
    width: 80vw;
    height: 70vh;
    font-size:calc(10px + 1.5vh);
  }

  #quotes {
    font-size: 90%;
    font-style: italic;
    /* text-align: center; */
    /* width: 65vw; */
  }
}
</style>