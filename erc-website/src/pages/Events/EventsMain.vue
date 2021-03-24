<template>
  <h1>Events Page</h1>
  <div class="eventTabsWrapper">
    <tabs
      :headings="tabHeadings"
      :selectedIndex="selectedIndex"
      :changeIndex="changeIndex"
    >
      <tab :index="0" :selectedIndex="selectedIndex">Hello From Tab 1</tab>
      <tab :index="1" :selectedIndex="selectedIndex">Hello From Tab 2</tab>
      <tab :index="2" :selectedIndex="selectedIndex">Hello From Tab 3</tab>
      <tab :index="3" :selectedIndex="selectedIndex">Hello From Tab 4</tab>
      <tab :index="4" :selectedIndex="selectedIndex">Hello From Tab 5</tab>
      <tab :index="5" :selectedIndex="selectedIndex">Hello From Tab 6</tab>
      <tab :index="6" :selectedIndex="selectedIndex">Hello From Tab 7</tab>
      <tab :index="7" :selectedIndex="selectedIndex">Hello From Tab 8</tab>
      <tab :index="8" :selectedIndex="selectedIndex">Hello From Tab 9</tab>
    </tabs>
  </div>
</template>

<script>
import Tabs from '@/components/TabView/TabsWrapper.vue'
import Tab from '@/components/TabView/Tab.vue'
import { ref } from 'vue'

export default {
  components: { Tabs, Tab },
  setup() {
    const tabHeadings = [
      'Tab 1',
      'Tab 2',
      'Tab 3',
      'Tab 4',
      'Tab 5',
      'Tab 6',
      'Tab 7',
      'Tab 8',
      'Tab 9'
    ]
    const selectedIndex = ref(0)

    const changeIndex = (newIndex) => {
      selectedIndex.value = newIndex
    }
    return { tabHeadings, selectedIndex, changeIndex }
  }
}
</script>

<style lang="scss" scoped>
@use './styles/eventsMain';
</style>
