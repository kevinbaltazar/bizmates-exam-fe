<script>
export default {
    props: {
        title: '',
        description: ''
    }
}
</script>

<template>
  <div class="bg-primary h-24 rounded-2xl text-center flex flex-col justify-center gap-1">
    <span class="flex justify-center gap-2">
      <slot></slot>
      {{ title }}
    </span>
    <span class="text-3xl">{{ description }}</span>
  </div>
</template>


<style>
</style>