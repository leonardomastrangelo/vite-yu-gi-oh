<template>
    <div class="text-center bg-card h-100">
        <!-- img -->
        <div>
            <img :src="image" :alt="name" class="my-fluid">
        </div>
        <!-- name -->
        <h3 class="fs-5 m-0 p-3 text-light text-uppercase">
            {{ name }}
        </h3>
        <!-- type -->
        <h4 class="fs-6 pb-4">
            {{ type }}
        </h4>
    </div>
</template>

<script>
export default {
    name: "CardLM",
    data() {
        return {}
    },
    props: {
        image: String,
        name: String,
        type: String
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/_variables.scss' as *;

.my-fluid {
    width: 100%;
    display: block;
}

.bg-card {
    background-color: $mainColor;
}
</style>