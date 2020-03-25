const vuePage = (name) => `<template>
  <div class="wrap"></div>
</template>

<script>
  export default {
    name: ${name}
  }
</script>

<style scoped>

</style>`

exports.vuePage = vuePage
