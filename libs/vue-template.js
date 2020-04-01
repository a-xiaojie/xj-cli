const { toUpperCase } = require('./utils')
const vuePage = (name) => `<template>
  <div class="${name}">
    ${toUpperCase(name)}页面
  </div>
</template>

<script>
  export default {
    name: '${toUpperCase(name)}'
  }
</script>

<style scoped>
  .${name} {
    
  }
</style>`

exports.vuePage = vuePage
