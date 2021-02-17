<template>
  <div class="tabHeadingWrapper">
    <ul>
      <li
        v-for="(heading, index) in headings"
        :key="index"
        @click="
          () => {
            changeIndex(index)
          }
        "
      >
        {{ heading }}
      </li>
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
    selectedIndex: Number,
    changeIndex: Function
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import './../styles/TabView/tabsWrapper';
</style>
