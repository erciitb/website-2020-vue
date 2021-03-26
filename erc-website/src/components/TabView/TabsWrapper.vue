<template>
  <div id="tabsWrapper" class="tabsContainerCustomStylesFromParent">
    <div class="tabHeadingWrapper" ref="headingContainer">
      <ul
        class="tabHeadingList tabHeadingCustomStylesFromParent"
        ref="headingList"
      >
        <li
          v-for="(heading, index) in headings"
          :key="index"
          @click="changeIndex(index)"
          :class="{
            selectedTab: index === selectedIndex,
            tabHeading: true,
            tabNameCustomStylesFromParent: true
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
import { ref } from '@vue/runtime-core'

/**
 * TabsWrapper Component
 * Used to contain tabs from Tab component
 *
 * This component will resize itself to fit into the container it is placed in
 * Each tab name has a minimum of 6vw width, heading will be displayed in a single line only
 * Font sizes will be overwritten for the tab names and tab content, use !important property to overwrite
 * Backgrounds are not opaque, but blur effect has been applied => if something is behind it, it will be blurred
 *
 * Can inherit styles from parent via these classes (if defined via ::v-deep)
 *  - tabsContainerCustomStylesFromParent (for full container),
 *  - tabHeadingCustomStylesFromParent (for tab list),
 *  - tabNameCustomStylesFromParent (for individual tabs)
 *  - tabDisplayCustomStylesFromParent (for wrapper of tab content)
 *
 * Future Improvements:
 *  - Can add scroll for tab-names list in desktop mode via buttons (Current maximum capacity = 7)
 */
export default {
  name: 'TabsWrapper',
  props: {
    headings: Array,
    selectedIndex: Number,
    changeIndex: Function
  },
  setup() {
    const headingContainer = ref(null)
    const headingList = ref(null)
    return { headingContainer, headingList }
  }
}
</script>

<style lang="scss" scoped>
@use './../styles/TabView/tabsWrapper';
</style>
