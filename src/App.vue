<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<template>
  <div class="row">
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
