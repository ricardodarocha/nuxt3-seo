<template>
  <div>
    <h2>{{id}}</h2>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>
