<script>
import ForecastCard from './ForecastCard.vue'
export default {
    components: { ForecastCard },

    props: {
        list: {
            type: Array,
            default: []
        }
    }
}
</script>

<template>
  <div
    v-if="this.list.length > 0"
    class="p-5 h-[200px] w-full bg-secondary rounded-2xl "
  >
    Forecast
    <div class="flex mt-3 justify-evenly">
      <forecast-card
        v-for="l in list"
        :key="l.dt"
        :time="new Date(l.dt_txt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})"
        :temp="Math.ceil(l.main.temp) +'°C'"
      >
        <img
          class="w-20 h-20 -my-3"
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
        >
      </forecast-card>
    </div>
  </div>
</template>

<style>
</style>