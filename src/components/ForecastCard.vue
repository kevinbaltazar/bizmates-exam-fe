<script>
export default {
    props: {
        time: '',
        temp: ''
    }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <span>{{time}}</span>
    <slot />

    <span class="text-3xl">{{temp}}</span>
  </div>
</template>

<style>
</style>