<template>
  <div class="tabHeadingWrapper">
    <ul>
      <li v-for="(heading, index) in headings" :key="index">{{ heading }}</li>
    </ul>
  </div>
  <div class="tabsWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsWrapper',
  props: {
    headings: Array,
    selectedIndex: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/TabView/tabsWrapper';
</style>
