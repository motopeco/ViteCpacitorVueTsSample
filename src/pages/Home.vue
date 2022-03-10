<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
})
</script>

<template>
  <div>aaa <a @click="$router.push('/sample')">go</a></div>
</template>
