<script>
import AppProject from './pages/AppProject.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
    AppProject,
  },

}
</script>

<template>
  <AppHeader />
  <AppProject />
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/generals.scss'
</style>