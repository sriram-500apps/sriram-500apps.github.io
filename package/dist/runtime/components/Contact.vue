<template>
    <!-- We will first check if image is there or error -->
    <img v-if="currentOrder === AvatarOrder.Image" :src="props.image" :class="props.imgClass" :border="props.border" @error="error" />

    <!-- We will check if Gravatar will come -->
    <AgileRawGravatar v-if="currentOrder === AvatarOrder.Gravatar" :email="props.email" :class="props.imgClass" :border="props.border" @error="error" />

    <!-- We will load from the name - Avatar -->
    <template v-if="currentOrder === AvatarOrder.CharAvatar"
        ><ProfileAvatar class="text-skin-white font-sans text-[0.85rem] [&_.text]:text-skin-white tracking-wide" :username="props.name" :class="props.imgClass" :border="props.border" :size="props.size"
    /></template>
</template>

<script setup lang="ts">
import ProfileAvatar from 'vue-profile-avatar'

interface Props {
    email: string
    name: string
    image?: string
    size?: string
    imgClass?: string
    border?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    image: '',
    imgClass: 'h-10 w-10', // Default avatar size
    border: false,
    size: '', // Default value should be empty to customize the avatar size
})

enum AvatarOrder {
    Image,
    Gravatar,
    CharAvatar,
}

const currentOrder = ref(0)
currentOrder.value = props.image ? AvatarOrder.Image : AvatarOrder.Gravatar

const error = () => {
    currentOrder.value = currentOrder.value + 1
}
</script>
