<script >
import axios from 'axios'
import { RouterLink, RouterView } from 'vue-router'
import DashboardView from './views/DashboardView.vue'

export default {
    components: { DashboardView }
    // mounted() {
    //     axios.get('http://127.0.0.1:8000/api/').then(function (res) {
    //         console.log(res)
    //     })
    // }
}
</script>

<template>
  <div>
    <dashboard-view />
  </div>

  <!-- <div class="wrapper">
    <HelloWorld msg="You did it!" />

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <p class="text-black"></p>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div> -->

</template>