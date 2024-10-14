<script>
import AppProject from './components/AppProject.vue';
import AppProjectCard from './components/AppProjectCard.vue';
export default {
  components: {
    AppProject,
    AppProjectCard,
  },

}
</script>

<template>
  <div>
    <AppProject />
    <AppProjectCard />
  </div>
</template>

<style lang="scss">
@import './styles/generals.scss'
</style>