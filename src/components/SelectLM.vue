<template>
    <select class="form-select" v-model="selectedType" @change="$emit('filterType', selectedType)">
        <option v-for="cardType in store.typeList" :value="cardType.archetype_name">
            {{ cardType.archetype_name }}
        </option>
    </select>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js'
export default {
    name: "SelectLM",
    emits: ['filterType'],
    data() {
        return {
            store,
            selectedType: ""
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) => {
            store.typeList = response.data
        })
    }
}
</script>

<style lang="scss" scoped></style>