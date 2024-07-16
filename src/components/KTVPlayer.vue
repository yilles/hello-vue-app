<script setup lang="ts">
import { ref } from 'vue'

const videoUrl = ref('/video')
const audioVocalsUrl = ref('/audio/vocals')
const audioOtherUrl = ref('/audio/other')
const audioBassUrl = ref('/audio/bass')
const audioDrumsUrl = ref('/audio/drums')

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
  <div class="container">
    <button @click="playAll">Play All</button>
    <button @click="stopAll">Stop</button>
    <button @click="mutedVocals">
      <span v-if="isMuted">Unmute Vocals</span>
      <span v-else>Mute Vocals</span>
    </button>
  </div>

  <div class="video-container">
    <video ref="video" controls>
      <source :src="videoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="container">
    <audio ref="vocals" :muted="isMuted" controls>
      <source :src="audioVocalsUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
    <audio ref="other" controls>
      <source :src="audioOtherUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
    <audio ref="bass" controls>
      <source :src="audioBassUrl" type="audio/flac">
      Your browser does not support the audio element.
    </audio>
    <audio ref="drums" controls>
      <source :src="audioDrumsUrl" type="audio/flac">
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

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>