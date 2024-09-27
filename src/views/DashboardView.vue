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
            // forecast: {
            //     cod: '200',
            //     message: 0,
            //     cnt: 6,
            //     list: [
            //         {
            //             dt: 1727406000,
            //             main: {
            //                 temp: 28.32,
            //                 feels_like: 30.32,
            //                 temp_min: 28.32,
            //                 temp_max: 29.97,
            //                 pressure: 1010,
            //                 sea_level: 1010,
            //                 grnd_level: 1007,
            //                 humidity: 63,
            //                 temp_kf: -1.65
            //             },
            //             weather: [
            //                 { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }
            //             ],
            //             clouds: { all: 83 },
            //             wind: { speed: 3.12, deg: 41, gust: 3.75 },
            //             visibility: 10000,
            //             pop: 0.24,
            //             sys: { pod: 'd' },
            //             dt_txt: '2024-09-27 03:00:00'
            //         },
            //         {
            //             dt: 1727416800,
            //             main: {
            //                 temp: 29.85,
            //                 feels_like: 31.99,
            //                 temp_min: 29.85,
            //                 temp_max: 31.02,
            //                 pressure: 1009,
            //                 sea_level: 1009,
            //                 grnd_level: 1006,
            //                 humidity: 57,
            //                 temp_kf: -1.17
            //             },
            //             weather: [
            //                 { id: 500, main: 'Rain', description: 'light rain', icon: '10d' }
            //             ],
            //             clouds: { all: 92 },
            //             wind: { speed: 3.31, deg: 31, gust: 3.82 },
            //             visibility: 10000,
            //             pop: 0.44,
            //             rain: { '3h': 0.19 },
            //             sys: { pod: 'd' },
            //             dt_txt: '2024-09-27 06:00:00'
            //         },
            //         {
            //             dt: 1727427600,
            //             main: {
            //                 temp: 28.03,
            //                 feels_like: 30.21,
            //                 temp_min: 28.03,
            //                 temp_max: 28.03,
            //                 pressure: 1010,
            //                 sea_level: 1010,
            //                 grnd_level: 1008,
            //                 humidity: 66,
            //                 temp_kf: 0
            //             },
            //             weather: [
            //                 { id: 500, main: 'Rain', description: 'light rain', icon: '10n' }
            //             ],
            //             clouds: { all: 100 },
            //             wind: { speed: 2.76, deg: 10, gust: 3.68 },
            //             visibility: 10000,
            //             pop: 0.53,
            //             rain: { '3h': 0.22 },
            //             sys: { pod: 'n' },
            //             dt_txt: '2024-09-27 09:00:00'
            //         },
            //         {
            //             dt: 1727438400,
            //             main: {
            //                 temp: 26.04,
            //                 feels_like: 26.04,
            //                 temp_min: 26.04,
            //                 temp_max: 26.04,
            //                 pressure: 1012,
            //                 sea_level: 1012,
            //                 grnd_level: 1010,
            //                 humidity: 70,
            //                 temp_kf: 0
            //             },
            //             weather: [
            //                 { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }
            //             ],
            //             clouds: { all: 98 },
            //             wind: { speed: 3.58, deg: 7, gust: 6.22 },
            //             visibility: 10000,
            //             pop: 0.43,
            //             sys: { pod: 'n' },
            //             dt_txt: '2024-09-27 12:00:00'
            //         },
            //         {
            //             dt: 1727449200,
            //             main: {
            //                 temp: 25.17,
            //                 feels_like: 25.65,
            //                 temp_min: 25.17,
            //                 temp_max: 25.17,
            //                 pressure: 1012,
            //                 sea_level: 1012,
            //                 grnd_level: 1010,
            //                 humidity: 73,
            //                 temp_kf: 0
            //             },
            //             weather: [
            //                 { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' }
            //             ],
            //             clouds: { all: 86 },
            //             wind: { speed: 2.96, deg: 13, gust: 5.44 },
            //             visibility: 10000,
            //             pop: 0,
            //             sys: { pod: 'n' },
            //             dt_txt: '2024-09-27 15:00:00'
            //         },
            //         {
            //             dt: 1727460000,
            //             main: {
            //                 temp: 24.36,
            //                 feels_like: 24.81,
            //                 temp_min: 24.36,
            //                 temp_max: 24.36,
            //                 pressure: 1012,
            //                 sea_level: 1012,
            //                 grnd_level: 1010,
            //                 humidity: 75,
            //                 temp_kf: 0
            //             },
            //             weather: [
            //                 { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' }
            //             ],
            //             clouds: { all: 83 },
            //             wind: { speed: 2.55, deg: 15, gust: 4.97 },
            //             visibility: 10000,
            //             pop: 0,
            //             sys: { pod: 'n' },
            //             dt_txt: '2024-09-27 18:00:00'
            //         }
            //     ],
            //     city: {
            //         id: 1853909,
            //         name: 'Osaka',
            //         coord: { lat: 34.6937, lon: 135.5022 },
            //         country: 'JP',
            //         population: 2592413,
            //         timezone: 32400,
            //         sunrise: 1727383770,
            //         sunset: 1727426906
            //     }
            // }
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