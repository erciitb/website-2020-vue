<template>
  <h1>Team Details Page</h1>
  <div class="about">
    <div v-for="member in currentTeam" :key="member.name">
      <p>{{ member.title }} - {{ member.name }}</p>
    </div>
  </div>
</template>

<script>
import { getDataWithParams } from '@/data/scripts'
import { computed } from 'vue'
import { QUERY_LINKS } from '@/utils/constants'

export default {
  name: 'Team Details',
  setup() {
    const { data: teams, error, load } = getDataWithParams(QUERY_LINKS.TEAMS)
    load()
    const currentTeam = computed(() => {
      try {
        return teams.value['2020-2021'] // value to return
      } catch (err) {
        if (err.message.includes('null')) return 'Loading...' // loading value
        if (error) {
          // eslint-disable-next-line
          console.log(error.message)
          return 'Some error occured...'
        }
        return {} // default value
      }
    })

    return { currentTeam }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/teamDetails';
</style>
