<template>
  <h1>Events Page</h1>
  <div class="eventTabsWrapper">
    <Tabs
      :headings="tabHeadings"
      :selectedIndex="selectedIndex"
      :changeIndex="changeIndex"
    >
      <Tab :index="0" :selectedIndex="selectedIndex">Hello From Tab 1</Tab>
      <Tab :index="1" :selectedIndex="selectedIndex">Hello From Tab 2</Tab>
      <Tab :index="2" :selectedIndex="selectedIndex">Hello From Tab 3</Tab>
      <Tab :index="3" :selectedIndex="selectedIndex">Hello From Tab 4</Tab>
      <Tab :index="4" :selectedIndex="selectedIndex">Hello From Tab 5</Tab>
      <Tab :index="5" :selectedIndex="selectedIndex">Hello From Tab 6</Tab>
      <Tab :index="6" :selectedIndex="selectedIndex">Hello From Tab 7</Tab>
      <Tab :index="7" :selectedIndex="selectedIndex">Hello From Tab 8</Tab>
      <Tab :index="8" :selectedIndex="selectedIndex">Hello From Tab 9</Tab>
    </Tabs>
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
