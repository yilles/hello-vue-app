<script setup lang="ts">

</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

main {
  width: 100%;
  min-height: 100vh; /* 使main至少与视口一样高 */
  display: flex;
  flex-direction: column; /* 如果你需要内部内容垂直排列 */
}
</style>