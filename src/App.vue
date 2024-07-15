<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const videoUrl = ref('http://localhost:5077/video')
const audioVocalsUrl = ref('http://localhost:5077/audio/vocals')
const audioOtherUrl = ref('http://localhost:5077/audio/other')
const audioBassUrl = ref('http://localhost:5077/audio/bass')
const audioDrumsUrl = ref('http://localhost:5077/audio/drums')

const video = ref<HTMLVideoElement | null>(null);
const vocals = ref<HTMLVideoElement | null>(null);
const other = ref<HTMLVideoElement | null>(null);
const bass = ref<HTMLVideoElement | null>(null);
const drums = ref<HTMLVideoElement | null>(null);
const isMuted = ref(false);
const playAll = () => {
  video.value?.play();
  vocals.value?.play();
  other.value?.play();
  bass.value?.play();
  drums.value?.play();
}
const stopAll = () => {
  video.value?.pause();
  vocals.value?.pause();
  other.value?.pause();
  bass.value?.pause();
  drums.value?.pause();
}
const mutedVocals = () => {
  isMuted.value = !isMuted.value;
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <div>
    <button @click="playAll">Play All</button>
  </div>

  <div>
    <button @click="stopAll">Stop</button>
  </div>

  <div>
    <button @click="mutedVocals">
      <span v-if="isMuted">Unmute Vocals</span>
      <span v-else>Mute Vocals</span>
    </button>
  </div>

  <div>
    <video ref="video" controls>
      <source :src="videoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div>
    <audio ref="vocals" :muted="isMuted" controls>
      <source :src="audioVocalsUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div>
    <audio ref="other" controls>
      <source :src="audioVocalsUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div>
    <audio ref="bass" controls>
      <source :src="audioVocalsUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
  </div>

  <div>
    <audio ref="drums" controls>
      <source :src="audioVocalsUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
