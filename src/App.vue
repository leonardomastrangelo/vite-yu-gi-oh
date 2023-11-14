<template>
  <!-- header -->
  <HeaderLM />

  <SelectLM @filter-type="getCards" />
  <!-- main -->
  <main class="p-5">
    <!-- wrapper -->
    <div class="container">

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


  </main>
</template>

<script>
import HeaderLM from './components/HeaderLM.vue';
import CardLM from './components/CardLM.vue';
import LoaderLM from './components/LoaderLM.vue';
import SelectLM from './components/SelectLM.vue';
import axios from 'axios';
import { store } from './data/store.js'
export default {
  name: "App",
  components: {
    HeaderLM,
    CardLM,
    LoaderLM,
    SelectLM
  },
  data() {
    return {
      store,
      max: 38,
    }
  },
  methods: {
    getCards(value) {
      if (value === undefined) {
        axios.get(store.apiUrl + "?num=39&offset=0").then((response) => {
          store.cardsList = response.data.data
        })
      }
      else {
        axios.get(store.apiUrl + store.queryString + value).then((response) => {
          store.cardsList = response.data.data
        })
      }
    },
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