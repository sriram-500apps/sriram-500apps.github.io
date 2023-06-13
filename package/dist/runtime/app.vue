<template>
  <div >
    <Head>
      <Title>{{ title }}</Title>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from '#app'
import { computed } from 'vue'

const route = useRoute()

const title = computed(() => {
  if (typeof route.meta.title !== 'string') return ''

  const s = route.meta.title.split(' - ')
  return s
})
</script>
