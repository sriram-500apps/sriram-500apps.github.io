<template>
    <!-- We will load Random Avatar -->
    <img :src="userPic()" :class="sizeClass" class="rounded-full inline-block ring-2 ring-white" />
</template>

<script setup lang="ts">
// Importing CryptoJS library for generating MD5 hash
import CryptoJS from 'crypto-js'

interface Props {
    randomKey: any
    sizeClass?: string
}
const props = withDefaults(defineProps<Props>(), {
    sizeClass: 'w-32 h-32',
})

/**
 * Generates a random user avatar image URL based on the current timestamp.
 * @returns {string} A URL to a random avatar image.
 */
const userPic = () => {
    if (!props.randomKey) return
    // Generate MD5 hash from the user identifier
    const hash = CryptoJS.MD5(props.randomKey)
    // Convert the hash to an integer
    const integerHash = parseInt(hash.toString(), 16)
    // Get a random index between 0 and 94
    const randomIndex = integerHash % 95
    // Return the URL of the random avatar image
    return `https://raw.githubusercontent.com/sriram-500apps/sriram-500apps.github.io/main/images/${randomIndex === 0 ? 1 : randomIndex}.png`
}
</script>
