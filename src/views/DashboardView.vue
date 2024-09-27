<script>
import Main from '@/components/Main.vue'
import SideBar from '@/components/SideBar.vue'
import axios from 'axios'

export default {
    components: { SideBar, Main },

    data() {
        return {
            city: '',
            forecast: Object,
            places: Object
        }
    },

    methods: {
        getData: function () {
            axios.get('http://127.0.0.1:8000/api/cities?city=' + this.city).then((res) => {
                this.forecast = res.data.forecast
                console.log(res.data.forecast)
                this.places = res.data.places
            })
        }
    }
}
</script>

<template>
  <div class="w-full bg-primary flex justify-center text-white">
    <div class="h-screen  max-w-[1440px] p-10  w-screen  ">
      <div class="h-20 w-full bg-secondary rounded-2xl mb-5 flex items-center">
        <input
          class="mx-5 bg-secondary w-full focus:outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search for Cities"
          v-model.trim="city"
          @keyup.enter="getData()"
        >
      </div>

      <div class="flex gap-5">
        <side-bar
          v-if="Object.keys(this.forecast).length > 0"
          :list="forecast"
        />

        <Main
          :list="forecast?.list"
          :venues="places"
        />
      </div>
    </div>
  </div>
</template>