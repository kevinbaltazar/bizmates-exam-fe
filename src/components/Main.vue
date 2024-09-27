<script>
import CityInfo from './CityInfo.vue'
import Forecast from './Forecast.vue'

export default {
    components: { Forecast, CityInfo },

    props: {
        list: {
            type: Array,
            default: []
        },
        venues: {
            type: Object,
            default: {}
        }
    }
}
</script>

<template>
  <div class="w-full h-full">
    <div>
      <forecast
        v-if="this.list"
        :list="list"
      />
      <city-info :data="venues" />
    </div>
  </div>
</template>

<style>
</style>