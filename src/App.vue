<template>
  <HeaderLM />
  <main>
    <div class="container">
      <!-- header -->
      <div>
      </div>

      <!-- main-content -->
      <div class="row">
        <div class="col-3">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderLM from './components/HeaderLM.vue';
export default {
  name: "App",
  components: {
    HeaderLM,
  }
}
</script>

<style lang="scss" scoped>
@use '../src/assets/css/partials/variables' as *;

main {
  background-color: $mainColor;
}
</style>