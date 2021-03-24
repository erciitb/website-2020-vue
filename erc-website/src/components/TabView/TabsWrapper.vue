<template>
  <div id="tabsWrapper" class="tabsContainerCustomStylesFromParent">
    <div class="tabHeadingWrapper" ref="headingContainer">
      <ul
        class="tabHeadingList tabHeadingsustomStylesFromParent"
        ref="headingList"
      >
        <li
          v-for="(heading, index) in headings"
          :key="index"
          @click="changeIndex(index)"
          :class="{
            selectedTab: index === selectedIndex,
            tabHeading: true
          }"
          :style="{ left: `-${index}vw` }"
        >
          {{ heading }}
        </li>
      </ul>
    </div>
    <div class="displayTabWrapper tabDisplayCustomStylesFromParent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core'
export default {
  name: 'TabsWrapper',
  props: {
    headings: Array,
    selectedIndex: Number,
    changeIndex: Function,
    customStyle: Object
  },
  setup() {
    const headingContainer = ref(null)
    const headingList = ref(null)
    const isOverflow = computed(() => {
      headingContainer.clientWidth
    })
    return { headingContainer, headingList, isOverflow }
  }
}
</script>

<style lang="scss" scoped>
@use './../styles/TabView/tabsWrapper';
</style>
