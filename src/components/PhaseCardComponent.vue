<template>
  <v-card
    color="grey-darken-3"
    class="px-3 rounded-2"
    variant="tonal"
    style="height: 350px;"
  >
    <v-card-title class="text-center">
      <span class="fontPM" v-html="headerText" />
    </v-card-title>
    <v-card-text class="textOpenSans">
      <ul>
        <li class="mb-4" v-for="item in arrayOfItems" :key="item">{{ item }}</li>
      </ul>
    </v-card-text>
  </v-card>

</template>

<script setup lang="ts">
// add props

const props = defineProps({
  headerText: {
    type: String,
    default: ''
  },
  arrayOfItems: {
    type: Array<string>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.rounded-2 {
  border-radius: 10px;
}

</style>
