<script>
import Modal from './Modal.vue'

export default {
    components: { Modal },
    data() {
        return {
            showModal: false,
            id: String
        }
    },

    props: {
        data: {
            type: Array,
            default: []
        }
    }
}
</script>

<template>
  <div v-if="!this.data.length">
    <modal
      v-if="showModal"
      v-on:close="showModal = false"
      :id="id"
      width="lg"
    >
    </modal>

    <div class="mt-5 h-[67vh] overflow-auto scrollbar-hide">
      <p class="mb-5">City Venues</p>
      <div class="flex flex-col gap-2">
        <div
          @click="showModal = true, id = data.fsq_id"
          v-for="data in this.data.results"
          :key="data.fsq_id"
          class="rounded-2xl bg-secondary p-5"
        >
          <div class="">
            <span>{{ data?.name }} <span class=" text-xs">({{ data.closed_bucket }})</span></span>
            <p class="text-sm mt-2">Categories:</p>
            <div class="flex gap-2">
              <div
                v-for="category in data.categories"
                :key="category.id"
              >
                <div class="flex flex-col items-center">
                  <img
                    :src="category.icon.prefix+64+category.icon.suffix"
                    alt=""
                  >
                  <span>{{ category?.name }}</span>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <span class="text-sm">Address:</span>
              <p>{{ data.location.formatted_address }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>