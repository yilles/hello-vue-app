<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

const createRoom = () => {
    console.log('新建包廂');
}

const enterRoom = () => {
    console.log('進入包廂');
    router.push('/room')
}
</script>

<template>
  <div class="page-container">
    <header>
      <img alt="HiKTV" class="logo" src="../assets/music.svg" width="125" height="125" />
    </header>

    <main>
      <div class="container">
        <button @click="createRoom">新建包廂</button>
        <button @click="enterRoom">進入包廂</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 水平分布 */
  background-color: rgba(35, 35, 122, 0.603);
  padding: 20px;
  min-height: 100vh; /* 设置最小高度为视口高度 */
  width: 100%; /* 宽度填满 */
}

header, main {
  flex: 1; /* 使header和main元素平均分配父容器的空间 */
  margin: 0 50px;
}

header {
  line-height: 1.5;
  background-color: yellow;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
}

/* 中等屏幕（例如平板） */
@media (min-width: 768px) {
  .page-container {
    padding: 40px; /* 增加内边距 */
  }
}

/* 大屏幕（例如桌面显示器） */
@media (min-width: 1024px) {
  .page-container {
    justify-content: center; /* 在大屏幕上调整内容的分布 */
    padding: 60px; /* 进一步增加内边距 */
  }
}

</style>
