<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },

}
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use './styles/generals.scss';

header {
  height: 64px;
}

main {
  height: calc(100vh - 152px);
}

footer {
  height: 88px;
}

section {
  height: 100%;
  overflow: auto;
}
</style>