<script>
import AppProject from './components/AppProject.vue';

export default {
  components: {
    AppProject,
  },

}
</script>

<template>
  <AppProject />
  <router-view></router-view>
</template>

<style lang="scss">
@import './styles/generals.scss'
</style>