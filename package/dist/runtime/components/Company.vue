<template><img :src="getImgSrc()" /></template>

<script setup lang="ts">
interface Props {
    domain: string
    size?: number
    network?: string
}
const props = withDefaults(defineProps<Props>(), {
    size: 256,
    network: 'google',
})

const getImgSrc = () => {
    if (props.network === 'google') return `https://www.google.com/s2/favicons?domain=${getDomainWithoutSubdomain(props.domain)}&sz=${props.size}`
    if (props.network === 'duckduckgo') return `https://icons.duckduckgo.com/ip3/${getDomainWithoutSubdomain(props.domain)}.ico`
}

const getDomainWithoutSubdomain = (url: string) => {
    const urlParts = new URL(url).hostname.split('.')

    return urlParts
        .slice(0)
        .slice(-(urlParts.length === 4 ? 3 : 2))
        .join('.')
}
</script>
