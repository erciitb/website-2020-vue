<template>
  <div
    :class="{
      tabsWrapper: true,
      tabsContainerCustomStylesFromParent: true,
      tabsWrapperVertical: isVertical
    }"
  >
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
      <!-- @slot Content of the tab -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/runtime-core'

/**
 * @displayName TabsWrapper
 * Used to contain tabs from Tab component
 *
 * This component will resize itself to fit into the container it is placed in
 * Each tab name has a minimum of 6vw width, heading will be displayed in a single line only (container resizes to fit name)
 * Font sizes will be overwritten for the tab names and tab content, use !important property to overwrite
 * Backgrounds are not opaque, but blur effect has been applied => if something is behind it, it will be blurred
 * If vertical property is true, the tabs would be vertical. The headings will cover from 17% (desktop) to 30% (mobile) of width of the container
 * If vertical, the tabs have a height between 50px and 85px (converted to vh)
 *
 * Can inherit styles from parent via these classes (if defined via :deep selector)
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
    /**
     * Contains headings of the tabs
     */
    headings: {
      type: Array,
      required: true
    },
    /**
     * Index of tab that is selected
     */
    selectedIndex: {
      type: Number,
      required: true
    },
    /**
     * Function that is called for changing the index
     */
    changeIndex: {
      type: Function,
      required: true
    },
    /**
     * Boolean value that determines if the tabs are vertically displayed or not
     */
    isVertical: {
      type: Boolean,
      default: false
    }
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
