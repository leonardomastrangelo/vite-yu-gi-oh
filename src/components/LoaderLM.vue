<template>
    <div class="display-4">
        Loading Cards...
    </div>
    <div>
        Waiting Time : {{ count }}
    </div>
</template>

<script>
export default {
    name: "LoaderLM",
    data() {
        return {
            count: 0
        }
    },
    mounted() {
        setInterval(() => this.count++, 1000)
    }
}
</script>

<style lang="scss" scoped></style>