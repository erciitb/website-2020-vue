<template>
  <div class="tabWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    index: Number,
    selectedIndex: Number
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/TabView/tab';
</style>
