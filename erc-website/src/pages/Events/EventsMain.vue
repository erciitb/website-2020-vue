<template>
  <h1>Events Page</h1>
  <tabs :headings="tabHeadings" :selectedIndex="selectedIndex">
    <tab :index="0" :selectedIndex="selectedIndex">Hello From Tab 1</tab>
    <tab :index="1" :selectedIndex="selectedIndex">Hello From Tab 2</tab>
    <tab :index="2" :selectedIndex="selectedIndex">Hello From Tab 3</tab>
    <tab :index="3" :selectedIndex="selectedIndex">Hello From Tab 4</tab>
  </tabs>
</template>

<script>
import Tabs from '@/components/TabView/TabsWrapper.vue'
import Tab from '@/components/TabView/Tab.vue'

export default {
  components: { Tabs, Tab },
  setup() {
    const tabHeadings = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']
    const selectedIndex = 0

    return { tabHeadings, selectedIndex }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/eventsMain';
</style>
