<template><img v-if="show" :src="getImgSrc()" @error="emitError" /></template>

<script setup lang="ts">
import {ref} from 'vue'
import {MD5} from 'crypto-js'

interface Props {
    email: string
    size?: number
}
const props = withDefaults(defineProps<Props>(), {
    size: 32,
})

const show = ref(true)

const getImgSrc = () => {
    const hash = MD5(props.email?.trim())
    return `https://www.gravatar.com/avatar/${hash}?s=${props.size}&d=404`
}

const emit = defineEmits(['error'])

const emitError = () => {
    show.value = false
    emit('error')
}
</script>
