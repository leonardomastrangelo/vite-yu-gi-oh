<template>
  <!-- header -->
  <HeaderLM />
  <!-- main -->
  <main class="p-5">
    <!-- wrapper -->
    <div class="container" v-if="store.cardsList.length === max">
      <!-- header -->
      <div class="top-bar">
        <h2 class="text-light fs-5 p-3 m-0">
          Found {{ store.cardsList.length }} Cards
        </h2>
      </div>

      <!-- main-content -->
      <div class="row">
        <div class="col-3 mb-5" v-for="item in store.cardsList" :key="item.id">
          <CardLM :image="item.card_images[0].image_url" :name="item.name" :type="item.archetype" />
        </div>
      </div>
    </div>
    <!-- loader component -->
    <LoaderLM v-else />
  </main>
</template>

<script>
import HeaderLM from './components/HeaderLM.vue';
import CardLM from './components/CardLM.vue';
import LoaderLM from './components/LoaderLM.vue';
import axios from 'axios';
import { store } from './data/store.js'
export default {
  name: "App",
  components: {
    HeaderLM,
    CardLM,
    LoaderLM
  },
  data() {
    return {
      store,
      max: 39
    }
  },
  methods: {
    getCards() {
      axios.get(store.apiUrl + store.queryString).then((response) => {
        store.cardsList = response.data.data
      })
    }
  },
  created() {
    this.getCards()
  }
}
</script>

<style lang="scss" scoped>
@use '../src/assets/css/partials/variables' as *;

main {
  background-color: $mainColor;
}

.top-bar {
  background-color: $darkColor;
}

.container {
  background-color: $lightColor;
  padding: 40px;
}
</style>