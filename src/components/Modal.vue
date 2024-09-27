<script>
import axios from 'axios'

export default {
    data() {
        return {
            open: true,
            data: Array
        }
    },
    props: {
        id: String,
        title: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            required: false,
            default: ''
        },
        width: {
            type: String,
            default: 'full',
            validator: (value) => ['xs', 'sm', 'md', 'lg', 'full'].indexOf(value) !== -1
        }
    },
    methods: {
        getVenue() {
            axios.get('http://127.0.0.1:8000/api/venue?fsqId=' + this.id).then((res) => {
                this.data = res.data
            })
        },

        close() {
            this.open = false
            this.$emit('close')
        }
    },
    computed: {
        maxWidth() {
            switch (this.width) {
                case 'xs':
                    return 'max-w-lg'
                case 'sm':
                    return 'max-w-xl'
                case 'md':
                    return 'max-w-2xl'
                case 'lg':
                    return 'max-w-3xl'
                case 'full':
                    return 'max-w-full'
            }
        }
    },
    mounted() {
        const onEscape = (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                this.close()
            }
        }

        document.addEventListener('keydown', onEscape)

        this.getVenue()
    }
}
</script>
  

<template>
  <div
    class="absolute w-full h-full top-0 left-0 flex items-center justify-center z-10"
    v-if="open"
  >
    <div
      class="absolute w-full h-full bg-secondary opacity-70"
      @click="close"
    ></div>

    <div
      class="absolute max-h-full"
      :class="maxWidth"
    >
      <div class="container bg-primary rounded-xl overflow-hidden ">
        <div class="max-h-full px-5 py-10 flex flex-col gap-2">
          <span class="text-4xl text-center mb-5">About {{ data?.name }}</span>
          <div class="flex flex-wrap gap-2 mb-3">
            <img
              v-for="photo in data.photos"
              :key="photo.id"
              class="h-32 w-52 rounded-lg"
              :src="photo.prefix + '500x300'+ photo.suffix"
              alt=""
            >
          </div>
          <p>{{ data?.hours?.display }}</p>
          <p>Price: {{ data?.price }}</p>
          <p>Rating: {{ data?.rating }}</p>
          <p>Address: {{ data?.location?.formatted_address }}</p>
          <p>Menu: {{ data?.menu }}</p>
          <p>Website: {{ data?.website }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
