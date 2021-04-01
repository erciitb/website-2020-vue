<template>
  <Tabs
    :headings="tabHeadings"
    :selectedIndex="selectedIndex"
    :changeIndex="changeIndex"
  >
    <Tab
      v-for="(component, index) in tabsContent"
      :key="index"
      :index="index"
      :selectedIndex="selectedIndex"
    >
      {{ component }}
    </Tab>
  </Tabs>
</template>

<script>
import Tabs from './TabsWrapper.vue'
import Tab from './Tab.vue'
import { ref } from 'vue'
/**
 * TabView component
 * This is just an example on how to use the Tabs component
 * => Cannot be rendered directly as can't handle JSX elements (don't render properly) in tabsContent array
 *
 * Future Improvements:
 *  - If one can pass JSX as a prop, which renders => can be used directly instead of manually doing it
 */
export default {
  components: { Tabs, Tab },
  props: {
    tabHeadings: Array,
    tabsContent: Array
  },
  setup() {
    const selectedIndex = ref(0)

    const changeIndex = (newIndex) => {
      selectedIndex.value = newIndex
    }
    return { selectedIndex, changeIndex }
  }
}
</script>

<style></style>
