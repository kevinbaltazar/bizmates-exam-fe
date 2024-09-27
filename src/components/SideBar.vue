<script>
import SideBarCard from './SideBarCard.vue'
export default {
    components: { SideBarCard },

    props: {
        list: Object
    },

    data() {
        return {
            current: Object
        }
    }
}
</script>

<template>
  <div>
    <div class="h-full w-[325px] rounded-2xl bg-secondary py-8 px-5">
      <div class="flex items-center gap-16 justify-between">
        <div class="flex flex-col">
          <span class="text-3xl">{{ this.list?.city?.name }}</span>
        </div>
        <span class="text-2xl">11:50</span>
      </div>
      <div class="mt-7 flex items-center gap-7">
        <div class="flex flex-col items-center">
          <img
            class="w-32 h-32"
            :src="'https://openweathermap.org/img/wn/'+ this.list.list[0]?.weather[0].icon +'@2x.png'"
            alt=""
          >
          <span class="text-4xl font-medium -mt-7">{{ this.list.list[0]?.main.temp }}°C</span>

        </div>
        <span class="text-2xl mt-9 capitalize">{{ this.list.list[0]?.weather[0].description }}</span>
      </div>

      <div class="flex flex-col gap-6 mt-20">
        <side-bar-card
          title="Wind Speed"
          :description="this.list.list[0]?.wind.speed + ' km/h'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z" />
          </svg>
        </side-bar-card>

        <side-bar-card
          title="Rain"
          :description="this.list.list[0].rain['3h']"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" />
          </svg>
        </side-bar-card>

        <side-bar-card
          title="Pressure"
          :description="this.list.list[0]?.main.pressure + ' HPA'"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M160-400v-80h640v80H160Zm0-120v-80h640v80H160ZM440-80v-128l-64 64-56-56 160-160 160 160-56 56-64-62v126h-80Zm40-560L320-800l56-56 64 64v-128h80v128l64-64 56 56-160 160Z" />
          </svg>

        </side-bar-card>

        <side-bar-card
          title="Humidity"
          :description="this.list.list[0]?.main.humidity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M532-131q-6 5-12.5 8t-14.5 3q-8 0-16-3.5t-14-9.5q-41-44-60.5-90T395-320q0-37 11-78t38-106q23-57 32-87.5t9-56.5q0-34-15-63.5T423-771q-6-6-9.5-14t-3.5-16q0-8 3-14.5t8-12.5q6-6 13.5-9t15.5-3q8 0 15 3t13 8q44 41 65.5 86t21.5 95q0 35-10.5 73.5T518-474q-25 60-34 92t-9 61q0 35 14.5 67.5T534-188q5 6 8 13t3 15q0 8-3 15.5T532-131Zm195 0q-6 5-12.5 8t-14.5 3q-8 0-16-3.5t-14-9.5q-41-44-60.5-89.5T590-319q0-37 11-79t38-106q23-57 32-87t9-56q0-34-15-64.5T618-771q-6-6-9-13.5t-3-15.5q0-8 2.5-14.5T616-827q6-6 14-9.5t16-3.5q8 0 14.5 3t12.5 8q44 41 65.5 86t21.5 95q0 35-10.5 73.5T713-473q-25 60-34 92t-9 60q0 35 15 68.5t45 65.5q5 6 7.5 13t2.5 14q0 8-3 16t-10 13Zm-390 0q-6 5-12.5 8t-14.5 3q-8 0-16-3.5t-14-9.5q-41-44-60.5-89.5T200-319q0-37 11-79t38-106q23-57 32-87t9-56q0-34-15-64.5T228-771q-7-6-10-13.5t-3-15.5q0-8 3-15t8-13q6-6 13.5-9t15.5-3q8 0 15 3t13 8q44 41 65.5 85.5T370-648q0 35-10 73.5T324-474q-25 60-34 92t-9 61q0 35 14.5 68.5T340-187q5 6 7.5 13t2.5 14q0 8-3 16t-10 13Z" />
          </svg>
        </side-bar-card>
      </div>
    </div>
  </div>
</template>